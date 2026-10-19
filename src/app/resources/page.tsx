import Link from "next/link";
import { PageHero } from "@/components/templates/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { LinkCard } from "@/components/ui/LinkCard";
import { resourceGroups, resources } from "@/content/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sarasota Estate & Home Prep Planning Guides | Briarstone",
  description:
    "Free guides for Sarasota and Florida families: estate cleanout checklists, probate questions, inherited houses, downsizing, costs and selling a home.",
  path: "/resources",
  ogImage: "resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Resources", path: "/resources" }]}
        eyebrow="Resources"
        title="Planning Guides for Sarasota Families Clearing, Moving or Selling a Home"
        lead="Practical checklists and step-by-step guides to help you understand the work ahead in Sarasota and across Florida—whether you hire help or do it yourself."
        showCtas={false}
      />
      <div className="container-bs py-20">
        <div className="max-w-3xl space-y-5 text-[1.0625rem] leading-[1.75]">
          <p>
            Most people only clear a family home once or twice in their lives, usually at a hard moment and with
            little warning. These guides are written to answer the questions families ask us most: what to do first,
            what can wait, what needs an attorney, and what the work involves. They&rsquo;re grouped by situation, so
            start with the one closest to yours.
          </p>
          <p>
            Nothing here is legal, tax, or financial advice. Where a decision depends on the law—probate, a former
            tenant&rsquo;s belongings, firearms—we say so and suggest who to ask.
          </p>
        </div>
        <div className="mt-16 space-y-20">
          {resourceGroups.map((g) => {
            const items = resources.filter((r) => r.group === g.id);
            return (
              <section key={g.id} aria-labelledby={`group-${g.id}`} className="border-t hairline pt-10">
                <h2 id={`group-${g.id}`} className="text-[1.9rem] leading-tight">
                  {g.title}
                </h2>
                <p className="mt-4 max-w-3xl text-[1.0625rem] leading-[1.75] text-slate">{g.intro}</p>
                <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((r) => (
                    <li key={r.slug}>
                      <LinkCard
                        href={`/resources/${r.slug}`}
                        kicker={`${r.readingMinutes} min read`}
                        title={r.title}
                        body={r.summary}
                        cta="Read the guide"
                      />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
        <p className="mt-16 max-w-3xl text-[1.0625rem] leading-[1.75]">
          Ready to talk about a specific house? See our{" "}
          <Link href="/services/estate-cleanouts" className="text-forest underline decoration-brass underline-offset-4">
            estate cleanout services in Sarasota
          </Link>{" "}
          or the{" "}
          <Link href="/service-areas" className="text-forest underline decoration-brass underline-offset-4">
            areas we serve
          </Link>
          .
        </p>
      </div>
      <CtaBand />
    </>
  );
}
