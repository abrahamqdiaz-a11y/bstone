import { business } from "@/content/site";
import { PhotoSlot } from "../ui/PhotoSlot";
import { SectionHeader } from "../ui/Section";

/**
 * Trust section. Shows only commitments about how we work — no reviews,
 * ratings, counts, or credentials until they are verified. When real
 * reviews are approved, add them to src/content/proof.ts.
 */
const principles = [
  {
    title: "You decide; we carry it out",
    body: "Your keep list and instructions come first. Anything uncertain is set aside for you, not thrown away.",
  },
  {
    title: "Plain answers about scope",
    body: "We'll tell you what's included, what isn't, and when a job is better suited to a specialist.",
  },
  {
    title: "Respect for the home and its story",
    body: "We treat every house as someone's home, because it was—and the belongings in it as part of a life.",
  },
];

export function Trust() {
  return (
    <section aria-labelledby="trust" className="py-20 md:py-28">
      <div className="container-bs grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
        <PhotoSlot slot="trust" fallback="door" className="aspect-[4/3.4] order-last lg:order-first" />
        <div>
          <SectionHeader
            id="trust"
            eyebrow="How we work"
            title="How we handle a family home and its contents"
            intro={`${business.ownershipStatement ? `${business.ownershipStatement}. ` : ""}Briarstone Prep was built around a simple idea: families going through a home transition deserve one team they can rely on—people who communicate clearly and treat the home with care.`}
          />
          <ul className="mt-10 space-y-7">
            {principles.map((p) => (
              <li key={p.title} className="flex gap-5">
                <span aria-hidden="true" className="mt-2 h-px w-8 shrink-0 bg-brass" />
                <div>
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-slate-soft">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
