import { absoluteUrl, business, hasPhone, sameAs, serviceArea, siteUrl } from "@/content/site";
import type { Service } from "@/content/types";
import { ogImagePath } from "./og";

const orgId = `${siteUrl}/#business`;

/** City and county entries built from the serviceArea config. */
export function areaServed() {
  return [
    ...serviceArea.cities.map((c) => ({ "@type": c.schemaType, name: `${c.name}, ${serviceArea.stateCode}` })),
    ...serviceArea.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: `${county}, ${serviceArea.state}`,
    })),
  ];
}

/**
 * Business entity. HomeAndConstructionBusiness is a LocalBusiness subtype.
 * Only fields filled in site.ts are emitted. A street address is included
 * only for a public storefront; a service-area business relies on areaServed.
 * No rating or review markup until real reviews exist.
 */
export function businessSchema() {
  const a = business.address;
  const hasAddress = business.hasPublicStorefront && Boolean(a.street && a.city && a.postalCode);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": orgId,
    name: business.name,
    ...(business.legalName && { legalName: business.legalName }),
    description: `Estate cleanouts, senior downsizing and home preparation for families, executors, landlords and real estate agents in ${serviceArea.region}, ${serviceArea.state}.`,
    url: siteUrl,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl(ogImagePath("default")),
    ...(hasPhone && { telephone: business.phoneE164 }),
    ...(business.email && { email: business.email }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        streetAddress: a.street,
        addressLocality: a.city,
        addressRegion: a.region,
        postalCode: a.postalCode,
        addressCountry: a.country,
      },
    }),
    areaServed: areaServed(),
    ...(business.openingHours.length > 0 && { openingHours: business.openingHours }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    publisher: { "@id": orgId },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navLabel,
    serviceType: service.navLabel,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": orgId },
    areaServed: areaServed(),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    url: absoluteUrl(a.path),
    mainEntityOfPage: absoluteUrl(a.path),
    image: [absoluteUrl(a.image)],
    datePublished: a.published,
    dateModified: a.updated,
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
}
