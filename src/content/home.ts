import type { Faq } from "./types";

export const lifeEvents = [
  {
    title: "Managing an estate",
    body: "You're responsible for a loved one's home and everything in it. We'll help you sort, set aside, and clear it with care.",
    href: "/services/estate-cleanouts",
    cta: "Estate cleanouts",
  },
  {
    title: "Helping a parent downsize",
    body: "A move to a smaller home or senior living is ahead. We'll help decide what comes along and handle what stays behind.",
    href: "/services/senior-downsizing",
    cta: "Senior downsizing",
  },
  {
    title: "Preparing a home for sale",
    body: "The listing date is set and the house isn't ready. We'll clear, clean, and repair in the right order.",
    href: "/services/pre-listing-home-preparation",
    cta: "Pre-listing preparation",
  },
  {
    title: "Tackling overdue projects",
    body: "The garage is full and the repair list keeps growing. We'll help you get your home back.",
    href: "/services/handyman-home-projects",
    cta: "Home projects",
  },
];

export const coordinationBurden = [
  { task: "Sorting and packing belongings", who: "Family, friends, or an organizer" },
  { task: "Donations and drop-offs", who: "Several charities, each with its own rules" },
  { task: "Hauling and disposal", who: "A junk removal company" },
  { task: "Deep cleaning", who: "A cleaning service" },
  { task: "Repairs and touch-ups", who: "A handyman" },
];

/**
 * VERIFY: this describes the intended client process. Confirm with the owner
 * how estimates are prepared (photos, video call, site visit) and whether the
 * scope is confirmed in writing before publishing.
 */
export const processSteps = [
  {
    title: "Tell us about the property",
    body: "Share the address, what needs to happen, and your timeline. Photos help, but they're optional.",
  },
  {
    title: "We review the work and define the plan",
    body: "We'll talk through the details, review the property, and agree on the scope, sequence, and what's on your keep list.",
  },
  {
    title: "We handle the agreed work",
    body: "Sorting, donation, removal, cleaning, and repairs proceed in order, with updates at the points you've asked for.",
  },
  {
    title: "Move forward with confidence",
    body: "The home is ready for its next step—listing, closing, a new tenant, or simply a fresh start.",
  },
];

/** Must match the audience pages in audiences.ts — every card links to a real page. */
export const homeAudiences = [
  {
    title: "Families & Executors",
    body: "Settling a loved one's home with care and a clear record of what was done.",
    href: "/who-we-help/families-and-executors",
  },
  {
    title: "Seniors & Adult Children",
    body: "Planning a move to a smaller home or senior living, at a comfortable pace.",
    href: "/who-we-help/seniors-and-families",
  },
  {
    title: "Real Estate Agents",
    body: "One call for listings that need clearing, cleaning, or a punch list before photos.",
    href: "/who-we-help/real-estate-agents",
  },
  {
    title: "Landlords & Property Managers",
    body: "Rental turnovers, abandoned belongings, and vacant properties cleared and made ready.",
    href: "/who-we-help/landlords-and-property-managers",
  },
];

/** General questions only. Service-specific questions live on each service page. */
export const homeFaqs: Faq[] = [
  {
    q: "What areas do you serve?",
    a: "We work across Sarasota and Manatee counties. Include the property's city or ZIP code when you get in touch and we'll confirm it's within our area.",
  },
  {
    q: "Which service do I need?",
    a: "If you're not sure, describe the house and what has to happen next. We'll recommend the simplest option that fits, whether that's a single cleanout or a full project.",
  },
  {
    q: "Do you give estimates before starting?",
    a: "Yes. We review the property, agree on the scope with you, and confirm it before any work begins, so you know what's included.",
  },
  {
    q: "Is it one company from start to finish?",
    a: "That's the idea. Sorting, donations, removal, cleaning, and minor repairs are planned as one project with one point of contact, and any specialist work is named in the plan.",
  },
  {
    q: "What don't you do?",
    a: "We don't give legal, tax, or appraisal advice, run estate sales, stage homes, or do work that needs a licensed trade. We'll tell you when something needs a specialist.",
  },
];
