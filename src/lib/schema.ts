import { absoluteUrl, business, hasPhone, siteUrl } from "@/content/site";
import type { Service } from "@/content/types";

const orgId = `${siteUrl}/#business`;

/**
 * Business entity. Uses HomeAndConstructionBusiness (a LocalBusiness subtype)
 * and includes only fields that are filled in site.ts — unverified details are
 * never emitted.
 */
export function businessSchema() {
  const a = business.address;
  const hasAddress = Boolean(a.street && a.city && a.postalCode);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": orgId,
    name: business.name,
    ...(business.legalName && { legalName: business.legalName }),
    description:
      "Estate cleanouts, senior downsizing, and home preparation for families, executors, homeowners, and real estate agents.",
    url: siteUrl,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/opengraph-image"),
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
    ...(business.confirmedServiceCities.length > 0 && {
      areaServed: business.confirmedServiceCities.map((city) => ({
        "@type": "City",
        name: `${city}, WA`,
      })),
    }),
    ...(business.sameAs.length > 0 && { sameAs: business.sameAs }),
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
    ...(business.confirmedServiceCities.length > 0 && {
      areaServed: business.confirmedServiceCities.map((city) => ({ "@type": "City", name: `${city}, WA` })),
    }),
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

export function articleSchema(a: { title: string; description: string; path: string; updated: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    url: absoluteUrl(a.path),
    mainEntityOfPage: absoluteUrl(a.path),
    dateModified: a.updated,
    datePublished: a.updated,
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
}
