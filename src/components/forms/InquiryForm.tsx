"use client";

import Link from "next/link";
import Script from "next/script";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { submitInquiry } from "@/lib/inquiry/action";
import {
  FIELD_LIMITS,
  initialInquiryState,
  PHOTO_LIMITS,
  serviceOptions,
  timelineOptions,
  type InquiryFieldName,
} from "@/lib/inquiry/options";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const fieldOrder: InquiryFieldName[] = [
  "name",
  "email",
  "phone",
  "location",
  "service",
  "timeline",
  "description",
  "photos",
  "consent",
];

const fieldLabels: Record<InquiryFieldName, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  location: "Property city or ZIP code",
  service: "Service needed",
  timeline: "Timeline",
  description: "Project description",
  photos: "Photos",
  consent: "Contact consent",
};

export function InquiryForm({
  defaultService = "",
  sourcePage,
  compact = false,
}: {
  defaultService?: string;
  sourcePage: string;
  compact?: boolean;
}) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialInquiryState);
  const [service, setService] = useState(defaultService);
  const [startedAt, setStartedAt] = useState(0);
  const startedRef = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const errors = state.fieldErrors ?? {};
  const values = state.values ?? {};

  useEffect(() => {
    // Timing baseline and URL preselect are browser-only values.
    /* eslint-disable react-hooks/set-state-in-effect */
    setStartedAt(Date.now());
    const fromUrl = new URLSearchParams(window.location.search).get("service");
    if (fromUrl && serviceOptions.some((o) => o.value === fromUrl)) setService(fromUrl);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
      track("inquiry_submitted", { service, page: sourcePage });
    } else if (state.status === "error") {
      summaryRef.current?.focus();
      track("form_validation_error", { fields: Object.keys(state.fieldErrors ?? {}).join(",") });
    }
    // Only react to new results.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-card border border-forest/20 bg-white p-8 shadow-card outline-none sm:p-10"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-brass-deep uppercase">Request received</p>
        <h2 className="mt-3 text-3xl">Thank you. We&rsquo;ll be in touch soon.</h2>
        <p className="mt-4 leading-relaxed text-slate">
          We&rsquo;ve received your request and will reach out to talk through the property and next steps. If
          anything changes in the meantime, just reply to our message when we contact you.
        </p>
        <Link href="/resources" className="mt-6 inline-block font-medium text-forest underline decoration-brass underline-offset-4">
          Browse our planning guides while you wait
        </Link>
      </div>
    );
  }

  const describedBy = (name: InquiryFieldName, hint?: boolean) =>
    [hint ? `${id}-${name}-hint` : "", errors[name] ? `${id}-${name}-error` : ""].filter(Boolean).join(" ") ||
    undefined;

  const inputClass = (name: InquiryFieldName) =>
    `mt-2 block w-full rounded-lg border bg-white px-4 py-3 text-base text-slate placeholder:text-slate-soft/70 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 ${
      errors[name] ? "border-error" : "border-slate/25"
    }`;

  const errorList = fieldOrder.filter((f) => errors[f]);

  return (
    <form
      action={formAction}
      noValidate
      onFocus={() => {
        if (!startedRef.current) {
          startedRef.current = true;
          track("form_start", { page: sourcePage });
        }
      }}
      onSubmit={() => track("form_submit_attempt", { page: sourcePage })}
      className={`rounded-card border hairline bg-white shadow-card ${compact ? "p-6 sm:p-8" : "p-6 sm:p-10"}`}
      aria-describedby={`${id}-required-note`}
    >
      {state.status === "error" && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-8 rounded-lg border border-error/40 bg-error/5 p-5 text-slate outline-none"
        >
          <p className="font-medium text-error">{state.message}</p>
          {errorList.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {errorList.map((f) => (
                <li key={f}>
                  <a href={`#${id}-${f}`} className="underline underline-offset-2">
                    {fieldLabels[f]}: {errors[f]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <p id={`${id}-required-note`} className="mb-6 text-sm text-slate-soft">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" id={id} error={errors.name} required>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={FIELD_LIMITS.name}
            defaultValue={values.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={inputClass("name")}
          />
        </Field>
        <Field label="Email" name="email" id={id} error={errors.email} required>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={FIELD_LIMITS.email}
            defaultValue={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={inputClass("email")}
          />
        </Field>
        <Field label="Phone" name="phone" id={id} error={errors.phone} hint="Optional, if you'd prefer a call.">
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={FIELD_LIMITS.phone}
            defaultValue={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone", true)}
            className={inputClass("phone")}
          />
        </Field>
        <Field label="Property city or ZIP code" name="location" id={id} error={errors.location} required>
          <input
            id={`${id}-location`}
            name="location"
            type="text"
            autoComplete="postal-code"
            required
            maxLength={FIELD_LIMITS.location}
            defaultValue={values.location}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={describedBy("location")}
            className={inputClass("location")}
          />
        </Field>
        <Field label="Service needed" name="service" id={id} error={errors.service} required>
          <select
            id={`${id}-service`}
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy("service")}
            className={inputClass("service")}
          >
            <option value="" disabled>
              Choose one…
            </option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline" name="timeline" id={id} error={errors.timeline} required>
          <select
            id={`${id}-timeline`}
            name="timeline"
            required
            defaultValue={values.timeline ?? ""}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={describedBy("timeline")}
            className={inputClass("timeline")}
          >
            <option value="" disabled>
              Choose one…
            </option>
            {timelineOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field
            label="Tell us about the property and what needs to be done"
            name="description"
            id={id}
            error={errors.description}
            required
            hint="For example: the size of the home, how full it is, and any deadlines. Please don't include financial or medical details."
          >
            <textarea
              id={`${id}-description`}
              name="description"
              rows={5}
              required
              maxLength={FIELD_LIMITS.description}
              defaultValue={values.description}
              aria-invalid={Boolean(errors.description)}
              aria-describedby={describedBy("description", true)}
              className={inputClass("description")}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field
            label="Photos"
            name="photos"
            id={id}
            error={errors.photos}
            hint={`Optional. Up to ${PHOTO_LIMITS.maxFiles} images, 4 MB total (JPEG, PNG, WebP, or HEIC).`}
          >
            <input
              id={`${id}-photos`}
              name="photos"
              type="file"
              multiple
              accept={PHOTO_LIMITS.accept.join(",")}
              aria-invalid={Boolean(errors.photos)}
              aria-describedby={describedBy("photos", true)}
              className="mt-2 block w-full text-sm text-slate file:mr-4 file:rounded-full file:border-0 file:bg-linen file:px-4 file:py-2.5 file:font-medium file:text-forest hover:file:bg-taupe"
            />
          </Field>
        </div>
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-company_website`}>Leave this field empty</label>
        <input id={`${id}-company_website`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="hidden" name="sourcePage" value={sourcePage} />

      <div className="mt-6">
        <div className="flex gap-3">
          <input
            id={`${id}-consent`}
            name="consent"
            type="checkbox"
            value="yes"
            required
            defaultChecked={values.consent === "yes"}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${id}-consent-error` : undefined}
            className="mt-1 h-5 w-5 shrink-0 rounded border-slate/40 accent-forest"
          />
          <label htmlFor={`${id}-consent`} className="text-sm leading-relaxed text-slate">
            I agree that Briarstone Prep may contact me by email or phone about this request. We use your details
            only to respond. See our{" "}
            <Link href="/privacy" className="text-forest underline underline-offset-2">
              privacy policy
            </Link>
            . <span aria-hidden="true">*</span>
          </label>
        </div>
        {errors.consent && (
          <p id={`${id}-consent-error`} className="mt-2 text-sm font-medium text-error">
            {errors.consent}
          </p>
        )}
      </div>

      {TURNSTILE_SITE_KEY && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div className="cf-turnstile mt-6" data-sitekey={TURNSTILE_SITE_KEY} data-theme="light" />
        </>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-forest px-8 font-medium text-ivory transition-colors hover:bg-forest-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sending…" : "Request a Consultation"}
      </button>
      <p aria-live="polite" className="sr-only">
        {pending ? "Sending your request" : ""}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  id,
  error,
  hint,
  required,
  children,
}: {
  label: string;
  name: InquiryFieldName;
  id: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`${id}-${name}`} className="block text-[0.95rem] font-medium text-forest">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {hint && (
        <p id={`${id}-${name}-hint`} className="mt-1 text-sm text-slate-soft">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-${name}-error`} className="mt-2 text-sm font-medium text-error">
          {error}
        </p>
      )}
    </div>
  );
}
