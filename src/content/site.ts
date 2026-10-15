/**
 * Briarstone Prep — business facts.
 *
 * This is the single source of truth for anything the site states about the
 * business. Every field marked VERIFY must be confirmed by the owner before
 * launch (see docs/LAUNCH_CHECKLIST.md). Empty values are intentional: the UI
 * and structured data omit anything that is not filled in, so nothing
 * unconfirmed is published.
 */

export type Business = {
  name: string;
  legalName: string;
  descriptor: string;
  domain: string;
  /** Display format, e.g. "(425) 555-0100". VERIFY. Empty hides every phone CTA. */
  phoneDisplay: string;
  /** E.164 format for tel: links and schema, e.g. "+14255550100". VERIFY. */
  phoneE164: string;
  /** Public inbox shown on the contact page. VERIFY. Empty hides it. */
  email: string;
  /** Only publish a street address if the business receives visitors there. VERIFY. */
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  /**
   * Plain-language service region used in copy. VERIFY — this is a working
   * assumption based on the target research markets, not a confirmed area.
   */
  serviceRegion: string;
  /**
   * Cities the owner has confirmed they serve. VERIFY. Leave empty until
   * confirmed — when empty, the site lists no cities and schema omits areaServed.
   */
  confirmedServiceCities: string[];
  /** Hours as shown to visitors, e.g. "Monday–Friday, 8am–5pm". VERIFY. */
  hours: string;
  /** Optional ownership statement, e.g. "Locally owned and operated". VERIFY. */
  ownershipStatement: string;
  /** Washington L&I contractor registration number, if applicable. VERIFY. */
  contractorRegistration: string;
  /** Public profile URLs (Google Business Profile, Yelp, Facebook…). VERIFY. */
  sameAs: string[];
};

export const business: Business = {
  name: "Briarstone Prep",
  legalName: "", // VERIFY: registered legal entity name
  descriptor: "Estate Transitions & Home Preparation",
  domain: "briarstoneprep.com",
  phoneDisplay: "", // VERIFY
  phoneE164: "", // VERIFY
  email: "", // VERIFY
  address: {
    street: "",
    city: "",
    region: "WA",
    postalCode: "",
    country: "US",
  },
  serviceRegion: "the Greater Seattle area", // VERIFY
  confirmedServiceCities: [], // VERIFY, e.g. ["Bellevue", "Kirkland", "Redmond"]
  hours: "", // VERIFY
  ownershipStatement: "", // VERIFY
  contractorRegistration: "", // VERIFY: confirm L&I requirements for repair work
  sameAs: [],
};

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || `https://${business.domain}`).replace(
  /\/$/,
  "",
);

export const hasPhone = Boolean(business.phoneDisplay && business.phoneE164);
export const telHref = hasPhone ? `tel:${business.phoneE164}` : "";

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path === "/" ? "" : path}`;
}
