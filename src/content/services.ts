import type { Service, ServiceGroup } from "./types";

/**
 * Service pages. Each page targets one distinct search intent — see
 * docs/KEYWORD_MAP.md before adding or merging pages.
 *
 * Copy rule: describe what the client gets and how decisions are made. Do not
 * promise turnaround times, prices, guarantees or credentials here; those
 * belong in site.ts once verified. Name the place in the title, description,
 * H1, lead and once or twice in the body — no more.
 *
 * FAQ rule: no question or answer may appear word for word on another page
 * (npm run seo:check enforces this).
 */
export const services: Service[] = [
  {
    slug: "estate-cleanouts",
    group: "cleanouts",
    navLabel: "Estate Cleanouts",
    title: "Estate Cleanouts in Sarasota for Families and Executors",
    metaTitle: "Estate Cleanout Services in Sarasota, FL | Briarstone Prep",
    metaDescription:
      "Estate cleanouts in Sarasota and Manatee: keepsakes and papers set aside, usable items donated, the rest removed. Call to plan a loved one's home.",
    eyebrow: "Estate & Property Cleanouts",
    lead: "When someone you love has passed, their Sarasota home still needs attention—often on a timeline set by an estate, a lease, or a sale. Our estate cleanout service sorts, sets aside, donates, and removes belongings with care, so you can make the decisions that matter without carrying every box yourself.",
    summary:
      "Sorting, donating, and removing a loved one's belongings with care, while keeping what matters to the family safe.",
    headings: {
      situations: "Who needs an estate cleanout in Sarasota",
      included: "What an estate cleanout includes",
      process: "How an estate cleanout works, step by step",
      faq: "Estate cleanout questions",
      related: "Services that often follow an estate cleanout",
    },
    situations: [
      "You're the executor or personal representative and need the home cleared",
      "Family members live out of state and can only visit briefly",
      "The house or condo needs to be emptied before it's listed, rented, or returned",
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
        heading: "What clearing a loved one's home really involves",
        paragraphs: [
          "Clearing a lifetime of belongings is rarely just hauling. It means finding the documents an executor needs, making sure family heirlooms reach the right people, deciding what has value, and handling the rest respectfully. It also means doing it while you're managing everything else an estate requires.",
          "We bring structure to that work. You decide what matters; we handle the physical effort of sorting, packing what you're keeping, arranging donations, and clearing the rest—then tell you what was done.",
        ],
      },
      {
        heading: "Estate cleanouts and probate",
        paragraphs: [
          "Before belongings are removed, the person with legal authority over the estate—usually the executor or court-appointed personal representative—should approve the work. Probate rules differ by state, so if the estate is in probate or there are several heirs, check with a Florida probate attorney about what can be distributed, sold, or donated, and when.",
          "We're happy to work around those requirements: pausing for an appraisal, setting items aside for heirs, or documenting what leaves the home. We don't provide legal or tax advice.",
        ],
        links: [{ label: "Do you need probate before clearing a house in Florida?", href: "/resources/probate-before-clearing-a-house-florida" }],
      },
      {
        heading: "Managing a cleanout when you live out of state",
        paragraphs: [
          "Many of the families we talk with live outside Florida or can't take weeks away from work. Once the plan and keep list are agreed, much of the work can happen without you on site. We'll agree on how and when you'd like updates before we begin.",
        ],
        links: [{ label: "Estate cleanout help across the Sarasota area", href: "/service-areas/sarasota" }],
      },
    ],
    faqs: [
      {
        q: "How long does an estate cleanout take in Sarasota?",
        a: "It depends on the size of the home, how full it is, how much sorting the family wants done, and whether the building has access rules such as condo elevator bookings. After we've seen the property, we'll give you a realistic schedule rather than a guess.",
      },
      {
        q: "Do you work with probate attorneys?",
        a: "Yes, with the personal representative's permission we coordinate timing and access with the estate's attorney. We don't give legal advice, so questions about what can leave the house during probate go to the attorney first.",
      },
      {
        q: "What happens to items nobody in the family wants?",
        a: "Usable furniture, housewares, and clothing go to donation where organizations will accept them. What can't be donated is recycled where possible and disposed of properly, and we'll tell you up front which categories fall where.",
      },
      {
        q: "What if we find cash, jewelry, or personal papers during the cleanout?",
        a: "Before we start, we agree on a keep list and a list of things to watch for. Anything that matches is set aside for the family's review rather than donated or discarded.",
      },
      {
        q: "Can the family take keepsakes before you start?",
        a: "Yes, and we recommend it. Give everyone a deadline to choose items, then we sort what remains so nothing the family wanted is caught up in the clearing.",
      },
      {
        q: "Is an estate cleanout the same as after-death or biohazard cleaning?",
        a: "No. An estate cleanout deals with belongings and the house itself. If a death went undiscovered or there are bodily fluids, a licensed trauma or biohazard cleaning company needs to treat that area first.",
      },
    ],
    related: ["inherited-home-cleanouts", "estate-transitions", "pre-listing-home-preparation"],
    resources: ["estate-cleanout-checklist", "estate-cleanout-vs-after-death-cleanup"],
    audiences: ["families-and-executors"],
    inquiryService: "estate-cleanout",
    updated: "2026-10-19",
  },
  {
    slug: "inherited-home-cleanouts",
    group: "cleanouts",
    navLabel: "Inherited Home Cleanouts",
    title: "Inherited House Cleanout and Preparation in Sarasota",
    metaTitle: "Inherited House Cleanout in Sarasota, FL | Briarstone Prep",
    metaDescription:
      "Inherited a house in Sarasota or Manatee? We clear, clean and prepare it to sell or rent, and keep out-of-state heirs updated. Call to plan the work.",
    eyebrow: "Inherited Homes",
    lead: "Inheriting a house in Sarasota brings decisions most people have never faced: whether to sell, rent, or keep it, how to get it emptied, and what it needs before anyone else walks through. Our inherited house cleanout takes heirs from a full house to a property that's ready for whatever you decide.",
    summary:
      "For heirs who now own a house and need it cleared, cleaned, and in shape to sell, rent, or keep.",
    headings: {
      situations: "When heirs call us about an inherited house",
      included: "What an inherited house cleanout covers",
      process: "How we take an inherited house from full to ready",
      faq: "Inherited house questions from heirs",
      related: "Other help for inherited homes",
    },
    situations: [
      "You inherited a home and need it emptied before deciding what's next",
      "You live in another state and can't manage the work in person",
      "Several siblings share the decision and need one clear point of contact",
      "The house has sat closed up and needs cleaning and attention before it can be shown",
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
        body: "Vacant houses collect dust, pests, and odors, and in a humid climate they can develop mildew. A thorough clean after the cleanout makes the property presentable for photos, inspections, and showings.",
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
        heading: "Managing an inherited Florida house from far away",
        paragraphs: [
          "Out-of-state heirs often tell us the hardest part isn't the work—it's arranging it remotely. We can work from photos and video calls to plan, coordinate access with a neighbor, agent, or lockbox, and send updates as the work progresses so you can make decisions without booking another flight.",
        ],
        bullets: [
          "Photo and video updates at agreed milestones",
          "Family items set aside and labeled for your review",
          "Coordination with your agent, attorney, or property manager when you ask us to",
        ],
        links: [
          { label: "Managing a Sarasota estate cleanout from out of state", href: "/resources/managing-a-sarasota-estate-cleanout-from-out-of-state" },
        ],
      },
      {
        heading: "Planning to rent the inherited house instead?",
        paragraphs: [
          "The same process applies if you plan to rent the home: clear it, clean it, and take care of the minor repairs a tenant would notice. If you'll hand it to a property manager afterward, we can work to their move-in checklist.",
        ],
        links: [{ label: "Cleanouts for landlords and property managers", href: "/who-we-help/landlords-and-property-managers" }],
      },
    ],
    faqs: [
      {
        q: "Can you get an inherited house ready to list?",
        a: "Yes. We clear the contents, clean, and handle minor repairs so the house is ready for your agent's photos. If you have an agent, we'll plan the work around their listing date.",
      },
      {
        q: "I live out of state. Do I need to fly in?",
        a: "Usually not for the whole job. Many heirs visit once to choose keepsakes or handle it by video, then we work from an agreed keep list and send photo updates at the milestones you pick.",
      },
      {
        q: "We haven't decided whether to sell. Should we wait to clear it?",
        a: "Not necessarily. Clearing and cleaning is useful whatever you decide, and an empty house is far easier to evaluate. We can start with the contents and talk about the rest once you've chosen.",
      },
      {
        q: "Several of us inherited the house. Who do you take instructions from?",
        a: "From the person with legal authority, or from one contact all the owners agree on in writing. Updates can go to everyone so no one feels left out of the decisions.",
      },
      {
        q: "The house has been closed up for months. Is that a problem?",
        a: "It's common, especially with seasonal owners. Expect extra cleaning for dust, pests, and possible mildew, and tell us if you've noticed water stains or musty smells so we can flag anything that needs a specialist.",
      },
      {
        q: "Can you coordinate with the property manager if we rent it out?",
        a: "Yes. Give us their move-in standards and we'll clear, clean, and handle small repairs to that list, then hand the keys back to them.",
      },
    ],
    related: ["estate-cleanouts", "pre-listing-home-preparation", "handyman-home-projects"],
    resources: ["how-to-clean-out-an-inherited-house", "managing-a-sarasota-estate-cleanout-from-out-of-state"],
    audiences: ["families-and-executors", "real-estate-agents"],
    inquiryService: "inherited-home",
    updated: "2026-10-19",
  },
  {
    slug: "senior-downsizing",
    group: "transitions",
    navLabel: "Senior Downsizing",
    title: "Senior Downsizing and Move Help in Sarasota",
    metaTitle: "Senior Downsizing Help in Sarasota, FL | Briarstone Prep",
    metaDescription:
      "Senior downsizing in Sarasota and Manatee: sorting a long-time home, planning a move to assisted living, and clearing what stays. Call to talk it over.",
    eyebrow: "Senior Downsizing & Home Transitions",
    lead: "Moving out of a long-time Sarasota home is a big decision, and the work that follows can feel overwhelming for everyone involved. Our senior downsizing help lets older adults and their families decide what comes along, take care of what doesn't, and leave the house ready for its next step.",
    summary:
      "Helping older adults and their families sort a long-lived-in home, plan for a smaller space, and handle what stays behind.",
    headings: {
      situations: "When families ask for downsizing help in Sarasota",
      included: "What senior downsizing help includes",
      process: "How a downsizing move comes together",
      faq: "Questions about helping a parent downsize",
      related: "Services that pair with a downsizing move",
    },
    situations: [
      "A parent is moving to assisted living, a retirement community, or a smaller home",
      "Adult children want help but live far away or can't do it all themselves",
      "The new space is much smaller and choosing what fits is the hard part",
      "The family home or condo needs to be cleared and prepared to sell after the move",
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
          "Senior living communities usually have move-in dates, room dimensions, and rules about furniture and appliances. Planning around those details early avoids last-minute decisions. Once your parent has settled in, we can return to clear the remaining contents of the home or, if they're leaving a condo or apartment, help with move-out so the unit can be handed back.",
        ],
      },
      {
        heading: "Leaving a condo with association rules",
        paragraphs: [
          "Many condos and 55+ communities around Sarasota set rules for move-outs: reserved elevator times, padded elevators, set hours for trucks, and proof of insurance from anyone working in the building. Ask the association office for its move-out rules early so the schedule works around them.",
        ],
        links: [{ label: "Downsizing and cleanout help in Sarasota", href: "/service-areas/sarasota" }],
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
        q: "My parent is hesitant about getting help. How do you approach that?",
        a: "We go at their pace. We start by listening, explain what will happen, and leave decisions about their belongings to them, and many people find it easier to decide with a neutral person in the room.",
      },
      {
        q: "Can you clear out an assisted living apartment after a move or a death?",
        a: "Yes. Tell us the community's move-out deadline and any rules about elevators or loading times, and we'll confirm what's possible on that timeline.",
      },
      {
        q: "How far ahead of a move should we call?",
        a: "A few months ahead gives time for unhurried decisions and for family to claim items. Short-notice moves happen too, so tell us the date and we'll say honestly what fits.",
      },
      {
        q: "What if family members disagree about what to keep?",
        a: "We don't take sides. We keep a clear list of who has asked for what and set those items aside, so the family can settle disagreements without holding up the rest of the work.",
      },
      {
        q: "Do you work with senior move managers or movers?",
        a: "Yes. If you already have a mover or move manager, we can fit around their schedule and focus on sorting, clearing, and the house that's left behind.",
      },
      {
        q: "Can you sell my parent's furniture?",
        a: "We don't run estate sales. If items may have resale value, we'll suggest you speak with an appraiser, consignment shop, or estate sale company before we clear the house.",
      },
    ],
    related: ["estate-transitions", "home-cleanouts", "pre-listing-home-preparation"],
    resources: ["senior-downsizing-checklist", "preparing-a-house-for-sale-checklist"],
    audiences: ["seniors-and-families"],
    inquiryService: "senior-downsizing",
    updated: "2026-10-19",
  },
  {
    slug: "estate-transitions",
    group: "transitions",
    navLabel: "Estate Transitions",
    title: "Estate Transition Services in Sarasota, From Walkthrough to Ready to List",
    metaTitle: "Estate Transition Services in Sarasota, FL | Briarstone Prep",
    metaDescription:
      "Estate transitions in Sarasota and Manatee: cleanout, donations, cleaning and repairs run as one project with one contact. Call to plan the whole house.",
    eyebrow: "Full Project Coordination",
    lead: "Clearing an estate or a family home in Sarasota usually means hiring several separate companies and coordinating them yourself. An estate transition brings that work into a single plan, with one team accountable for keeping it moving.",
    summary:
      "The full project—contents, donations, cleaning, and repairs—planned and managed as one, with one point of contact.",
    headings: {
      situations: "When a full estate transition makes sense",
      included: "What an estate transition project covers",
      process: "How an estate transition is sequenced",
      faq: "Estate transition questions",
      related: "Single services inside an estate transition",
    },
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
        links: [{ label: "How much does an estate cleanout cost in Sarasota?", href: "/resources/estate-cleanout-cost-sarasota" }],
      },
      {
        heading: "Working around probate and closing dates",
        paragraphs: [
          "An estate transition often runs alongside probate, a listing agreement, or a closing date. We plan backward from whichever date matters most and pause where the personal representative or the estate's attorney needs to approve the next step. Probate rules differ by state, so timing questions belong with a Florida probate attorney.",
        ],
        links: [{ label: "Estate transition help in Sarasota", href: "/service-areas/sarasota" }],
      },
    ],
    faqs: [
      {
        q: "Do you do all of the work yourselves?",
        a: "We handle much of the work directly, and where a specialist is the better choice, we coordinate it. Your plan will make clear who is doing each part of the job.",
      },
      {
        q: "How long does a full estate transition take?",
        a: "Longer than a cleanout alone, because cleaning and repairs follow the clearing. After reviewing the property we'll give you a schedule for each stage, so you can see where the time goes.",
      },
      {
        q: "How is an estate transition different from an estate cleanout?",
        a: "A cleanout ends when the belongings are gone. A transition carries on through cleaning, repairs, and the handoff to an agent, buyer, or tenant, with one person managing the whole sequence.",
      },
      {
        q: "Who do I call if something goes wrong mid-project?",
        a: "Your single point of contact. They know the house, the keep list, and the deadline, so you never have to work out which vendor is responsible.",
      },
      {
        q: "Can you keep several family members updated at once?",
        a: "Yes. We agree at the start who receives updates and how often, and send the same summary to everyone so no one hears news second-hand.",
      },
    ],
    related: ["estate-cleanouts", "inherited-home-cleanouts", "senior-downsizing"],
    resources: ["probate-before-clearing-a-house-florida", "estate-cleanout-cost-sarasota"],
    audiences: ["families-and-executors", "seniors-and-families"],
    inquiryService: "estate-transition",
    updated: "2026-10-19",
  },
  {
    slug: "pre-listing-home-preparation",
    group: "market-ready",
    navLabel: "Pre-Listing Home Preparation",
    title: "Pre-Listing Home Preparation in Sarasota",
    metaTitle: "Pre-Listing Home Prep in Sarasota, FL | Briarstone Prep",
    metaDescription:
      "Get a Sarasota or Manatee home ready to list: clearing, deep cleaning and small repairs, planned around your agent's photo date. Call to book a walkthrough.",
    eyebrow: "Market-Ready Homes",
    lead: "Before a Sarasota home goes on the market, it usually needs some combination of clearing out, cleaning, and small repairs. Our pre-listing home preparation takes on that list so the house shows well in photos and in person—and so you're not coordinating it all during an already busy time.",
    summary:
      "Clearing, cleaning, and pre-market repairs so a home is ready for listing photos, inspections, and showings.",
    headings: {
      situations: "Signs a Sarasota home needs pre-listing prep",
      included: "What pre-listing preparation includes",
      process: "How we get a house ready for listing photos",
      faq: "Pre-listing preparation questions",
      related: "Services that help a house sell",
    },
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
        heading: "Clear, repair, then clean",
        paragraphs: [
          "Preparing a house for sale goes faster when it's done in sequence: clear first, repair second, clean last. Cleaning before the repairs means cleaning twice; repairing before the house is cleared means working around furniture. We plan the work in the order that saves time and money.",
        ],
      },
      {
        // VERIFY: general Florida guidance; confirm which of these items Briarstone handles in-house.
        heading: "What Florida homes need before they're listed",
        paragraphs: [
          "Florida's heat and humidity shape what buyers and inspectors look for. A home that has been closed up with the air conditioning off or set high can develop musty odors and mildew on walls, closets, and grout, so keep the air running and look behind furniture as rooms are cleared. Buyers also notice lanai and pool-cage screens, rusty fixtures near the water, and stained ceilings that could point to an old roof or AC leak.",
          "If the listing falls in hurricane season, which runs from June through November, plan the exterior work early and have a plan for patio furniture, potted plants, and loose items. In a condo, check the association's rules on contractors, move-outs, and work hours before the schedule is set. We'll point out what we notice, handle the items within our scope, and tell you when something calls for a specialist such as a mold assessor or roofer.",
        ],
        links: [{ label: "Preparing a house for sale in Florida: a checklist", href: "/resources/preparing-a-house-for-sale-checklist" }],
      },
      {
        heading: "What we don't do",
        paragraphs: [
          "We don't stage homes for sale, appraise property, or replace your agent's advice about pricing and presentation. We focus on the physical work that has to happen before the house can be staged, photographed, and shown.",
        ],
        links: [{ label: "Pre-listing preparation across the Sarasota area", href: "/service-areas/sarasota" }],
      },
    ],
    faqs: [
      {
        q: "Which repairs are worth doing before listing a Sarasota home?",
        a: "Usually the small, visible ones: patched walls, working doors, matching fixtures, fresh caulk, and intact screens. Your agent knows the local market best, so we work from their list and flag anything bigger for a specialist.",
      },
      {
        q: "Will you work directly with my real estate agent?",
        a: "Gladly. With your permission, we coordinate access, scheduling, and the agent's punch list directly and keep you both updated.",
      },
      {
        q: "Can you be finished before the photographer comes?",
        a: "Tell us the photo date when you first get in touch. We'll plan backward from it and say honestly whether the scope fits, and what to do first if it doesn't.",
      },
      {
        q: "Do you handle licensed work like electrical or roofing?",
        a: "No. Work that needs a licensed trade or a permit is referred to a specialist, and we'll tell you up front which items on your list fall into that group.",
      },
      {
        q: "Do you stage homes?",
        a: "No. We get the house cleared, cleaned, and repaired so a stager or your agent can take it from there.",
      },
      {
        q: "Can you work while I'm still living in the house?",
        a: "Yes. We can clear and repair room by room around your routine and save the final deep clean for after you move out.",
      },
    ],
    related: ["home-cleanouts", "handyman-home-projects", "inherited-home-cleanouts"],
    resources: ["preparing-a-house-for-sale-checklist", "how-to-clean-out-an-inherited-house"],
    audiences: ["real-estate-agents"],
    inquiryService: "pre-listing",
    updated: "2026-10-19",
  },
  {
    slug: "home-cleanouts",
    group: "cleanouts",
    navLabel: "Home Cleanouts",
    title: "Whole-House and Garage Cleanouts in Sarasota",
    metaTitle: "Whole-House Cleanouts in Sarasota, FL | Briarstone Prep",
    metaDescription:
      "Whole-house, garage and storage cleanouts in Sarasota and Manatee, with usable items donated and the space left clean. Call to clear it out.",
    eyebrow: "Home Cleanouts",
    lead: "Sometimes a Sarasota home simply has more in it than anyone can face—years of storage in the garage, a spare room no one goes into, or a whole house to empty before a move. Our home cleanout service clears it out, donates what we can, and leaves the space ready to use.",
    summary:
      "Clearing garages, spare rooms, storage, or an entire house—with usable items donated and the space left clean.",
    headings: {
      situations: "Reasons homeowners book a cleanout in Sarasota",
      included: "What a whole-house cleanout includes",
      process: "How a home cleanout runs from first call to empty",
      faq: "Home cleanout questions",
      related: "Services that pair with a home cleanout",
    },
    situations: [
      "You're moving and don't want to take everything with you",
      "The garage, spare room, or storage unit has become unusable",
      "You're getting a house ready to sell and need it emptied first",
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
          "Clearing a rental between tenants, or a vacant or absentee-owned property, has its own page with the details landlords and property managers ask about.",
        ],
        links: [{ label: "Rental and vacant property cleanouts for landlords", href: "/who-we-help/landlords-and-property-managers" }],
      },
      {
        heading: "What we can't take",
        paragraphs: [
          "Some items—like certain chemicals, paint, fuel, and other hazardous materials—need special handling and can't go out with a standard cleanout. We'll tell you up front what we can and can't remove, and point you to the county's household hazardous waste options for the rest.",
        ],
        links: [{ label: "Home cleanouts across the Sarasota area", href: "/service-areas/sarasota" }],
      },
    ],
    faqs: [
      {
        q: "How long does a whole-house cleanout take?",
        a: "Some single-room or garage cleanouts are done in a day; a full house takes longer depending on how much sorting you want. We'll give you a timeline once we've seen the space.",
      },
      {
        q: "Can you just clear the garage?",
        a: "Yes. A single garage, spare room, or storage unit is a common job, and we can add more rooms later if you decide to keep going.",
      },
      {
        q: "Do I have to sort everything before you arrive?",
        a: "No. Point out what stays and what goes, or sort alongside us. Anything you're unsure about can go into a 'decide later' pile instead of the truck.",
      },
      {
        q: "Where do donated items go?",
        a: "To local organizations that accept them, subject to each one's rules on condition and item type. Mattresses, worn upholstery, and older electronics are often refused, so those are recycled or disposed of instead.",
      },
      {
        q: "Will you take paint, pool chemicals, or old fuel?",
        a: "Not with a standard cleanout. Hazardous materials need special handling, so we'll set them aside and point you to the county's drop-off program.",
      },
    ],
    related: ["pre-listing-home-preparation", "estate-cleanouts", "senior-downsizing"],
    resources: ["preparing-a-house-for-sale-checklist", "estate-cleanout-cost-sarasota"],
    audiences: ["landlords-and-property-managers", "seniors-and-families"],
    inquiryService: "home-cleanout",
    updated: "2026-10-19",
  },
  {
    slug: "handyman-home-projects",
    group: "projects",
    navLabel: "Handyman & Home Projects",
    title: "Handyman Repairs and Home Projects in Sarasota",
    metaTitle: "Handyman & Home Repairs in Sarasota, FL | Briarstone Prep",
    metaDescription:
      "Handyman repairs in Sarasota and Manatee: patching, painting, fixtures and punch lists before a sale or anytime. Call to get your list done.",
    eyebrow: "Home Projects",
    lead: "Every Sarasota house builds up a list of small jobs: the door that sticks, the dated light fixture, the torn lanai screen. Our handyman and home project service works through that list, whether you're getting ready to sell or simply want to enjoy your home.",
    summary:
      "Patching, painting, fixtures, and the overdue repairs that make a home feel cared for—before a sale or anytime.",
    headings: {
      situations: "Handyman jobs we're called for in Sarasota",
      included: "What our handyman service covers",
      process: "How a repair list gets done",
      faq: "Handyman and repair questions",
      related: "Services that pair with home repairs",
    },
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
        heading: "Knowing when to call a licensed specialist",
        paragraphs: [
          "Some work—like electrical, plumbing, gas, roofing, and air conditioning beyond minor repairs—requires a licensed trade or a permit. We'll tell you when a job falls outside our scope and, where possible, help you find the right person for it.",
        ],
        links: [{ label: "Home repairs and projects across the Sarasota area", href: "/service-areas/sarasota" }],
      },
    ],
    faqs: [
      {
        q: "Do you take on jobs that are too small for most contractors?",
        a: "Yes. Small repairs and punch lists are exactly what this service is for, and grouping several into one visit is usually the most efficient approach.",
      },
      {
        q: "Can you make repairs while the house is being cleared?",
        a: "Often, yes. Planning repairs alongside a cleanout or cleaning lets us sequence the work so the house is ready sooner.",
      },
      {
        q: "Can you work through a home inspection report?",
        a: "We can take on the minor items from an inspection report. Anything that needs a licensed trade, such as electrical or roofing findings, we'll separate out so you can get the right specialist.",
      },
      {
        q: "Do you repair lanai and pool-cage screens?",
        a: "Re-screening a few torn panels is the kind of small job we take on. A full enclosure rescreen or structural repair is better suited to a screen enclosure specialist.",
      },
      {
        q: "Should I send photos of the repair list?",
        a: "Yes, photos help us understand the job before we visit. Include a wide shot and a close-up of each item.",
      },
    ],
    related: ["pre-listing-home-preparation", "inherited-home-cleanouts", "home-cleanouts"],
    resources: ["preparing-a-house-for-sale-checklist", "how-to-clean-out-an-inherited-house"],
    audiences: ["real-estate-agents"],
    inquiryService: "home-projects",
    updated: "2026-10-19",
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
