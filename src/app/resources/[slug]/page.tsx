import { notFound } from "next/navigation";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/templates/PageHero";
import { RelatedServices } from "@/components/templates/RelatedLinks";
import { ContentSections } from "@/components/ui/ContentSections";
import { CtaBand } from "@/components/ui/CtaBand";
import Link from "next/link";
import { getResource, resources } from "@/content/resources";
import { getService } from "@/content/services";
import { serviceArea } from "@/content/site";
import { ogImagePath } from "@/lib/og";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(props: PageProps<"/resources/[slug]">) {
  const { slug } = await props.params;
  const r = getResource(slug);
  if (!r) return {};
  return pageMetadata({
    title: r.metaTitle,
    description: r.metaDescription,
    path: `/resources/${r.slug}`,
    type: "article",
    ogImage: `guide-${r.slug}`,
    article: { publishedTime: r.published, modifiedTime: r.updated },
  });
}

const dateFmt = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default async function ResourcePage(props: PageProps<"/resources/[slug]">) {
  const { slug } = await props.params;
  const r = getResource(slug);
  if (!r) notFound();
  const path = `/resources/${r.slug}`;
  const service = getService(r.services[0])!;
  const image = ogImagePath(`guide-${r.slug}`);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Resources", path: "/resources" },
          { name: r.metaTitle.split(" | ")[0], path },
        ]}
        eyebrow="Planning guide"
        title={r.title}
        lead={r.summary}
        showCtas={false}
      />
      <article className="container-bs py-16">
        <div className="mx-auto max-w-[44rem]">
          <p className="text-sm text-slate-soft">
            Published <time dateTime={r.published}>{dateFmt.format(new Date(r.published))}</time>
            {r.updated !== r.published && (
              <>
                {" "}&middot; Updated <time dateTime={r.updated}>{dateFmt.format(new Date(r.updated))}</time>
              </>
            )}{" "}
            &middot; {r.readingMinutes} min read
          </p>
          <div className="mt-8 space-y-5 text-[1.125rem] leading-[1.75]">
            {r.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              If you&rsquo;d rather hand the work to a team, see our{" "}
              <Link href={`/services/${service.slug}`} className="text-forest underline decoration-brass underline-offset-4 hover:decoration-forest">
                {service.navLabel.toLowerCase()} in {serviceArea.short}
              </Link>
              .
            </p>
          </div>
          {r.callout && (
            <aside className="mt-10 rounded-card border-l-4 border-forest bg-white p-6" aria-label="Before you act">
              <p className="leading-relaxed text-slate">{r.callout}</p>
            </aside>
          )}
          <div className="mt-14">
            <ContentSections sections={r.sections} />
          </div>
          <aside className="mt-14 rounded-card border-l-4 border-brass bg-white p-7" aria-label="Key takeaway">
            <p className="text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">The short version</p>
            <p className="mt-3 font-serif text-xl leading-relaxed text-forest">{r.takeaway}</p>
          </aside>
          <p className="mt-10 text-sm leading-relaxed text-slate-soft">
            This guide is general information, not legal, tax, or financial advice. For decisions about an estate,
            consult the estate&rsquo;s attorney or a qualified professional.
          </p>
        </div>
      </article>
      <RelatedServices slugs={r.services} title="When you'd like help" />
      <CtaBand />
      <JsonLd
        data={articleSchema({ title: r.title, description: r.metaDescription, path, published: r.published, updated: r.updated, image })}
      />
    </>
  );
}
