import { notFound } from "next/navigation";
import { Process } from "@/components/home/Process";
import { JsonLd } from "@/components/layout/JsonLd";
import { InquirySection } from "@/components/templates/InquirySection";
import { PageHero } from "@/components/templates/PageHero";
import { RelatedServices, SidebarLinks } from "@/components/templates/RelatedLinks";
import { ButtonLink } from "@/components/ui/Button";
import { ContentSections } from "@/components/ui/ContentSections";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeader } from "@/components/ui/Section";
import type { PhotoSlotKey } from "@/content/images";
import { getService, services } from "@/content/services";
import type { ServiceGroup } from "@/content/types";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

const photoFor: Record<ServiceGroup, { slot: PhotoSlotKey; fallback: "home" | "interior" | "door" | "garden" }> = {
  cleanouts: { slot: "service-cleanouts", fallback: "interior" },
  transitions: { slot: "service-transitions", fallback: "garden" },
  "market-ready": { slot: "service-market-ready", fallback: "home" },
  projects: { slot: "service-projects", fallback: "door" },
};

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: s.navLabel, path },
        ]}
        eyebrow={s.eyebrow}
        title={s.title}
        lead={s.lead}
        photo={photoFor[s.group]}
        ctaHref="#request"
      />

      <section aria-labelledby="situations" className="py-20">
        <div className="container-bs grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader id="situations" eyebrow="Is this for you?" title="This service is a good fit if…" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {s.situations.map((sit) => (
              <li key={sit} className="flex gap-4 rounded-card border hairline bg-white p-5 leading-relaxed">
                <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-brass" />
                {sit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="included" className="border-y hairline bg-white py-20">
        <div className="container-bs">
          <SectionHeader
            id="included"
            eyebrow="What's included"
            title="How we can help."
            intro="Every project is scoped to the property and what you need. Typical work includes:"
          />
          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {s.included.map((item, i) => (
              <li key={item.title} className="border-t hairline pt-6">
                <span className="font-serif text-sm text-brass-deep" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[1.35rem] leading-snug">{item.title}</h3>
                <p className="mt-2.5 leading-relaxed text-slate-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-bs grid gap-14 py-20 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <ContentSections sections={s.sections} />
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="More information">
          <div className="rounded-card bg-forest p-6 text-ivory">
            <p className="font-serif text-2xl leading-snug">Not sure this is the right service?</p>
            <p className="mt-3 text-ivory/85">Tell us about the property. We&rsquo;ll recommend the simplest option that fits.</p>
            <ButtonLink href="#request" variant="light" className="mt-5 w-full" track="cta_click" trackLabel={`sidebar-${s.slug}`}>
              Request a Consultation
            </ButtonLink>
          </div>
          <SidebarLinks resources={s.resources} audiences={s.audiences} />
        </aside>
      </div>

      <div className="border-t hairline">
        <Process headingId="service-process" id="process" />
      </div>

      <section aria-labelledby="service-faq" className="border-t hairline py-20">
        <div className="container-bs grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader id="service-faq" eyebrow="Questions" title={`${s.navLabel}: common questions`} />
          <FaqList faqs={s.faqs} />
        </div>
      </section>

      <RelatedServices slugs={s.related} />
      <InquirySection sourcePage={path} defaultService={s.inquiryService} />
      <JsonLd data={serviceSchema(s)} />
    </>
  );
}
