import { z } from "zod";
import { FIELD_LIMITS, PHOTO_LIMITS, serviceOptions, timelineOptions } from "./options";

const serviceValues = serviceOptions.map((o) => o.value) as [string, ...string[]];
const timelineValues = timelineOptions.map((o) => o.value) as [string, ...string[]];

const trimmed = (max: number) => z.string().trim().max(max, `Please keep this under ${max} characters.`);

export const inquirySchema = z
  .object({
    name: trimmed(FIELD_LIMITS.name).min(2, "Please enter your name."),
    email: trimmed(FIELD_LIMITS.email).pipe(z.email("Please enter a valid email address.")),
    phone: trimmed(FIELD_LIMITS.phone).refine(
      (v) => v === "" || v.replace(/\D/g, "").length >= 10,
      "Please enter a phone number with area code, or leave it blank.",
    ),
    location: trimmed(FIELD_LIMITS.location).min(2, "Please enter the property's city or ZIP code."),
    service: z.enum(serviceValues, "Please choose the service you need."),
    timeline: z.enum(timelineValues, "Please choose a timeline."),
    description: trimmed(FIELD_LIMITS.description).min(
      10,
      "Please add a sentence or two about the property and what needs to be done.",
    ),
    consent: z.literal("yes", "Please confirm we may contact you about this request."),
  });

export type Inquiry = z.infer<typeof inquirySchema>;

export type Photo = { filename: string; contentType: string; size: number; base64: string };

/** Validates uploaded photos. Returns an error message or the accepted files. */
export async function readPhotos(files: File[]): Promise<{ error: string } | { photos: Photo[] }> {
  const real = files.filter((f) => f.size > 0);
  if (real.length > PHOTO_LIMITS.maxFiles) {
    return { error: `Please attach up to ${PHOTO_LIMITS.maxFiles} photos.` };
  }
  const total = real.reduce((sum, f) => sum + f.size, 0);
  if (total > PHOTO_LIMITS.maxTotalBytes) {
    return { error: "Photos are too large together. Please attach smaller or fewer images (4 MB total)." };
  }
  const accepted = PHOTO_LIMITS.accept as readonly string[];
  if (real.some((f) => !accepted.includes(f.type))) {
    return { error: "Photos must be JPEG, PNG, WebP, or HEIC images." };
  }
  const photos = await Promise.all(
    real.map(async (f) => ({
      filename: f.name.replace(/[^\w.\- ]+/g, "_").slice(0, 100) || "photo",
      contentType: f.type,
      size: f.size,
      base64: Buffer.from(await f.arrayBuffer()).toString("base64"),
    })),
  );
  return { photos };
}
