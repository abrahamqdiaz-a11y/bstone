import Link from "next/link";
import { CoreServices } from "@/components/home/CoreServices";
import { Hero } from "@/components/home/Hero";
import { LifeEvents } from "@/components/home/LifeEvents";
import { Problem } from "@/components/home/Problem";
import { Process } from "@/components/home/Process";
import { Proof } from "@/components/home/Proof";
import { Trust } from "@/components/home/Trust";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import { Reviews } from "@/components/proof/Reviews";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeader } from "@/components/ui/Section";
import { homeFaqs } from "@/content/home";
import { publishedServiceAreaPages } from "@/content/serviceAreas";
import { serviceArea } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Estate Cleanouts & Home Prep in Sarasota | Briarstone Prep",
  description:
    "Estate cleanouts, senior downsizing and pre-listing prep in Sarasota and Manatee. One team clears, cleans and repairs. Call to talk through your home.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <LifeEvents />
      <CoreServices />
      <Problem />
      <Process title="How a cleanout and home-prep project works" />
      <WhoWeHelp />
      <Trust />
      <Proof />
      <Reviews />
      <section aria-labelledby="areas" className="border-t hairline py-20 md:py-24">
        <div className="container-bs grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader id="areas" eyebrow="Where we work" title={`Serving ${serviceArea.region}`} />
          <div className="space-y-5 text-[1.0625rem] leading-[1.75]">
            <p>
              We clear, clean, and prepare homes across {serviceArea.counties.join(" and ")}, from downtown condos to
              gated communities and island homes. Condo move-out rules, gate access, and houses closed up through a
              humid summer are part of the job here, and we plan for them from the first call.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {publishedServiceAreaPages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/service-areas/${p.slug}`} className="font-medium text-forest underline decoration-brass underline-offset-4">
                    Estate cleanouts in {p.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="font-medium text-forest underline decoration-brass underline-offset-4">
                  All service areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section aria-labelledby="faq" className="border-t hairline bg-linen/60 py-20 md:py-28">
        <div className="container-bs grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader
            id="faq"
            eyebrow="Questions"
            title="Questions about estate cleanouts and home preparation"
            intro="Straight answers to what people ask us most. If your situation isn't covered here, ask—we're glad to talk it through."
          />
          <FaqList faqs={homeFaqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
