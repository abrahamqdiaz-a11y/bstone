import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Eyebrow } from "@/components/ui/Section";
import { business, hasPhone, telHref } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request a Consultation",
  description:
    "Tell Briarstone Prep about the property and what needs to be done—an estate cleanout, downsizing, or preparing a home to sell. We'll be in touch about next steps.",
  path: "/contact",
});

const nextSteps = [
  "We review your request and any photos you've shared.",
  "We reach out to talk through the property, your goals, and the timeline.",
  "If it's a good fit, we agree on a plan and scope before any work begins.",
];

export default function ContactPage() {
  return (
    <div className="container-bs pt-8 pb-20">
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 text-[2.4rem] leading-[1.06] sm:text-5xl">Request a consultation.</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Tell us about the property and what needs to be done. We&rsquo;ll help you understand your options and
            what comes next—no obligation.
          </p>

          <h2 className="mt-12 font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">What happens next</h2>
          <ol className="mt-5 space-y-5">
            {nextSteps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/25 font-serif text-forest">
                  {i + 1}
                </span>
                <span className="pt-1 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {(hasPhone || business.email || business.hours) && (
            <div className="mt-12 rounded-card border hairline bg-white p-6">
              <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">Reach us directly</h2>
              <ul className="mt-4 space-y-2">
                {hasPhone && (
                  <li>
                    <a href={telHref} data-track="phone_click" data-track-label="contact-page" className="font-serif text-2xl text-forest">
                      {business.phoneDisplay}
                    </a>
                  </li>
                )}
                {business.email && (
                  <li>
                    <a href={`mailto:${business.email}`} className="text-forest underline underline-offset-4">
                      {business.email}
                    </a>
                  </li>
                )}
                {business.hours && <li className="text-slate-soft">{business.hours}</li>}
              </ul>
            </div>
          )}

          <p className="mt-8 text-sm leading-relaxed text-slate-soft">
            {business.confirmedServiceCities.length > 0
              ? `We work in ${business.confirmedServiceCities.join(", ")}, and nearby communities. `
              : `We work in ${business.serviceRegion}. `}
            Include the property&rsquo;s city or ZIP code and we&rsquo;ll confirm whether it&rsquo;s in our service area.
          </p>
        </div>
        <InquiryForm sourcePage="/contact" />
      </div>
    </div>
  );
}
