"use server";

import { headers } from "next/headers";
import { business, hasPhone } from "@/content/site";
import { buildPayload, deliverLead } from "./deliver";
import type { InquiryFieldName, InquiryState } from "./options";
import { inquirySchema, readPhotos } from "./schema";
import { isHoneypotTripped, isTooFast, verifyTurnstile } from "./spam";

const TEXT_FIELDS = ["name", "email", "phone", "location", "service", "timeline", "description", "consent"] as const;

const fallbackContact = hasPhone ? ` You can also call us at ${business.phoneDisplay}.` : "";

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const values: Partial<Record<InquiryFieldName, string>> = {};
  for (const key of TEXT_FIELDS) {
    const v = formData.get(key);
    values[key] = typeof v === "string" ? v : "";
  }

  // Bots get a quiet success so they don't learn what tripped the filter.
  if (isHoneypotTripped(formData.get("company_website")) || isTooFast(formData.get("startedAt"))) {
    return { status: "success" };
  }

  const h = await headers();
  const ip = h.get("x-nf-client-connection-ip") ?? h.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (!(await verifyTurnstile(formData.get("cf-turnstile-response"), ip))) {
    return {
      status: "error",
      message: "We couldn't verify this submission. Please refresh the page and try again.",
      values,
    };
  }

  const parsed = inquirySchema.safeParse(values);
  const fieldErrors: Partial<Record<InquiryFieldName, string>> = {};
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as InquiryFieldName;
      fieldErrors[key] ??= issue.message;
    }
  }

  const photoResult = await readPhotos(formData.getAll("photos").filter((f): f is File => f instanceof File));
  if ("error" in photoResult) fieldErrors.photos = photoResult.error;

  if (!parsed.success || "error" in photoResult) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const sourcePage = String(formData.get("sourcePage") ?? "").slice(0, 200) || "/contact";
  const outcome = await deliverLead(buildPayload(parsed.data, photoResult.photos, sourcePage));

  if (outcome !== "delivered") {
    return {
      status: "error",
      message: `Sorry—your request didn't go through. Please try again in a few minutes.${fallbackContact}`,
      values,
    };
  }

  return { status: "success" };
}
