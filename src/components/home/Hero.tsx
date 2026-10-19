import { ButtonLink } from "../ui/Button";
import { PhoneButton } from "../ui/PhoneLink";
import { PhotoSlot } from "../ui/PhotoSlot";
import { Eyebrow } from "../ui/Section";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linen/40">
      <div className="container-bs grid items-center gap-12 pt-12 pb-24 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        <div>
          <Eyebrow as="h1">Estate Cleanout and Home Preparation in Sarasota and Manatee</Eyebrow>
          {/* Subheading: the visual headline, kept in its original display style. */}
          <p className="mt-6 font-serif text-[2.75rem] leading-[1.02] font-[450] tracking-[-0.015em] text-balance text-forest sm:text-6xl lg:text-[4.4rem]">
            A home full of history.<br /><em className="font-[inherit] italic text-brass-deep">A clear path forward.</em>
          </p>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
            Estate cleanouts, downsizing, and getting a house ready to sell across Sarasota and Manatee counties. One
            coordinated plan for the physical work, with care for the home and the people moving forward.
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
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t hairline pt-5 text-sm text-slate-soft">
            <span>Your keep list comes first</span>
            <span>Clear scope before work begins</span>
          </div>
        </div>
        <div className="relative">
          <PhotoSlot slot="hero" fallback="home" eager className="aspect-[4/3.3] !rounded-t-[8rem] !rounded-b-card lg:aspect-[4/4.2]" sizes="(min-width: 1024px) 45vw, 100vw" />
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
