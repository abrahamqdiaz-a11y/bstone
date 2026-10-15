import { notFound } from "next/navigation";
import { InquirySection } from "@/components/templates/InquirySection";
import { PageHero } from "@/components/templates/PageHero";
import { RelatedServices, SidebarLinks } from "@/components/templates/RelatedLinks";
import { ContentSections } from "@/components/ui/ContentSections";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeader } from "@/components/ui/Section";
import { audiences, getAudience } from "@/content/audiences";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return audiences.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/who-we-help/[slug]">) {
  const { slug } = await props.params;
  const a = getAudience(slug);
  if (!a) return {};
  return pageMetadata({ title: a.metaTitle, description: a.metaDescription, path: `/who-we-help/${a.slug}` });
}

export default async function AudiencePage(props: PageProps<"/who-we-help/[slug]">) {
  const { slug } = await props.params;
  const a = getAudience(slug);
  if (!a) notFound();
  const path = `/who-we-help/${a.slug}`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Who We Help", path: "/who-we-help" },
          { name: a.navLabel, path },
        ]}
        eyebrow={a.eyebrow}
        title={a.title}
        lead={a.lead}
        ctaHref="#request"
      />
      <section aria-labelledby="concerns" className="py-20">
        <div className="container-bs">
          <SectionHeader id="concerns" eyebrow="What we hear" title="Common concerns, and how we help." />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {a.concerns.map((c) => (
              <li key={c.title} className="rounded-card border hairline bg-white p-7 shadow-card">
                <h3 className="text-[1.4rem] leading-snug">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-soft">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="container-bs grid gap-14 border-t hairline py-20 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <ContentSections sections={a.sections} />
        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Helpful guides">
          <SidebarLinks resources={a.resources} />
        </aside>
      </div>
      <section aria-labelledby="audience-faq" className="border-t hairline py-20">
        <div className="container-bs grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader id="audience-faq" eyebrow="Questions" title="Good to know." />
          <FaqList faqs={a.faqs} />
        </div>
      </section>
      <RelatedServices slugs={a.services} title="Services for you" />
      <InquirySection sourcePage={path} />
    </>
  );
}
