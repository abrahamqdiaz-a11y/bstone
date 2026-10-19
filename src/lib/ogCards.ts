import { audiences } from "@/content/audiences";
import { resources } from "@/content/resources";
import { publishedServiceAreaPages } from "@/content/serviceAreas";
import { services } from "@/content/services";
import { business, serviceArea } from "@/content/site";

export type OgSection = "default" | "services" | "audiences" | "guides" | "areas";
export type OgCard = { section: OgSection; eyebrow: string; title: string };

/**
 * Every share image the site uses, keyed by the name passed to pageMetadata's
 * `ogImage`. Section decides the colors; the title is page-specific.
 */
export function ogCards(): Record<string, OgCard> {
  const cards: Record<string, OgCard> = {
    default: { section: "default", eyebrow: business.descriptor, title: "Preparing a home for what's next." },
    services: { section: "services", eyebrow: "Services", title: `Estate cleanouts, downsizing and home prep in ${serviceArea.short}` },
    "who-we-help": { section: "audiences", eyebrow: "Who we help", title: "Families, seniors, agents and landlords" },
    resources: { section: "guides", eyebrow: "Planning guides", title: "Guides for a home in transition" },
    "service-areas": { section: "areas", eyebrow: "Service areas", title: serviceArea.region },
  };
  for (const s of services) cards[`service-${s.slug}`] = { section: "services", eyebrow: s.eyebrow, title: s.title };
  for (const a of audiences) cards[`audience-${a.slug}`] = { section: "audiences", eyebrow: "Who we help", title: a.title };
  for (const r of resources) cards[`guide-${r.slug}`] = { section: "guides", eyebrow: "Planning guide", title: r.title };
  for (const p of publishedServiceAreaPages) cards[`area-${p.slug}`] = { section: "areas", eyebrow: "Service area", title: p.title };
  return cards;
}
