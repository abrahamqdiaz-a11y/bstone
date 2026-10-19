import Link from "next/link";
import { getAudience } from "@/content/audiences";
import { getResource } from "@/content/resources";
import { publishedServiceAreaPages } from "@/content/serviceAreas";
import { getService } from "@/content/services";
import { LinkCard } from "../ui/LinkCard";
import { SectionHeader } from "../ui/Section";

export function RelatedServices({ slugs, title }: { slugs: string[]; title: string }) {
  const items = slugs.map(getService).filter((s) => s !== undefined);
  if (!items.length) return null;
  return (
    <section aria-labelledby="related-services" className="py-20">
      <div className="container-bs">
        <SectionHeader id="related-services" title={title} />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((s) => (
            <li key={s.slug}>
              <LinkCard href={`/services/${s.slug}`} title={s.navLabel} body={s.summary} track="service_cta_click" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const linkClass = "leading-snug text-forest underline decoration-brass/60 underline-offset-4 hover:decoration-forest";
const labelClass = "font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase";

/**
 * Sidebar of internal links: guides, audience pages and local pages. Group
 * labels are headings named for the page's topic (e.g. "Guides on estate
 * cleanouts"), so they never repeat across pages.
 */
export function SidebarLinks({
  topic,
  labels,
  resources = [],
  audiences = [],
  showAreas = false,
}: {
  /** Topic used in local link text, e.g. "Estate cleanouts" → "Estate cleanouts in Sarasota". */
  topic: string;
  labels: { guides: string; audiences?: string; areas?: string };
  resources?: string[];
  audiences?: string[];
  showAreas?: boolean;
}) {
  const res = resources.map(getResource).filter((r) => r !== undefined);
  const aud = audiences.map(getAudience).filter((a) => a !== undefined);
  const areas = showAreas ? publishedServiceAreaPages : [];
  if (!res.length && !aud.length && !areas.length) return null;
  const groups = [
    res.length > 0 && {
      label: labels.guides,
      links: res.map((r) => ({ href: `/resources/${r.slug}`, label: r.title })),
    },
    aud.length > 0 && {
      label: labels.audiences ?? `Who ${topic.toLowerCase()} help`,
      links: aud.map((a) => ({ href: `/who-we-help/${a.slug}`, label: a.navLabel })),
    },
    areas.length > 0 && {
      label: labels.areas ?? `${topic} near you`,
      links: areas.map((p) => ({ href: `/service-areas/${p.slug}`, label: `${topic} in ${p.city}` })),
    },
  ].filter((g) => g !== false);
  return (
    <div className="rounded-card border hairline bg-white p-6">
      {groups.map((g, i) => (
        <div key={g.label} className={i > 0 ? "mt-8" : ""}>
          <h2 className={labelClass}>{g.label}</h2>
          <ul className="mt-4 space-y-3">
            {g.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
