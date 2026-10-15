"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_KEY, track, type AnalyticsEvent } from "@/lib/analytics";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Loads Google Tag Manager only after the visitor opts in, and tracks clicks
 * on elements marked with data-track (phone links, CTAs) through one delegated
 * listener. Renders nothing when NEXT_PUBLIC_GTM_ID is not set.
 */
export function Analytics() {
  const [consent, setConsent] = useState<"granted" | "denied" | "unset" | null>(null);

  useEffect(() => {
    if (!GTM_ID) return;
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      /* storage blocked */
    }
    // Reading localStorage must wait until after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(stored === "granted" || stored === "denied" ? stored : "unset");
  }, []);

  useEffect(() => {
    if (!GTM_ID) return;
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest?.("[data-track], a[href^='tel:'], a[href^='mailto:']");
      if (!el) return;
      const href = el.getAttribute("href") ?? "";
      const event = (el.getAttribute("data-track") ||
        (href.startsWith("tel:") ? "phone_click" : "email_click")) as AnalyticsEvent;
      track(event, { label: el.getAttribute("data-track-label") ?? undefined, page: window.location.pathname });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GTM_ID || consent === null) return null;

  function choose(value: "granted" | "denied") {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* storage blocked */
    }
    setConsent(value);
  }

  return (
    <>
      {consent === "granted" && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
      {consent === "unset" && (
        <div
          role="region"
          aria-label="Analytics preferences"
          className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl rounded-card border hairline bg-white p-5 shadow-card lg:bottom-6"
        >
          <p className="text-sm leading-relaxed text-slate">
            We&rsquo;d like to use analytics cookies to understand which pages are helpful. We never share what you type in
            our forms with analytics.{" "}
            <a href="/privacy" className="text-forest underline underline-offset-2">
              Privacy policy
            </a>
          </p>
          <div className="mt-4 flex gap-3">
            <button type="button" onClick={() => choose("granted")} className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory">
              Accept
            </button>
            <button type="button" onClick={() => choose("denied")} className="rounded-full border border-forest/30 px-5 py-2.5 text-sm font-medium text-forest">
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
