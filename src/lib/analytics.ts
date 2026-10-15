/**
 * Client-side event helper. Events go to window.dataLayer (Google Tag Manager)
 * only when GTM is configured and the visitor has accepted analytics. Never
 * pass personal details (names, emails, phone numbers, free text) as params.
 */
export type AnalyticsEvent =
  | "phone_click"
  | "email_click"
  | "cta_click"
  | "service_cta_click"
  | "form_start"
  | "form_submit_attempt"
  | "form_validation_error"
  | "inquiry_submitted";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export const CONSENT_KEY = "bs-analytics-consent";

export function hasAnalyticsConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}

export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_GTM_ID) return;
  if (!hasAnalyticsConsent()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
