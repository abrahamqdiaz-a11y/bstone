import { CoreServices } from "@/components/home/CoreServices";
import { Hero } from "@/components/home/Hero";
import { LifeEvents } from "@/components/home/LifeEvents";
import { Problem } from "@/components/home/Problem";
import { Process } from "@/components/home/Process";
import { Proof } from "@/components/home/Proof";
import { Trust } from "@/components/home/Trust";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeader } from "@/components/ui/Section";
import { homeFaqs } from "@/content/home";
import { business } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${business.name} | Estate Cleanouts, Downsizing & Home Prep`,
  absoluteTitle: true,
  description:
    "Estate cleanouts, senior downsizing, and pre-listing home preparation in one coordinated plan. Briarstone Prep clears, cleans, and prepares homes for their next chapter.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <LifeEvents />
      <CoreServices />
      <Problem />
      <Process />
      <WhoWeHelp />
      <Trust />
      <Proof />
      <section aria-labelledby="faq" className="border-t hairline bg-linen/60 py-20 md:py-28">
        <div className="container-bs grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader
            id="faq"
            eyebrow="Questions"
            title="Common questions."
            intro="Straight answers to what people ask us most. If your situation isn't covered here, ask—we're glad to talk it through."
          />
          <FaqList faqs={homeFaqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
