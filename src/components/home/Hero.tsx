import { ButtonLink } from "../ui/Button";
import { PhoneButton } from "../ui/PhoneLink";
import { PhotoSlot } from "../ui/PhotoSlot";
import { Eyebrow } from "../ui/Section";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-bs grid items-center gap-12 pt-12 pb-24 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        <div>
          <Eyebrow>Estate Transitions &amp; Home Preparation</Eyebrow>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
            Preparing a home for <em className="font-[inherit] italic text-brass-deep">what&rsquo;s next.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
            From estate cleanouts and downsizing to repairs and getting a property ready to sell, Briarstone Prep takes
            on the physical work of a home transition—so you can focus on the people and decisions that matter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" track="cta_click" trackLabel="hero">
              Request a Consultation
            </ButtonLink>
            <PhoneButton
              fallback={
                <ButtonLink href="#how-it-works" variant="secondary" track="cta_click" trackLabel="hero-secondary">
                  See how it works
                </ButtonLink>
              }
            />
          </div>
        </div>
        <div className="relative">
          <PhotoSlot slot="hero" fallback="home" eager className="aspect-[4/3.3] lg:aspect-[4/4.2]" sizes="(min-width: 1024px) 45vw, 100vw" />
          <div className="mt-4 rounded-card border hairline bg-ivory p-5 shadow-card sm:absolute sm:-bottom-12 sm:right-6 sm:mt-0 sm:w-[23rem]">
            <p className="font-serif text-[0.95rem] leading-snug text-forest sm:text-lg">
              Clearing &middot; Donations &middot; Cleaning &middot; Repairs
            </p>
            <p className="mt-1.5 text-sm text-slate-soft">One plan, one point of contact, start to finish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
