import "server-only";
import { createHmac } from "node:crypto";
import { business } from "@/content/site";
import { serviceOptions, timelineOptions } from "./options";
import type { Inquiry, Photo } from "./schema";

export type LeadPayload = {
  type: "inquiry";
  submittedAt: string;
  sourcePage: string;
  contact: { name: string; email: string; phone: string };
  property: { location: string };
  request: {
    service: string;
    serviceLabel: string;
    timeline: string;
    timelineLabel: string;
    description: string;
  };
  photos: Photo[];
};

export function buildPayload(inquiry: Inquiry, photos: Photo[], sourcePage: string): LeadPayload {
  return {
    type: "inquiry",
    submittedAt: new Date().toISOString(),
    sourcePage,
    contact: { name: inquiry.name, email: inquiry.email, phone: inquiry.phone },
    property: { location: inquiry.location },
    request: {
      service: inquiry.service,
      serviceLabel: serviceOptions.find((o) => o.value === inquiry.service)?.label ?? inquiry.service,
      timeline: inquiry.timeline,
      timelineLabel: timelineOptions.find((o) => o.value === inquiry.timeline)?.label ?? inquiry.timeline,
      description: inquiry.description,
    },
    photos,
  };
}

type Adapter = { name: string; send: (payload: LeadPayload) => Promise<void> };

/**
 * Generic CRM webhook (Zapier, Make, HubSpot workflows, a custom endpoint…).
 * The body is JSON; when LEAD_WEBHOOK_SECRET is set, an HMAC-SHA256 signature
 * of the raw body is sent in X-Briarstone-Signature so the receiver can verify it.
 */
function webhookAdapter(url: string, secret?: string): Adapter {
  return {
    name: "webhook",
    async send(payload) {
      const body = JSON.stringify(payload);
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (secret) {
        headers["X-Briarstone-Signature"] = `sha256=${createHmac("sha256", secret).update(body).digest("hex")}`;
      }
      const res = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(10000) });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    },
  };
}

/** Email notification through Resend's HTTP API. */
function resendAdapter(apiKey: string, to: string, from: string): Adapter {
  return {
    name: "email",
    async send(p) {
      const lines = [
        `New inquiry from ${p.contact.name}`,
        "",
        `Email: ${p.contact.email}`,
        `Phone: ${p.contact.phone || "—"}`,
        `Property city/ZIP: ${p.property.location}`,
        `Service: ${p.request.serviceLabel}`,
        `Timeline: ${p.request.timelineLabel}`,
        `Submitted from: ${p.sourcePage}`,
        "",
        p.request.description,
      ];
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: to.split(",").map((s) => s.trim()),
          reply_to: p.contact.email,
          subject: `${business.name} inquiry: ${p.request.serviceLabel} — ${p.property.location}`,
          text: lines.join("\n"),
          attachments: p.photos.map((f) => ({ filename: f.filename, content: f.base64 })),
        }),
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error(`email provider responded ${res.status}`);
    },
  };
}

export function configuredAdapters(env: NodeJS.ProcessEnv = process.env): Adapter[] {
  const adapters: Adapter[] = [];
  if (env.LEAD_WEBHOOK_URL) adapters.push(webhookAdapter(env.LEAD_WEBHOOK_URL, env.LEAD_WEBHOOK_SECRET));
  if (env.RESEND_API_KEY && env.LEAD_EMAIL_TO && env.LEAD_EMAIL_FROM) {
    adapters.push(resendAdapter(env.RESEND_API_KEY, env.LEAD_EMAIL_TO, env.LEAD_EMAIL_FROM));
  }
  return adapters;
}

/**
 * Sends the lead to every configured destination. Succeeds if at least one
 * accepts it. Logs never include the visitor's personal details.
 */
export async function deliverLead(payload: LeadPayload): Promise<"delivered" | "unconfigured" | "failed"> {
  const adapters = configuredAdapters();
  if (adapters.length === 0) {
    if (process.env.NODE_ENV !== "production") {
      console.info(
        `[inquiry] No delivery adapter configured; dev submission accepted (service=${payload.request.service}, photos=${payload.photos.length}).`,
      );
      return "delivered";
    }
    console.error("[inquiry] No delivery adapter configured in production. Set LEAD_WEBHOOK_URL or RESEND_* env vars.");
    return "unconfigured";
  }
  const results = await Promise.allSettled(adapters.map((a) => a.send(payload)));
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`[inquiry] ${adapters[i].name} delivery failed: ${(r.reason as Error).message}`);
    }
  });
  return results.some((r) => r.status === "fulfilled") ? "delivered" : "failed";
}
