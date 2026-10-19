/**
 * Briarstone Prep — business facts.
 *
 * This is the single source of truth for anything the site states about the
 * business. Every field marked VERIFY must be confirmed by the owner before
 * launch (see docs/LAUNCH_CHECKLIST.md). Empty values are intentional: the UI
 * and structured data omit anything that is not filled in, so nothing
 * unconfirmed is published.
 *
 * Name, address and phone must match the Google Business Profile exactly.
 */

export type Business = {
  name: string;
  legalName: string;
  descriptor: string;
  domain: string;
  /** Display format, e.g. "(941) 555-0100". VERIFY. Empty hides every phone CTA. */
  phoneDisplay: string;
  /** E.164 format for tel: links and schema, e.g. "+19415550100". VERIFY. */
  phoneE164: string;
  /** Public inbox shown on the contact page and in schema. VERIFY. Empty hides it. */
  email: string;
  /**
   * True only if the business receives customers at a public storefront.
   * A service-area business leaves this false: no street address is shown or
   * sent to Google, and areaServed carries the location instead. VERIFY.
   */
  hasPublicStorefront: boolean;
  /** Published only when hasPublicStorefront is true. VERIFY. */
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  /** Hours as shown to visitors, e.g. "Monday–Friday, 8am–5pm". VERIFY. */
  hours: string;
  /**
   * schema.org openingHours strings matching `hours`, e.g. ["Mo-Fr 08:00-17:00"].
   * VERIFY. Empty omits openingHours from structured data.
   */
  openingHours: string[];
  /** Optional ownership statement, e.g. "Locally owned and operated". VERIFY. */
  ownershipStatement: string;
  /**
   * Contractor licence number, if the repair work offered requires one under
   * Florida or county rules. VERIFY with the owner. Empty hides it.
   */
  contractorLicense: string;
  /** Public profile URLs. VERIFY each. Empty strings are skipped. */
  profiles: {
    googleBusinessProfile: string;
    facebook: string;
    yelp: string;
  };
  /**
   * Google "write a review" link from the Business Profile dashboard
   * (https://g.page/r/.../review). VERIFY. Empty hides the review link.
   */
  googleReviewUrl: string;
};

export const business: Business = {
  name: "Briarstone Prep",
  legalName: "", // VERIFY: registered legal entity name
  descriptor: "Estate Cleanouts & Home Preparation",
  domain: "briarstoneprep.com",
  phoneDisplay: "", // VERIFY: must match the Google Business Profile
  phoneE164: "", // VERIFY
  email: "", // VERIFY
  hasPublicStorefront: false, // VERIFY: set true only if customers visit an office
  address: {
    street: "", // VERIFY (only if hasPublicStorefront)
    city: "", // VERIFY
    region: "FL",
    postalCode: "", // VERIFY
    country: "US",
  },
  hours: "", // VERIFY
  openingHours: [], // VERIFY, e.g. ["Mo-Fr 08:00-17:00"]
  ownershipStatement: "", // VERIFY
  contractorLicense: "", // VERIFY: confirm whether the planned repair work needs a Florida licence
  profiles: {
    googleBusinessProfile: "", // VERIFY
    facebook: "", // VERIFY
    yelp: "", // VERIFY
  },
  googleReviewUrl: "", // VERIFY: add once the Google Business Profile exists
};

export type ServiceCity = {
  name: string;
  /** schema.org type: City for municipalities, Place for unincorporated communities. */
  schemaType: "City" | "Place";
  /** Owner has confirmed the business serves this place. */
  verified: boolean;
  /** Slug of a published /service-areas page, if one exists. */
  page?: string;
};

/**
 * Service area. This is the only place the region is defined: copy, the
 * contact page, the footer, structured data and the service-area pages all
 * read from it. Change it here and the whole site follows.
 */
export const serviceArea = {
  state: "Florida",
  stateCode: "FL",
  /** Short label used in titles and headings. */
  short: "Sarasota",
  /** Plain-language region used in body copy. */
  region: "Sarasota and Manatee counties",
  counties: ["Sarasota County", "Manatee County"], // VERIFY
  cities: [
    { name: "Sarasota", schemaType: "City", verified: false, page: "sarasota" }, // VERIFY
    { name: "Bradenton", schemaType: "City", verified: false }, // VERIFY
    { name: "Venice", schemaType: "City", verified: false }, // VERIFY
    { name: "Lakewood Ranch", schemaType: "Place", verified: false }, // VERIFY
    { name: "Longboat Key", schemaType: "City", verified: false }, // VERIFY
  ] satisfies ServiceCity[] as ServiceCity[],
};

export const serviceCityNames = serviceArea.cities.map((c) => c.name);

/** "Sarasota, Bradenton, Venice, Lakewood Ranch and Longboat Key" */
export function cityList(names: string[] = serviceCityNames) {
  return names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : (names[0] ?? "");
}

export const sameAs = Object.values(business.profiles).filter(Boolean);

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || `https://${business.domain}`).replace(
  /\/$/,
  "",
);

export const hasPhone = Boolean(business.phoneDisplay && business.phoneE164);
export const telHref = hasPhone ? `tel:${business.phoneE164}` : "";

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path === "/" ? "" : path}`;
}
