/**
 * Inquiry form option lists. Kept free of server-only and validation imports so
 * the client form can use them without pulling zod into the browser bundle.
 */
export const serviceOptions = [
  { value: "estate-cleanout", label: "Estate cleanout" },
  { value: "inherited-home", label: "Inherited home cleanout" },
  { value: "senior-downsizing", label: "Senior downsizing or move" },
  { value: "estate-transition", label: "Full estate transition" },
  { value: "pre-listing", label: "Pre-listing home preparation" },
  { value: "home-cleanout", label: "Home cleanout" },
  { value: "home-projects", label: "Handyman or home projects" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "2-4-weeks", label: "Within 2–4 weeks" },
  { value: "1-3-months", label: "Within 1–3 months" },
  { value: "flexible", label: "Flexible / just planning" },
] as const;

export type ServiceValue = (typeof serviceOptions)[number]["value"];
export type TimelineValue = (typeof timelineOptions)[number]["value"];

export const PHOTO_LIMITS = {
  maxFiles: 3,
  /** Combined size. Kept under typical serverless request limits (~6 MB). */
  maxTotalBytes: 4 * 1024 * 1024,
  accept: ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"],
} as const;

export const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  location: 80,
  description: 2000,
} as const;

export type InquiryFieldName =
  | "name"
  | "email"
  | "phone"
  | "location"
  | "service"
  | "timeline"
  | "description"
  | "photos"
  | "consent";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<InquiryFieldName, string>>;
  /** Echo of submitted text values so fields repopulate after an error. */
  values?: Partial<Record<InquiryFieldName, string>>;
};

export const initialInquiryState: InquiryState = { status: "idle" };
