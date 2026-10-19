import { processSteps } from "@/content/home";
import { SectionHeader } from "../ui/Section";

export function Process({
  id = "how-it-works",
  headingId = "process-heading",
  title,
}: {
  id?: string;
  headingId?: string;
  /** Page-specific heading, so pages that share this section don't share an H2. */
  title: string;
}) {
  return (
    <section id={id} aria-labelledby={headingId} className="py-20 md:py-28">
      <div className="container-bs">
        <SectionHeader
          id={headingId}
          eyebrow="How it works"
          title={title}
          intro="Every property is different, but the way we work stays the same: understand first, agree on a plan, then do the work."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative border-t-2 border-forest pt-6">
              <span className="font-serif text-sm text-brass-deep">Step {i + 1}</span>
              <h3 className="mt-2 text-[1.45rem] leading-snug">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
