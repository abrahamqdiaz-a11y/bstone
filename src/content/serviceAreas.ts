import type { ServiceAreaPage } from "./types";

/**
 * City landing pages. Each page must carry details that are true of that
 * place; never copy a page and swap the city name. A page is generated only
 * when `ready` is true.
 *
 * Owner-supplied details still needed for every city (VERIFY):
 * - donation partners Briarstone actually uses there
 * - condo and HOA move-out rules the team has worked with
 * - gated-community access arrangements
 * Until those are supplied, the Sarasota page sticks to general facts about the
 * area and how the work is planned; it names no partners and quotes no rules.
 */
export const serviceAreaPages: ServiceAreaPage[] = [
  {
    slug: "sarasota",
    city: "Sarasota",
    title: "Estate Cleanouts and Home Preparation in Sarasota, Florida",
    metaTitle: "Sarasota, FL Estate Cleanouts & Downsizing | Briarstone",
    metaDescription:
      "Estate cleanouts, downsizing and pre-listing prep in Sarasota, FL, from downtown condos to island homes and gated communities. Call to plan the work.",
    lead: "From downtown condo towers to Siesta Key cottages and gated neighborhoods east of I-75, Sarasota homes come with their own rules and timelines. We handle estate cleanouts, downsizing moves, and pre-listing preparation across Sarasota, planned around the building, the association, and the family's deadline.",
    sections: [
      {
        heading: "Condo towers and island buildings",
        paragraphs: [
          "Much of Sarasota's housing is in condominium buildings, downtown and on the keys. Clearing a condo usually means working to the association's rules: booking the service elevator, padding it, keeping to set move-out hours, and providing a certificate of insurance before the crew arrives. Some buildings limit truck parking or ask for advance notice to the front desk.",
          "We ask for the association's move-out rules before scheduling, so the cleanout fits the building instead of fighting it.",
        ],
      },
      {
        heading: "Gated communities and 55+ neighborhoods",
        paragraphs: [
          "Many Sarasota families are settling a parent's home in a gated or age-restricted community. These usually need a vendor pass or a name on the gate list for each day of work, and some restrict hours or require trucks to park in particular places. Tell us the community name and we'll confirm what the gate and the association need.",
        ],
      },
      {
        heading: "Seasonal homes and out-of-state owners",
        paragraphs: [
          "Sarasota has many seasonal residents and many heirs who live in other states. A house that has been closed up for months often needs extra cleaning for humidity, dust, and pests before it can be listed or rented. We can plan by video, work from a lockbox or the agent's access, and send photo updates as the work progresses.",
        ],
        links: [{ label: "Managing a Sarasota estate cleanout from out of state", href: "/resources/managing-a-sarasota-estate-cleanout-from-out-of-state" }],
      },
      {
        heading: "Hurricane season and closed-up houses",
        paragraphs: [
          "Hurricane season runs from June through November. For a vacant Sarasota house, that means keeping the air conditioning on, knowing who will secure outdoor furniture and shutters if a storm is forecast, and checking the insurance is still in force while the house is empty. If a storm is forecast during a cleanout, we reschedule rather than leave a house half-cleared with debris outside.",
        ],
      },
      {
        heading: "Donations and hazardous items in Sarasota County",
        paragraphs: [
          // VERIFY: name the donation organizations Briarstone actually uses in Sarasota once confirmed.
          "Usable furniture, housewares, and clothing go to local organizations that accept them, subject to each one's rules on condition and item type. Paint, pool chemicals, and other hazardous materials can't go out with a standard cleanout; Sarasota County runs household hazardous waste drop-off sites, and we'll point you to the current locations.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you clear a condo on Longboat Key, Siesta Key, or downtown?",
        a: "Yes, subject to the building's move-out rules. Send us the building name and we'll ask the association about elevator reservations, insurance certificates, and permitted hours before we schedule.",
      },
      {
        q: "Do you work in Sarasota's gated communities?",
        a: "Yes. Give us the community name and the contact for gate access, and we'll make sure our crew is on the gate list for each day of work.",
      },
      {
        q: "My parent's Sarasota house has been empty since last season. Where do we start?",
        a: "Start by having someone check for leaks, mildew, and pests, and make sure the air conditioning and insurance are on. Then set aside keepsakes and papers before the main cleanout begins.",
      },
    ],
    updated: "2026-10-19",
    ready: true,
  },
  // VERIFY: Bradenton, Venice, Lakewood Ranch and Longboat Key pages are not
  // published until the client confirms the city and supplies local details.
];

export const publishedServiceAreaPages = serviceAreaPages.filter((p) => p.ready);

export function getServiceAreaPage(slug: string) {
  return publishedServiceAreaPages.find((p) => p.slug === slug);
}
