import { PageHero } from "@/components/templates/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { LinkCard } from "@/components/ui/LinkCard";
import { audiences } from "@/content/audiences";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Who We Help",
  description:
    "Briarstone Prep works with families and executors, older adults and their adult children, homeowners, and real estate agents through every kind of home transition.",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Who We Help", path: "/who-we-help" }]}
        eyebrow="Who we help"
        title="Every home transition has people at the center of it."
        lead="Whether you're settling an estate, helping a parent move, or preparing a listing, we start with your situation and plan the work around it."
      />
      <div className="container-bs py-20">
        <ul className="grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <li key={a.slug}>
              <LinkCard href={`/who-we-help/${a.slug}`} title={a.navLabel} body={a.summary} headingLevel={2} />
            </li>
          ))}
        </ul>
      </div>
      <CtaBand />
    </>
  );
}
