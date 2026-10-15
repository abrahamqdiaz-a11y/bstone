import Link from "next/link";
import { PageHero } from "@/components/templates/PageHero";
import { Arrow } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { getService, serviceGroups } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Estate cleanouts, inherited home cleanouts, senior downsizing, estate transitions, pre-listing preparation, home cleanouts, and handyman projects from Briarstone Prep.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Our services"
        title="Everything it takes to move a home toward its next chapter."
        lead="Choose a single service or combine several into one coordinated project. Either way, you'll know exactly what's included and who is doing the work."
      />
      <div className="container-bs space-y-16 py-20">
        {serviceGroups.map((g) => (
          <section key={g.id} aria-labelledby={`group-${g.id}`} className="grid gap-8 border-t hairline pt-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 id={`group-${g.id}`} className="text-[1.9rem] leading-tight">
                {g.title}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-soft">{g.body}</p>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {g.members.map((slug) => {
                const s = getService(slug)!;
                return (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      data-track="service_cta_click"
                      data-track-label={slug}
                      className="group flex h-full flex-col rounded-card border hairline bg-white p-6 shadow-card hover:border-forest/30"
                    >
                      <h3 className="text-[1.35rem]">{s.navLabel}</h3>
                      <p className="mt-2 flex-1 leading-relaxed text-slate-soft">{s.summary}</p>
                      <span className="mt-5 inline-flex items-center gap-2 font-medium text-forest">
                        Learn more <Arrow className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
