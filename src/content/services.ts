import type { Service, ServiceGroup } from "./types";

/**
 * Service pages. Each page targets one distinct search intent — see
 * docs/KEYWORD_MAP.md before adding or merging pages.
 *
 * Copy rule: describe what the client gets and how decisions are made. Do not
 * promise turnaround times, prices, guarantees or credentials here; those
 * belong in site.ts once verified.
 */
export const services: Service[] = [
  {
    slug: "estate-cleanouts",
    group: "cleanouts",
    navLabel: "Estate Cleanouts",
    title: "Estate Cleanouts for Families and Executors",
    metaTitle: "Estate Cleanout Services",
    metaDescription:
      "Estate cleanouts for families and executors: sorting keepsakes and papers, donating usable items, removing the rest, and readying the home for its next step.",
    eyebrow: "Estate & Property Cleanouts",
    lead: "When someone you love has passed, their home still needs attention—often on a timeline set by an estate, a lease, or a sale. We sort, set aside, donate, and remove belongings with care, so you can make the decisions that matter without carrying every box yourself.",
    summary:
      "Sorting, donating, and removing a loved one's belongings with care, while keeping what matters to the family safe.",
    situations: [
      "You're the executor or personal representative and need the home cleared",
      "Family members live out of the area and can only visit briefly",
      "The house needs to be emptied before it's listed, rented, or returned",
      "You've already taken the keepsakes and need help with everything else",
    ],
    included: [
      {
        title: "A walkthrough and a clear plan",
        body: "We start by learning what the family wants kept, what should be looked for, and what the deadline is. Then we agree on the scope in writing before work begins.",
      },
      {
        title: "Careful sorting",
        body: "We work room by room, setting aside photos, letters, financial papers, and anything on your keep list for your review. Nothing you've flagged goes out the door.",
      },
      {
        title: "Donation of usable items",
        body: "Furniture, housewares, and clothing in good condition are directed to donation where local organizations will accept them, instead of going straight to the landfill.",
      },
      {
        title: "Removal of everything else",
        body: "Remaining items are hauled away and disposed of or recycled appropriately, so the house is empty and ready for the next step.",
      },
      {
        title: "A broom-clean finish—or more",
        body: "Once the home is empty, we can move straight into deep cleaning and minor repairs if the property is headed for sale.",
      },
    ],
    sections: [
      {
        heading: "What an estate cleanout really involves",
        paragraphs: [
          "Clearing a lifetime of belongings is rarely just hauling. It means finding the documents an executor needs, making sure family heirlooms reach the right people, deciding what has value, and handling the rest respectfully. It also means doing it while you're managing everything else an estate requires.",
          "We bring structure to that work. You decide what matters; we handle the physical effort of sorting, packing what you're keeping, arranging donations, and clearing the rest—then tell you what was done.",
        ],
      },
      {
        heading: "If the estate is in probate",
        paragraphs: [
          "Before belongings are removed, the person with legal authority over the estate—usually the executor or court-appointed personal representative—should approve the work. If the estate is in probate or there are several heirs, we recommend confirming with the estate's attorney what can be distributed, sold, or donated, and when.",
          "We're happy to work around those requirements: pausing for an appraisal, setting items aside for heirs, or documenting what leaves the home. We don't provide legal or tax advice.",
        ],
      },
      {
        heading: "You don't have to be there for every hour",
        paragraphs: [
          "Many of the families we talk with live out of state or can't take weeks away from work. Once the plan and keep list are agreed, much of the work can happen without you on site. We'll agree on how and when you'd like updates before we begin.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does an estate cleanout include?",
        a: "It typically includes sorting the home's contents, setting aside keepsakes and important papers for the family, arranging donation of usable items, and removing and disposing of everything else. The exact scope depends on the property and what you need, and we confirm it with you before work starts.",
      },
      {
        q: "What if we find something valuable or personal during the cleanout?",
        a: "Before we start, we agree on a keep list and on what to watch for—jewelry, cash, photos, documents, collectibles. Anything that matches is set aside for your review rather than donated or discarded.",
      },
      {
        q: "Can you work with the estate's attorney or real estate agent?",
        a: "Yes. With your permission, we can coordinate access and timing with the people already involved in the estate, so you aren't relaying messages between everyone.",
      },
    ],
    related: ["inherited-home-cleanouts", "estate-transitions", "pre-listing-home-preparation"],
    resources: ["estate-cleanout-checklist", "what-to-do-with-belongings-after-a-death"],
    audiences: ["families-and-executors"],
    inquiryService: "estate-cleanout",
  },
  {
    slug: "inherited-home-cleanouts",
    group: "cleanouts",
    navLabel: "Inherited Home Cleanouts",
    title: "Inherited Home Cleanouts: From Full House to Ready for Its Next Owner",
    metaTitle: "Inherited House Cleanout & Preparation",
    metaDescription:
      "Inherited a house to clear, clean, and prepare to sell or rent? Briarstone Prep helps heirs, including those far away, get an inherited home ready.",
    eyebrow: "Inherited Homes",
    lead: "Inheriting a house brings decisions most people have never faced: whether to sell, rent, or keep it, how to get it emptied, and what it needs before anyone else walks through. We help heirs get from a full house to a property that's ready for whatever you decide.",
    summary:
      "For heirs who now own a house and need it cleared, cleaned, and in shape to sell, rent, or keep.",
    situations: [
      "You inherited a home and need it emptied before deciding what's next",
      "You live in another city or state and can't manage the work in person",
      "Several siblings share the decision and need one clear point of contact",
      "The house has sat vacant and needs cleaning and attention before it can be shown",
    ],
    included: [
      {
        title: "A property-first plan",
        body: "We look at the house the way a buyer or tenant will: what needs to go, what needs cleaning, and which small repairs are worth doing before you decide on a sale price or rent.",
      },
      {
        title: "Clearing the contents",
        body: "Belongings are sorted for keeping, donation, or removal following your instructions, with family items set aside and packed for pickup or shipping arrangements you choose.",
      },
      {
        title: "Cleaning a home that's been closed up",
        body: "Vacant houses collect dust, pests, and odors. A thorough clean after the cleanout makes the property presentable for photos, inspections, and showings.",
      },
      {
        title: "Small repairs and touch-ups",
        body: "Patching walls, replacing worn fixtures, and fixing the small things that make a house feel neglected. Larger work is scoped separately.",
      },
      {
        title: "One point of contact",
        body: "Instead of finding a hauler, a cleaner, and a handyman from a distance, you have one team to talk to about the whole house.",
      },
    ],
    sections: [
      {
        heading: "When the house is yours now",
        paragraphs: [
          "An estate cleanout focuses on the belongings. An inherited home project focuses on the property you now own—what it will take to sell it, rent it, or move in. Clearing the contents is the first step, but the goal is a house that's ready for its next owner or occupant.",
          "We'll help you see the work in order: what has to happen first, what can wait, and what is worth spending money on before you list. If you're working with an agent, we can align the plan with their timeline.",
        ],
      },
      {
        heading: "Managing an inherited house from far away",
        paragraphs: [
          "Out-of-area heirs often tell us the hardest part isn't the work—it's arranging it remotely. We can work from photos and video calls to plan, coordinate access with a neighbor, agent, or lockbox, and send updates as the work progresses so you can make decisions without booking another flight.",
        ],
        bullets: [
          "Photo and video updates at agreed milestones",
          "Family items set aside and labeled for your review",
          "Coordination with your agent, attorney, or property manager when you ask us to",
        ],
      },
      {
        heading: "Thinking about renting it out instead?",
        paragraphs: [
          "The same process applies if you plan to rent the home: clear it, clean it, and take care of the minor repairs a tenant would notice. Tell us the plan for the property and we'll scope the work to match.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you help prepare an inherited home for sale?",
        a: "Yes. That's the focus of this service: clearing the contents, cleaning, and handling minor repairs so the house is ready to list. We'll scope the work with you and, if you'd like, with your real estate agent.",
      },
      {
        q: "Do I need to be present during the work?",
        a: "Usually not for all of it. Once the plan and the list of items to keep are agreed, much of the work can be done without you on site. We'll agree on how you'd like to be updated before we start.",
      },
      {
        q: "We haven't decided whether to sell yet. Should we wait?",
        a: "Not necessarily. Clearing and cleaning the home is useful whatever you decide, and seeing the house empty often makes the decision easier. We can start with the contents and talk about the rest once you've decided.",
      },
    ],
    related: ["estate-cleanouts", "pre-listing-home-preparation", "handyman-home-projects"],
    resources: ["how-to-clean-out-an-inherited-house", "preparing-a-house-for-sale-checklist"],
    audiences: ["families-and-executors", "real-estate-agents"],
    inquiryService: "inherited-home",
  },
  {
    slug: "senior-downsizing",
    group: "transitions",
    navLabel: "Senior Downsizing",
    title: "Senior Downsizing and Move Assistance",
    metaTitle: "Senior Downsizing & Move Assistance",
    metaDescription:
      "Practical downsizing help for older adults and their families: sorting a long-time home, planning a move to senior living, and handling what stays behind.",
    eyebrow: "Senior Downsizing & Home Transitions",
    lead: "Moving out of a long-time home is a big decision, and the work that follows can feel overwhelming for everyone involved. We help older adults and their families decide what comes along, take care of what doesn't, and leave the house ready for its next step.",
    summary:
      "Helping older adults and their families sort a long-lived-in home, plan for a smaller space, and handle what stays behind.",
    situations: [
      "A parent is moving to assisted living, a retirement community, or a smaller home",
      "Adult children want help but can't do it all themselves",
      "The new space is much smaller and choosing what fits is the hard part",
      "The family home needs to be cleared and prepared to sell after the move",
    ],
    included: [
      {
        title: "Planning around the new space",
        body: "We start with where they're going. Knowing the room sizes and what the community allows makes it much easier to decide which furniture and belongings fit.",
      },
      {
        title: "Sorting at a comfortable pace",
        body: "We work alongside your parent, not around them. Decisions are theirs; we keep things moving and organized, and we set aside anything others in the family have asked for.",
      },
      {
        title: "Getting ready for moving day",
        body: "Items that are going are sorted and organized so the move itself goes smoothly. If you need a moving company, we can help coordinate timing with them.",
      },
      {
        title: "Donating and removing what stays behind",
        body: "After the move, remaining items are donated where accepted or removed, so the family doesn't face a full house later.",
      },
      {
        title: "Preparing the home that's left",
        body: "If the house will be sold, we can continue with cleaning and minor repairs so it's ready for the market.",
      },
    ],
    sections: [
      {
        heading: "Respecting the person whose home it is",
        paragraphs: [
          "Downsizing is rarely about stuff. It's about independence, memories, and a big change in daily life. We take our pace from the person who's moving, explain each step, and never treat a lifetime of belongings as clutter.",
          "Adult children are often the ones who call us, and we're glad to keep them informed. But we'll always make sure the person moving has a real say in what happens to their things.",
        ],
      },
      {
        heading: "Moving to assisted living or a retirement community",
        paragraphs: [
          "Senior living communities usually have move-in dates, room dimensions, and rules about furniture and appliances. Planning around those details early avoids last-minute decisions. Once your parent has settled in, we can return to clear the remaining contents of the home or, if they're leaving an apartment, help with move-out so the unit can be returned.",
        ],
      },
      {
        heading: "Who does the moving?",
        paragraphs: [
          "Our focus is the work around the move: sorting, deciding, preparing, and handling what stays behind. Whether we transport belongings ourselves or coordinate with a moving company depends on the project—we'll make that clear when we scope the work.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you help with senior downsizing?",
        a: "Yes. We help older adults and their families sort belongings, plan what fits in the new space, prepare for the move, and handle donation and removal of what stays behind. We can also prepare the home for sale afterward.",
      },
      {
        q: "My parent is hesitant about getting help. How do you approach that?",
        a: "We go at their pace. We start by listening, explain what will happen, and leave decisions about their belongings to them. Many people find it easier to make decisions with a neutral person in the room than with family alone.",
      },
      {
        q: "Can you help clear out an assisted living apartment?",
        a: "Yes, tell us about the unit and the community's move-out deadline. We'll scope the work and confirm what's possible on that timeline.",
      },
    ],
    related: ["estate-transitions", "home-cleanouts", "pre-listing-home-preparation"],
    resources: ["senior-downsizing-checklist"],
    audiences: ["seniors-and-families"],
    inquiryService: "senior-downsizing",
  },
  {
    slug: "estate-transitions",
    group: "transitions",
    navLabel: "Estate Transitions",
    title: "Estate Transitions: One Team From First Walkthrough to Ready to List",
    metaTitle: "Estate Transition Services",
    metaDescription:
      "Clearing belongings, donations, deep cleaning, and repairs managed as one estate transition project, with one point of contact instead of five companies.",
    eyebrow: "Full Project Coordination",
    lead: "Clearing an estate or a family home usually means hiring several separate companies and coordinating them yourself. An estate transition brings that work into a single plan, with one team accountable for keeping it moving.",
    summary:
      "The full project—contents, donations, cleaning, and repairs—planned and managed as one, with one point of contact.",
    situations: [
      "You need the whole house handled, not just one piece of the work",
      "You'd rather make decisions than make phone calls to five vendors",
      "There's a target date for listing, closing, or handing back keys",
      "Several family members need to stay informed",
    ],
    included: [
      {
        title: "One plan for the whole property",
        body: "We map the work in order—sorting, donation, removal, cleaning, repairs—so each step sets up the next and nothing is waiting on a vendor you forgot to book.",
      },
      {
        title: "A single point of contact",
        body: "You talk with one person about the whole project. They know the house, the keep list, and the deadline.",
      },
      {
        title: "Work done by our team or coordinated by us",
        body: "Some tasks we handle directly; others may be better suited to a specialist. Your plan will spell out who does what, so there are no surprises.",
      },
      {
        title: "Progress you can see",
        body: "Updates at the milestones you care about, with photos when you're not on site.",
      },
      {
        title: "A clear handoff",
        body: "When the work is done, the house is ready for your agent, your buyer, your tenant, or your family—whatever comes next.",
      },
    ],
    sections: [
      {
        heading: "Why coordination matters more than any single task",
        paragraphs: [
          "Most of the delay in a home transition happens between tasks: the cleaner can't start until the haulers finish, the handyman can't patch walls until the furniture is out, the agent can't photograph until everything is done. Each company does its part well, but no one owns the sequence.",
          "An estate transition puts that sequence in one place. Our job is to keep the work moving in the right order and tell you plainly where things stand.",
        ],
      },
      {
        heading: "When to choose a full transition—and when not to",
        paragraphs: [
          "If you only need belongings cleared, an estate cleanout or home cleanout may be all you need. A full transition makes sense when the house needs several kinds of work before its next step and you'd rather not manage them yourself. We'll recommend the smaller option if it fits.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you do all of the work yourselves?",
        a: "We handle much of the work directly, and where a specialist is the better choice, we coordinate it. Your plan will make clear who is doing each part of the job.",
      },
      {
        q: "How long does a full estate transition take?",
        a: "It depends on the size of the home, how full it is, and how much cleaning and repair it needs. After we've reviewed the property, we'll give you a realistic timeline for your project rather than a one-size estimate.",
      },
    ],
    related: ["estate-cleanouts", "inherited-home-cleanouts", "senior-downsizing"],
    resources: ["estate-cleanout-checklist", "how-to-clean-out-an-inherited-house"],
    audiences: ["families-and-executors", "seniors-and-families"],
    inquiryService: "estate-transition",
  },
  {
    slug: "pre-listing-home-preparation",
    group: "market-ready",
    navLabel: "Pre-Listing Home Preparation",
    title: "Pre-Listing Home Preparation: Get the House Ready to Sell",
    metaTitle: "Pre-Listing Home Preparation",
    metaDescription:
      "Get a house ready for listing photos and showings: clearing unwanted items, deep cleaning, and pre-market repairs, planned around your agent's timeline.",
    eyebrow: "Market-Ready Homes",
    lead: "Before a home goes on the market, it usually needs some combination of clearing out, cleaning, and small repairs. We take on that list so the house shows well in photos and in person—and so you're not coordinating it all during an already busy time.",
    summary:
      "Clearing, cleaning, and pre-market repairs so a home is ready for listing photos, inspections, and showings.",
    situations: [
      "Your agent has handed you a list of things to do before photos",
      "The house is still full of belongings you won't be moving",
      "You've moved out and need the empty house cleaned and touched up",
      "You want to fix small issues before a buyer's inspector finds them",
    ],
    included: [
      {
        title: "Clearing and decluttering",
        body: "Removing the items you're not taking, clearing garages and storage spaces, and thinning out rooms so buyers see the space, not the stuff.",
      },
      {
        title: "Deep cleaning",
        body: "A detailed clean that goes beyond weekly housekeeping—kitchens, baths, floors, fixtures, and the corners that show up in listing photos.",
      },
      {
        title: "Pre-market repairs",
        body: "Patching and painting, replacing worn hardware and fixtures, and the small fixes that make a house feel cared for.",
      },
      {
        title: "Working to the listing date",
        body: "We plan the work backward from your photo or listing date and coordinate with your agent if you'd like us to.",
      },
    ],
    sections: [
      {
        heading: "The order matters",
        paragraphs: [
          "Preparing a house for sale goes faster when it's done in sequence: clear first, repair second, clean last. Cleaning before the repairs means cleaning twice; repairing before the house is cleared means working around furniture. We plan the work in the order that saves time and money.",
        ],
      },
      {
        heading: "Pacific Northwest homes have their own to-do list",
        paragraphs: [
          "In our wet climate, buyers and inspectors pay attention to moss on roofs and walkways, clogged gutters, damp crawl spaces, and mildew in bathrooms. We'll point out what we notice, handle the items within our scope, and tell you when something calls for a specialist.",
        ],
      },
      {
        heading: "What we don't do",
        paragraphs: [
          "We don't stage homes for sale, appraise property, or replace your agent's advice about pricing and presentation. We focus on the physical work that has to happen before the house can be staged, photographed, and shown.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you handle cleaning and minor repairs?",
        a: "Yes. Deep cleaning and minor, pre-market repairs are a core part of getting a house ready to list. Larger projects—like roofing, electrical, or plumbing work that requires a licensed trade—are scoped separately or referred out.",
      },
      {
        q: "Will you work with my real estate agent?",
        a: "Gladly. With your permission, we can coordinate access, schedule, and the agent's punch list directly, and keep you both updated.",
      },
    ],
    related: ["home-cleanouts", "handyman-home-projects", "inherited-home-cleanouts"],
    resources: ["preparing-a-house-for-sale-checklist"],
    audiences: ["real-estate-agents"],
    inquiryService: "pre-listing",
  },
  {
    slug: "home-cleanouts",
    group: "cleanouts",
    navLabel: "Home Cleanouts",
    title: "Whole-House and Partial Home Cleanouts",
    metaTitle: "Whole-House Cleanout Services",
    metaDescription:
      "Whole-house and partial cleanouts for homeowners: garages, basements, attics, and full homes cleared, with usable items donated and the space left clean.",
    eyebrow: "Home Cleanouts",
    lead: "Sometimes a home simply has more in it than anyone can face—years of storage in the garage, a basement no one goes into, or a whole house to empty before a move. We clear it out, donate what we can, and leave the space ready to use.",
    summary:
      "Clearing garages, basements, attics, or an entire house—with usable items donated and the space left clean.",
    situations: [
      "You're moving and don't want to take everything with you",
      "The garage, basement, or attic has become unusable",
      "A rental or vacant property was left full of belongings",
      "You want the space back but don't know where to start",
    ],
    included: [
      {
        title: "Whole-house or one room at a time",
        body: "We can clear a single space or the entire property—tell us what you want gone and what stays.",
      },
      {
        title: "Sorting with you or for you",
        body: "Work through decisions together, or give us clear instructions and let us handle it.",
      },
      {
        title: "Donation before disposal",
        body: "Usable items are directed to donation where accepted, with the remainder hauled away and disposed of or recycled appropriately.",
      },
      {
        title: "A clean space at the end",
        body: "Cleared areas are swept out, and a deeper clean can be added if the space needs it.",
      },
    ],
    sections: [
      {
        heading: "A cleanout without a loss in the family",
        paragraphs: [
          "Not every cleanout follows a death or a move to senior living. Plenty of people simply want their home back. This service is for homeowners clearing their own space, whether it's one stubborn room or the entire house before a move.",
        ],
      },
      {
        heading: "Rental and vacant property cleanouts",
        paragraphs: [
          "When a tenant leaves belongings behind or a vacant property needs to be cleared before the next occupant, we can clear the unit, clean it, and handle small repairs. Before removing a former tenant's belongings, make sure you've followed the notice and storage requirements that apply under Washington law—your attorney or property manager can confirm what's required.",
        ],
      },
      {
        heading: "What we can't take",
        paragraphs: [
          "Some items—like certain chemicals, paint, fuel, and other hazardous materials—need special handling and can't go out with a standard cleanout. We'll tell you up front what we can and can't remove, and point you to the right disposal options for the rest.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a whole-house cleanout take?",
        a: "It depends on the size of the home, how full it is, how much sorting is needed, and whether cleaning or repairs follow. Some cleanouts take a day or two; larger or more involved projects take longer. We'll give you a timeline for your property once we've reviewed it.",
      },
      {
        q: "What happens to items that can be donated?",
        a: "Usable items are directed to local donation organizations where they're accepted. Each organization sets its own rules about what it takes, so some items may be recycled or disposed of instead. We'll explain what to expect for your project.",
      },
    ],
    related: ["pre-listing-home-preparation", "estate-cleanouts", "senior-downsizing"],
    resources: ["what-to-do-with-belongings-after-a-death", "preparing-a-house-for-sale-checklist"],
    audiences: ["seniors-and-families", "real-estate-agents"],
    inquiryService: "home-cleanout",
  },
  {
    slug: "handyman-home-projects",
    group: "projects",
    navLabel: "Handyman & Home Projects",
    title: "Handyman Services and Home Projects",
    metaTitle: "Handyman & Home Projects",
    metaDescription:
      "Repairs and home projects for homeowners and sellers: patching, painting, fixture replacement, and the overdue fixes that make a house feel cared for.",
    eyebrow: "Home Projects",
    lead: "Every house builds up a list of small jobs: the door that sticks, the dated light fixture, the hole in the drywall from a long-gone picture. We work through that list, whether you're getting ready to sell or simply want to enjoy your home.",
    summary:
      "Patching, painting, fixtures, and the overdue repairs that make a home feel cared for—before a sale or anytime.",
    situations: [
      "Your agent or inspector gave you a list of repairs",
      "You've been meaning to get to a list of small jobs for months",
      "You want worn fixtures and finishes refreshed",
      "You need repairs coordinated with a cleanout or cleaning",
    ],
    included: [
      {
        title: "Drywall and paint",
        body: "Patching holes and dings, touching up or repainting walls and trim.",
      },
      {
        title: "Fixtures and hardware",
        body: "Replacing worn cabinet hardware, faucets, light fixtures, and similar items within our scope.",
      },
      {
        title: "Doors, trim, and small carpentry",
        body: "Fixing doors that stick, replacing damaged trim, and minor carpentry repairs.",
      },
      {
        title: "Punch lists",
        body: "Working through an agent's, inspector's, or your own list of small items in one visit where possible.",
      },
    ],
    sections: [
      {
        heading: "Small jobs, done properly",
        paragraphs: [
          "Small repairs are easy to put off and hard to schedule. Many contractors aren't interested in a list of minor jobs. We are—especially when they're the difference between a house that feels tired and one that feels ready.",
        ],
      },
      {
        heading: "Knowing when to call a specialist",
        paragraphs: [
          "Some work—like electrical, plumbing, gas, and roofing beyond minor repairs—requires a licensed trade or a permit. We'll tell you when a job falls outside our scope and, where possible, help you find the right person for it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take on small jobs?",
        a: "Yes. Small repairs and punch lists are exactly what this service is for. Grouping several jobs into one visit is usually the most efficient approach.",
      },
      {
        q: "Can you do repairs while the house is being cleared?",
        a: "Often, yes. Planning repairs alongside a cleanout or cleaning lets us sequence the work so the house is ready sooner.",
      },
    ],
    related: ["pre-listing-home-preparation", "inherited-home-cleanouts", "home-cleanouts"],
    resources: ["preparing-a-house-for-sale-checklist"],
    audiences: ["real-estate-agents"],
    inquiryService: "home-projects",
  },
];

export const serviceGroups: {
  id: ServiceGroup;
  label: string;
  title: string;
  body: string;
  primary: string;
  members: string[];
}[] = [
  {
    id: "cleanouts",
    label: "A",
    title: "Estate & Property Cleanouts",
    body: "Sorting, donating, and removing belongings from a loved one's home, an inherited house, or your own—while keeping what matters safe.",
    primary: "estate-cleanouts",
    members: ["estate-cleanouts", "inherited-home-cleanouts", "home-cleanouts"],
  },
  {
    id: "transitions",
    label: "B",
    title: "Senior Downsizing & Home Transitions",
    body: "Helping older adults and their families plan a move to a smaller home or senior living, and handling what stays behind.",
    primary: "senior-downsizing",
    members: ["senior-downsizing", "estate-transitions"],
  },
  {
    id: "market-ready",
    label: "C",
    title: "Market-Ready Home Preparation",
    body: "Clearing, deep cleaning, and pre-market repairs, planned around your listing date so the house shows its best.",
    primary: "pre-listing-home-preparation",
    members: ["pre-listing-home-preparation"],
  },
  {
    id: "projects",
    label: "+",
    title: "Handyman & Home Projects",
    body: "Repairs and overdue home projects, whether you're getting ready to sell or staying put.",
    primary: "handyman-home-projects",
    members: ["handyman-home-projects"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
