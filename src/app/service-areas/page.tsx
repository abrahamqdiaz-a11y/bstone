import Link from "next/link";
import { PageHero } from "@/components/templates/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { publishedServiceAreaPages } from "@/content/serviceAreas";
import { services } from "@/content/services";
import { serviceArea } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Service Areas: Sarasota & Manatee Counties | Briarstone Prep",
  description:
    "Estate cleanouts, downsizing and home prep across Sarasota and Manatee counties, Florida. See the cities we serve and call to confirm your address.",
  path: "/service-areas",
  ogImage: "service-areas",
});

export default function ServiceAreasPage() {
  const pageFor = (slug?: string) => publishedServiceAreaPages.find((p) => p.slug === slug);
  return (
    <>
      <PageHero
        crumbs={[{ name: "Service Areas", path: "/service-areas" }]}
        eyebrow="Service areas"
        title="Estate Cleanout Service Areas in Sarasota and Manatee Counties"
        lead={`We clear, clean, and prepare homes across ${serviceArea.region}, ${serviceArea.state}. If you're not sure whether a property is in our area, include its city or ZIP code when you get in touch and we'll confirm.`}
      />
      <div className="container-bs grid gap-14 py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div className="space-y-14">
          <section aria-labelledby="counties">
            <h2 id="counties" className="text-[1.75rem] leading-tight sm:text-[2rem]">
              Counties and cities we serve
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.75]">
              Our work covers {serviceArea.counties.join(" and ")}. Within that area, these are the communities we
              work in most:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {serviceArea.cities.map((c) => {
                const page = pageFor(c.page);
                return (
                  <li key={c.name} className="rounded-card border hairline bg-white p-5">
                    {page ? (
                      <Link href={`/service-areas/${page.slug}`} className="font-medium text-forest underline decoration-brass underline-offset-4">
                        Estate cleanouts in {c.name}
                      </Link>
                    ) : (
                      <span className="font-medium text-forest">{c.name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
          <section aria-labelledby="local">
            <h2 id="local" className="text-[1.75rem] leading-tight sm:text-[2rem]">
              Why local knowledge matters for a cleanout
            </h2>
            <div className="mt-5 space-y-4 text-[1.0625rem] leading-[1.75]">
              <p>
                Clearing a home on the Gulf Coast comes with its own logistics. Condo associations often set move-out
                hours and elevator reservations, gated communities need a name on the gate list, and houses that have
                been closed up through a humid summer can need extra cleaning before they&rsquo;re shown.
              </p>
              <p>
                We plan around those details from the first conversation, so the work fits the building and the
                community instead of stalling at the gate or the front desk.
              </p>
            </div>
          </section>
        </div>
        <aside aria-label="Services in this area" className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-card border hairline bg-white p-6">
            <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">Services across the area</h2>
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
      <CtaBand />
    </>
  );
}
