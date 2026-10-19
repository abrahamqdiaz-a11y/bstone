import Link from "next/link";
import { notFound } from "next/navigation";
import { InquirySection } from "@/components/templates/InquirySection";
import { PageHero } from "@/components/templates/PageHero";
import { ContentSections } from "@/components/ui/ContentSections";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeader } from "@/components/ui/Section";
import { getServiceAreaPage, publishedServiceAreaPages } from "@/content/serviceAreas";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedServiceAreaPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/service-areas/[slug]">) {
  const { slug } = await props.params;
  const p = getServiceAreaPage(slug);
  if (!p) return {};
  return pageMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/service-areas/${p.slug}`,
    ogImage: `area-${p.slug}`,
  });
}

export default async function ServiceAreaPage(props: PageProps<"/service-areas/[slug]">) {
  const { slug } = await props.params;
  const p = getServiceAreaPage(slug);
  if (!p) notFound();
  const path = `/service-areas/${p.slug}`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Service Areas", path: "/service-areas" },
          { name: p.city, path },
        ]}
        eyebrow="Service area"
        title={p.title}
        lead={p.lead}
        ctaHref="#request"
      />
      <div className="container-bs grid gap-14 py-20 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <ContentSections sections={p.sections} />
        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label={`Services in ${p.city}`}>
          <div className="rounded-card border hairline bg-white p-6">
            <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">Our services in {p.city}</h2>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="leading-snug text-forest underline decoration-brass/60 underline-offset-4 hover:decoration-forest">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <section aria-labelledby="area-faq" className="border-t hairline py-20">
        <div className="container-bs grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader id="area-faq" eyebrow="Questions" title={`Questions about working in ${p.city}`} />
          <FaqList faqs={p.faqs} />
        </div>
      </section>
      <InquirySection sourcePage={path} title={`Tell us about the ${p.city} property`} />
    </>
  );
}
