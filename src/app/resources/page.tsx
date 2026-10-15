import { PageHero } from "@/components/templates/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { LinkCard } from "@/components/ui/LinkCard";
import { resources } from "@/content/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Planning Guides & Checklists",
  description:
    "Free, practical guides for estate cleanouts, inherited homes, senior downsizing, and preparing a house for sale—written to help you plan the next step.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Resources", path: "/resources" }]}
        eyebrow="Resources"
        title="Planning guides for a home in transition."
        lead="Practical checklists and step-by-step guides to help you understand the work ahead—whether you hire help or do it yourself."
        showCtas={false}
      />
      <div className="container-bs py-20">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <li key={r.slug}>
              <LinkCard
                href={`/resources/${r.slug}`}
                kicker={`${r.readingMinutes} min read`}
                title={r.title}
                body={r.summary}
                cta="Read the guide"
                headingLevel={2}
              />
            </li>
          ))}
        </ul>
      </div>
      <CtaBand />
    </>
  );
}
