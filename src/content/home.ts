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
    title: "Homeowners",
    body: "Clearing space, catching up on repairs, or preparing your own house to sell.",
    href: "/services/home-cleanouts",
  },
  {
    title: "Real Estate Professionals",
    body: "One call for listings that need clearing, cleaning, or a punch list before photos.",
    href: "/who-we-help/real-estate-agents",
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "What does an estate cleanout include?",
    a: "Typically: sorting the home's contents, setting aside keepsakes and important papers for the family, arranging donation of usable items, and removing everything else. We confirm the exact scope with you before work begins, and cleaning or repairs can follow if the home is being sold.",
  },
  {
    q: "How long does a whole-house cleanout take?",
    a: "It depends on the size of the home, how full it is, how much sorting is needed, and whether cleaning or repairs follow. Once we've reviewed the property, we'll give you a realistic timeline for your project.",
  },
  {
    q: "Can you help prepare an inherited home for sale?",
    a: "Yes. We can clear the contents, clean the house, and take care of minor repairs so it's ready for your agent and for listing photos. If you live out of the area, we can plan and share updates remotely.",
  },
  {
    q: "What happens to items that can be donated?",
    a: "Usable items are directed to local donation organizations where they're accepted. Each organization sets its own rules, so some items may need to be recycled or disposed of instead. We'll explain what to expect for your project.",
  },
  {
    q: "Do you help with senior downsizing?",
    a: "Yes. We help older adults and their families decide what fits in the new space, prepare for the move, and handle donation and removal of what stays behind—always leaving decisions with the person who's moving.",
  },
  {
    q: "Can you handle cleaning and minor repairs?",
    a: "Yes. Deep cleaning and minor repairs are part of getting a home ready for its next step. Work that requires a licensed trade, like electrical or plumbing, is scoped separately or referred to a specialist.",
  },
  {
    q: "Do I need to be present during the work?",
    a: "Not for all of it. Once we've agreed on the plan and the items to keep, much of the work can happen without you on site. We'll agree on how and when you'd like updates before we begin.",
  },
];
