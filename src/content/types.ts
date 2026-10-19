export type Faq = { q: string; a: string };

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Optional in-text links rendered after the paragraphs. Use descriptive anchor text. */
  links?: { label: string; href: string }[];
};

export type ServiceGroup = "cleanouts" | "transitions" | "market-ready" | "projects";

export type Service = {
  slug: string;
  group: ServiceGroup;
  navLabel: string;
  /** The page's single H1. Names the service and the place. */
  title: string;
  /** Full <title>, 60 characters or fewer, place near the front. */
  metaTitle: string;
  /** Under 158 characters: service, place, reason to call. */
  metaDescription: string;
  eyebrow: string;
  lead: string;
  /** One or two sentences for cards and listings. */
  summary: string;
  /** Page-specific H2s, so no two service pages share a heading outline. */
  headings: {
    situations: string;
    included: string;
    process: string;
    faq: string;
    related: string;
  };
  situations: string[];
  included: { title: string; body: string }[];
  sections: ContentSection[];
  /** Five to eight questions, none repeated word for word on another page. */
  faqs: Faq[];
  related: string[];
  /** The two guides linked from this page; the first is the closest match. */
  resources: string[];
  audiences: string[];
  /** Form preselect value — must match a key in inquiry serviceOptions. */
  inquiryService: string;
  /** ISO date of the last real content edit (sitemap lastmod). */
  updated: string;
};

export type Audience = {
  slug: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  summary: string;
  /** Intro copy for this audience on /who-we-help. */
  hubIntro: string;
  headings: {
    concerns: string;
    faq: string;
    services: string;
  };
  concerns: { title: string; body: string }[];
  sections: ContentSection[];
  services: string[];
  resources: string[];
  faqs: Faq[];
  updated: string;
};

export type ResourceGroup = "after-a-death" | "inherited-and-probate" | "downsizing-and-selling" | "costs-and-planning";

export type Resource = {
  slug: string;
  group: ResourceGroup;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  /** ISO date first published. */
  published: string;
  /** ISO date of last substantive edit. */
  updated: string;
  readingMinutes: number;
  intro: string[];
  sections: (ContentSection & { checklist?: string[] })[];
  takeaway: string;
  /** First entry is the matching service page, linked from the intro. */
  services: string[];
  /** Visible callout shown before the guide's sections, e.g. "consult an attorney". */
  callout?: string;
};

export type ServiceAreaPage = {
  slug: string;
  city: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  sections: ContentSection[];
  faqs: Faq[];
  updated: string;
  /**
   * Place-specific facts the owner must supply (donation partners used,
   * condo/HOA move-out rules, gated-community access). The page is only
   * published when `ready` is true.
   */
  ready: boolean;
};
