import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Reviews } from "@/components/proof/Reviews";
import { FaqList } from "@/components/ui/FaqList";
import { PhoneIcon } from "@/components/ui/PhoneLink";
import { Eyebrow, SectionHeader } from "@/components/ui/Section";
import { business, cityList, hasPhone, serviceArea, telHref } from "@/content/site";
import type { Faq } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Briarstone Prep | Estate Cleanouts in Sarasota",
  description:
    "Request an estate cleanout, downsizing or home prep consultation in Sarasota or Manatee. Tell us about the property and we'll talk through next steps.",
  path: "/contact",
});

const nextSteps = [
  "We review your request and any photos you've shared.",
  "We reach out to talk through the property, your goals, and the timeline.",
  "If it's a good fit, we agree on a plan and scope before any work begins.",
];

const contactFaqs: Faq[] = [
  {
    q: "What should I include in my request?",
    a: "The property's city or ZIP code, what needs to happen, and any date you're working toward, such as a closing or move-out. A few photos of the fullest rooms help us understand the job.",
  },
  {
    q: "Can I request a consultation for a parent or relative?",
    a: "Yes. Many requests come from adult children or executors. Tell us your role and who makes the final decisions, and we'll include them in the conversation.",
  },
  {
    q: "Does sending a request commit me to anything?",
    a: "No. A request starts a conversation about the property; nothing is scheduled until you've agreed to a plan and scope.",
  },
  {
    q: "What if the property is just outside your area?",
    a: "Send the request anyway with the city or ZIP code. We'll tell you honestly whether we can take it on.",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="container-bs pt-8 pb-20">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-[2.4rem] leading-[1.06] sm:text-5xl">
              Request an Estate Cleanout or Home Prep Consultation in Sarasota
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Tell us about the property in {serviceArea.region} and what needs to be done. We&rsquo;ll help you
              understand your options and what comes next—no obligation.
            </p>

            {hasPhone && (
              <a
                href={telHref}
                data-track="phone_click"
                data-track-label="contact-hero"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-forest/30 px-6 font-serif text-2xl text-forest"
              >
                <PhoneIcon className="h-5 w-5" />
                {business.phoneDisplay}
              </a>
            )}

            <h2 className="mt-12 font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">What happens after you get in touch</h2>
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
                <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">Call or email us directly</h2>
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

            <h2 className="mt-12 font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">Our service area</h2>
            <p className="mt-4 leading-relaxed text-slate">
              We work across {serviceArea.counties.join(" and ")}, including {cityList()}. Include the
              property&rsquo;s city or ZIP code and we&rsquo;ll confirm it&rsquo;s in our area.{" "}
              <Link href="/service-areas" className="text-forest underline decoration-brass underline-offset-4">
                See all service areas
              </Link>
              .
            </p>
          </div>
          <InquiryForm sourcePage="/contact" />
        </div>
      </div>
      <section aria-labelledby="contact-faq" className="border-t hairline bg-linen/60 py-20">
        <div className="container-bs grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader id="contact-faq" eyebrow="Questions" title="Before you send a request" />
          <FaqList faqs={contactFaqs} />
        </div>
      </section>
      <Reviews />
    </>
  );
}
