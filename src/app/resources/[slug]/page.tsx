import { notFound } from "next/navigation";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/templates/PageHero";
import { RelatedServices } from "@/components/templates/RelatedLinks";
import { ContentSections } from "@/components/ui/ContentSections";
import { CtaBand } from "@/components/ui/CtaBand";
import { getResource, resources } from "@/content/resources";
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
  return pageMetadata({ title: r.metaTitle, description: r.metaDescription, path: `/resources/${r.slug}`, type: "article" });
}

const dateFmt = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default async function ResourcePage(props: PageProps<"/resources/[slug]">) {
  const { slug } = await props.params;
  const r = getResource(slug);
  if (!r) notFound();
  const path = `/resources/${r.slug}`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Resources", path: "/resources" },
          { name: r.metaTitle, path },
        ]}
        eyebrow="Planning guide"
        title={r.title}
        lead={r.summary}
        showCtas={false}
      />
      <article className="container-bs py-16">
        <div className="mx-auto max-w-[44rem]">
          <p className="text-sm text-slate-soft">
            Updated <time dateTime={r.updated}>{dateFmt.format(new Date(r.updated))}</time> &middot; {r.readingMinutes} min read
          </p>
          <div className="mt-8 space-y-5 text-[1.125rem] leading-[1.75]">
            {r.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
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
      <JsonLd data={articleSchema({ title: r.title, description: r.metaDescription, path, updated: r.updated })} />
    </>
  );
}
