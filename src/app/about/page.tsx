import { Process } from "@/components/home/Process";
import { PageHero } from "@/components/templates/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeader } from "@/components/ui/Section";
import { business } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Briarstone Prep helps families, executors, homeowners, and agents with the physical work of a home transition: one plan, clear updates, and care for the home.",
  path: "/about",
});

const values = [
  {
    title: "Steady",
    body: "Home transitions often arrive during hard seasons. We aim to be the calm, organized presence that keeps the work moving.",
  },
  {
    title: "Clear",
    body: "You'll know what's included, who's doing it, and where things stand. If something is outside our scope, we'll say so.",
  },
  {
    title: "Careful",
    body: "We treat every house as someone's home and every box as possibly important until you tell us otherwise.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About us"
        title="Steady hands for a home in transition."
        lead={`Briarstone Prep helps people through the physical work of moving a home toward its next chapter—clearing belongings, arranging donations, cleaning, and preparing the property for what comes next.${
          business.ownershipStatement ? ` ${business.ownershipStatement}.` : ""
        }`}
        photo={{ slot: "about", fallback: "garden" }}
      />

      <section aria-labelledby="why" className="py-20 md:py-24">
        <div className="container-bs grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader id="why" eyebrow="Why we exist" title="Because no one should have to project-manage a house during a hard time." />
          <div className="space-y-5 text-[1.0625rem] leading-[1.75]">
            <p>
              Settling a parent&rsquo;s home, preparing an inherited house, or helping someone move into senior living
              usually involves a long list of separate tasks and separate companies. The work itself is hard enough.
              Coordinating it—while grieving, working, or living hundreds of miles away—can be harder.
            </p>
            <p>
              Briarstone Prep exists to carry that load. We bring the work into one plan and one point of contact,
              handle what we&rsquo;ve agreed to do, and keep you informed along the way.
            </p>
            <p>
              The name says something about how we want to work. Briar is the hardy, tangled growth that takes over a
              Pacific Northwest yard when no one has time to tend it. Stone is what stays solid underneath. We clear
              the tangle and leave you on steady ground.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="values" className="border-y hairline bg-white py-20 md:py-24">
        <div className="container-bs">
          <SectionHeader id="values" eyebrow="What we value" title="How we want every client to feel." />
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="border-t-2 border-forest pt-6">
                <h3 className="text-[1.6rem]">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-soft">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="scope" className="py-20 md:py-24">
        <div className="container-bs grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeader id="scope" eyebrow="Honest scope" title="What we do—and what we don't." />
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.75]">
              <p>
                We focus on the physical work of a home transition: sorting and clearing belongings, arranging
                donations, removing what&rsquo;s left, cleaning, and pre-market repairs. Where a task is better handled
                by a specialist, we&rsquo;ll coordinate it or point you to the right person, and your plan will say so.
              </p>
              <p>
                We don&rsquo;t provide legal, tax, appraisal, or real estate advice, and we don&rsquo;t perform work
                that requires a licensed trade we don&rsquo;t hold. When those questions come up, we&rsquo;ll pause and
                let you check with the right professional.
              </p>
            </div>
          </div>
          <PhotoSlot slot="problem" fallback="interior" className="aspect-[4/3]" />
        </div>
      </section>

      <div className="border-t hairline">
        <Process headingId="about-process" />
      </div>
      <CtaBand />
    </>
  );
}
