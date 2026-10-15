import { business, hasPhone, telHref } from "@/content/site";
import { InquiryForm } from "../forms/InquiryForm";
import { SectionHeader } from "../ui/Section";

export function InquirySection({
  sourcePage,
  defaultService,
  title = "Tell us about the property.",
}: {
  sourcePage: string;
  defaultService?: string;
  title?: string;
}) {
  return (
    <section id="request" aria-labelledby="request-heading" className="border-t hairline bg-linen/60 py-20 md:py-24">
      <div className="container-bs grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHeader
            id="request-heading"
            eyebrow="Request a consultation"
            title={title}
            intro="Share a few details and we'll be in touch to talk through the work, the timing, and what to expect. There's no obligation."
          />
          {hasPhone && (
            <p className="mt-8 text-slate">
              Prefer to talk?{" "}
              <a href={telHref} data-track="phone_click" data-track-label="inquiry-section" className="font-medium text-forest underline decoration-brass underline-offset-4">
                Call {business.phoneDisplay}
              </a>
            </p>
          )}
        </div>
        <InquiryForm sourcePage={sourcePage} defaultService={defaultService} compact />
      </div>
    </section>
  );
}
