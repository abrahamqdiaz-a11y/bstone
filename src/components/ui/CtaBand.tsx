import { ButtonLink } from "./Button";
import { PhoneButton } from "./PhoneLink";

export function CtaBand({
  title = "Let's Take the Next Step Together.",
  body = "Tell us about the property and what needs to be done. We'll help you understand your options and what comes next.",
  service,
}: {
  title?: string;
  body?: string;
  /** Preselects the service on the contact form. */
  service?: string;
}) {
  const href = service ? `/contact?service=${service}` : "/contact";
  return (
    <section aria-labelledby="cta-heading" className="bg-forest text-ivory">
      <div className="container-bs grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-end md:py-24">
        <div>
          <h2 id="cta-heading" className="!text-ivory text-[2.1rem] leading-[1.1] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/85">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <ButtonLink href={href} variant="light" track="cta_click" trackLabel="cta-band">
            Request a Consultation
          </ButtonLink>
          <PhoneButton variant="outline-light" />
        </div>
      </div>
    </section>
  );
}
