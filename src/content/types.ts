export type Faq = { q: string; a: string };

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ServiceGroup = "cleanouts" | "transitions" | "market-ready" | "projects";

export type Service = {
  slug: string;
  group: ServiceGroup;
  navLabel: string;
  /** The page's single H1. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  /** One or two sentences for cards and listings. */
  summary: string;
  situations: string[];
  included: { title: string; body: string }[];
  sections: ContentSection[];
  faqs: Faq[];
  related: string[];
  resources: string[];
  audiences: string[];
  /** Form preselect value — must match a key in inquiry serviceOptions. */
  inquiryService: string;
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
  concerns: { title: string; body: string }[];
  sections: ContentSection[];
  services: string[];
  resources: string[];
  faqs: Faq[];
};

export type Resource = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  /** ISO date of last substantive review. */
  updated: string;
  readingMinutes: number;
  intro: string[];
  sections: (ContentSection & { checklist?: string[] })[];
  takeaway: string;
  services: string[];
};
