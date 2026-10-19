import type { Resource, ResourceGroup } from "./types";

/**
 * Educational guides. These target informational searches and link to the
 * relevant service pages. Review annually. `published` is the first public
 * date; change `updated` only for a substantive edit. Nothing here is legal
 * or tax advice.
 */
export const resources: Resource[] = [
  {
    slug: "how-to-clean-out-an-inherited-house",
    group: "inherited-and-probate",
    title: "How to Clean Out an Inherited House in Florida, Step by Step",
    metaTitle: "How to Clean Out an Inherited House in Florida | Briarstone",
    metaDescription:
      "Step-by-step guide to clearing an inherited Florida house: securing it, finding documents, dividing keepsakes, donating, and readying it to sell or rent.",
    summary:
      "A practical order of operations for heirs—from securing the house to getting it ready to sell or rent.",
    published: "2026-10-15",
    updated: "2026-10-19",
    readingMinutes: 8,
    intro: [
      "Inheriting a house often comes with a long list of decisions and very little guidance. Where do you begin? What can you throw away? What if your siblings disagree? This guide lays out a sensible order of operations, so you can move forward one step at a time.",
      "Every estate is different. Probate rules differ by state, so if the house is part of an estate in probate, or several people share ownership, check with a Florida probate attorney before removing or selling anything.",
    ],
    sections: [
      {
        heading: "1. Confirm who has authority",
        paragraphs: [
          "Before anything leaves the house, make sure the person making decisions has the legal authority to do so. That's usually the executor or personal representative named in the will or appointed by the court, or the trustee if the house is held in a trust. If ownership has already passed to heirs, all owners should agree on the plan.",
        ],
        links: [{ label: "Do you need probate before clearing a house in Florida?", href: "/resources/probate-before-clearing-a-house-florida" }],
      },
      {
        heading: "2. Secure the house",
        paragraphs: [
          "A vacant house needs attention right away. Change or re-key the locks, make sure doors and windows are secure, and let a trusted neighbor know the house is empty. In Florida, keep the air conditioning running at a sensible setting so humidity doesn't lead to mildew while the house is closed up.",
        ],
        checklist: [
          "Re-key locks and collect all spare keys, garage remotes, and gate cards",
          "Notify the homeowner's insurance company that the house is vacant—coverage can change",
          "Keep power and air conditioning on so the home stays cool and dry",
          "Forward mail to the executor or heir handling the estate",
          "Remove perishable food and take out the trash",
        ],
      },
      {
        heading: "3. Search for important documents",
        paragraphs: [
          "Before any sorting begins, look for the papers the estate will need. These are often scattered across desks, closets, file boxes, and even books or freezers. Make a dedicated box for anything that looks important and go through it carefully later.",
        ],
        checklist: [
          "Wills, trusts, and any notes about wishes",
          "Deeds, titles, and mortgage statements",
          "Bank, brokerage, and retirement account statements",
          "Insurance policies and recent tax returns",
          "Condo or HOA documents and recent association statements",
          "Safe deposit box keys",
          "Passwords, account lists, and digital devices",
        ],
      },
      {
        heading: "4. Let family choose keepsakes",
        paragraphs: [
          "Give each family member a fair opportunity to choose items that matter to them. Some families take turns; others list items and resolve conflicts with a simple rotation. Agree on a deadline so the process doesn't stall the rest of the work.",
          "Take photos of items before they're distributed. It helps keep records straight and gives everyone a visual memory of the home as it was.",
        ],
      },
      {
        heading: "5. Identify items that may have value",
        paragraphs: [
          "Jewelry, art, collectibles, antiques, firearms, and vehicles may warrant a professional appraisal before you decide what to do with them. Firearm transfer rules differ by state, so ask the estate's attorney or a licensed firearms dealer before any firearm is transferred or sold.",
        ],
      },
      {
        heading: "6. Sort the rest: keep, sell, donate, discard",
        paragraphs: [
          "With keepsakes and valuables set aside, the remaining contents can be sorted into four groups. Work one room at a time, and start with the easiest spaces—a guest room or a linen closet—before tackling the rooms with the strongest memories.",
          "Donation organizations each set their own rules about what they accept, and many won't take items such as mattresses, worn upholstered furniture, or older electronics. Check before you load the car.",
        ],
      },
      {
        heading: "7. Handle hazardous items separately",
        paragraphs: [
          // VERIFY: confirm current county drop-off programs before relying on this.
          "Paint, pool chemicals, fuel, batteries, and medications shouldn't go in the trash. Sarasota and Manatee counties both run household hazardous waste drop-off programs—check the county's website for current locations and hours. Many pharmacies and police stations host medication take-back drop boxes.",
        ],
      },
      {
        heading: "8. Clean, repair, and decide what's next",
        paragraphs: [
          "Once the house is empty, you'll see it clearly—sometimes for the first time in years. Deep cleaning and small repairs will make it ready for an agent's evaluation, listing photos, or a tenant. If you're unsure whether to sell, rent, or keep the house, seeing it empty often makes the decision easier.",
        ],
      },
    ],
    takeaway:
      "Work in order: authority, security, documents, keepsakes, valuables, then everything else. When the work is more than your family can take on—or you live too far away—a single team that can clear, clean, and repair the home saves a great deal of coordination.",
    services: ["inherited-home-cleanouts", "estate-cleanouts", "pre-listing-home-preparation"],
  },
  {
    slug: "estate-cleanout-checklist",
    group: "after-a-death",
    title: "Estate Cleanout Checklist for Sarasota Families: Before, During, and After",
    metaTitle: "Estate Cleanout Checklist for Sarasota Families | Briarstone",
    metaDescription:
      "An estate cleanout checklist for Sarasota executors and families: what to do before, during, and after clearing a loved one's home or condo.",
    summary: "A clear checklist for executors and families clearing a loved one's home.",
    published: "2026-10-15",
    updated: "2026-10-19",
    readingMinutes: 6,
    intro: [
      "An estate cleanout has a lot of moving parts, and it's easy to lose track of what's been done. Use this checklist to keep the work organized, whether you're clearing a house or condo in Sarasota yourself or working with a team.",
    ],
    sections: [
      {
        heading: "Before the cleanout",
        checklist: [
          "Confirm the executor, personal representative, or trustee has approved the work",
          "If the estate is in probate, check with a Florida probate attorney about timing and distribution",
          "Secure the home and notify the insurer that it's vacant",
          "Ask the condo or homeowners' association about move-out rules, gate access, and elevator bookings",
          "Collect important documents and set them aside",
          "Give family members a deadline to choose keepsakes",
          "Photograph rooms and notable items for the estate's records",
          "Arrange appraisals for items that may have value",
          "Make a written keep list of anything that must not be donated or discarded",
          "Decide on a target date based on the listing, lease, or closing",
        ],
      },
      {
        heading: "During the cleanout",
        checklist: [
          "Work room by room and label boxes clearly",
          "Keep a 'review later' box for anything uncertain",
          "Check pockets, books, drawers, and freezers for cash, keys, and papers",
          "Separate donations, recycling, hazardous items, and trash",
          "Confirm donation organizations' accepted-items lists before drop-off",
          "Keep donation receipts for the estate's records",
          "Set aside items for shipping to family who live far away",
        ],
      },
      {
        heading: "After the cleanout",
        checklist: [
          "Walk through every room, closet, attic, garage, lanai, and shed",
          "Deep clean the home",
          "Complete minor repairs before an agent's evaluation or listing photos",
          "Adjust utilities, insurance, and mail forwarding as needed",
          "Hand off keys, gate cards, and access to the agent, buyer, or tenant",
        ],
      },
    ],
    takeaway:
      "Write things down—keep lists, receipts, and dates. A simple record protects the executor and makes it easier to keep the whole family informed.",
    services: ["estate-cleanouts", "estate-transitions"],
  },
  {
    slug: "preparing-a-house-for-sale-checklist",
    group: "downsizing-and-selling",
    title: "Preparing a Florida House for Sale: A Room-by-Room Checklist",
    metaTitle: "Preparing a Florida House for Sale: Checklist | Briarstone",
    metaDescription:
      "A checklist for getting a Florida house ready to sell: clearing, repairs, deep cleaning, humidity and hurricane-season items to handle before listing photos.",
    summary: "What to clear, fix, and clean before listing photos—in the order that saves time.",
    published: "2026-10-15",
    updated: "2026-10-19",
    readingMinutes: 7,
    intro: [
      "Most of what makes a house ready to sell isn't expensive: it's clearing what doesn't need to be there, fixing small things, and cleaning thoroughly. The order you do it in matters. Clear first, repair second, clean last—otherwise you'll end up doing the same work twice.",
      "Your real estate agent knows your Sarasota-area market and should guide decisions about pricing, staging, and which improvements are worth making. Use this checklist alongside their advice.",
    ],
    sections: [
      {
        heading: "Step 1: Clear and declutter",
        checklist: [
          "Remove everything you're not moving to your next home",
          "Clear countertops, tabletops, and the tops of refrigerators",
          "Thin out closets so they look roomy",
          "Empty the garage and storage spaces enough to show their size",
          "Remove most personal photos and collections",
        ],
      },
      {
        heading: "Step 2: Make small repairs",
        checklist: [
          "Patch nail holes, dings, and cracks; touch up paint",
          "Fix doors and drawers that stick or don't latch",
          "Replace burned-out bulbs and mismatched or broken fixtures",
          "Repair leaky faucets and running toilets",
          "Re-caulk tubs, showers, and sinks where it's discolored",
          "Replace damaged window screens and torn lanai screen panels",
        ],
      },
      {
        heading: "Step 3: Deep clean",
        checklist: [
          "Kitchen: inside and out of appliances, cabinet fronts, and backsplash",
          "Bathrooms: grout, glass, fixtures, and exhaust fans",
          "Floors: deep clean carpet and polish tile and hard floors",
          "Windows and sliding-door tracks, inside and out where reachable",
          "Baseboards, light switches, ceiling fans, and AC vents",
        ],
      },
      {
        heading: "Florida checklist: humidity, storms, and associations",
        paragraphs: [
          "Florida's heat, humidity, and storm season shape what buyers and inspectors look for. These are general suggestions; your agent and inspector can tell you what matters most for your house.",
        ],
        checklist: [
          "Keep the air conditioning running in a closed-up house and check closets, behind furniture, and grout for mildew",
          "Look for ceiling stains that could point to a past roof or AC leak, and ask a specialist about anything you find",
          "Clean the lanai, pool deck, and screen enclosure, and replace torn screen panels",
          "Wash down rust and salt residue on outdoor fixtures, railings, and sliding doors",
          "During hurricane season (June through November), plan exterior work early and know where outdoor furniture and loose items will go if a storm is forecast",
          "In a condo or HOA community, ask about rules for contractors, move-outs, signs, and work hours before scheduling",
        ],
      },
      {
        heading: "Before photos",
        checklist: [
          "Open blinds and replace any dim bulbs",
          "Remove vehicles, trash cans, and hoses from view",
          "Make beds and set out fresh towels",
          "Do a final walkthrough with your agent's list",
        ],
      },
    ],
    takeaway:
      "Clear, repair, clean—in that order. If you'd rather hand off the whole list, look for a team that can do all three and plan the work around your listing date.",
    services: ["pre-listing-home-preparation", "handyman-home-projects", "home-cleanouts"],
  },
  {
    slug: "senior-downsizing-checklist",
    group: "downsizing-and-selling",
    title: "Senior Downsizing Checklist for Sarasota Families",
    metaTitle: "Senior Downsizing Checklist for Sarasota Families",
    metaDescription:
      "A downsizing checklist for older adults and adult children in Sarasota: planning for a smaller space or senior living, moving day, and what's left behind.",
    summary: "A step-by-step plan for older adults and the families helping them move.",
    published: "2026-10-15",
    updated: "2026-10-19",
    readingMinutes: 6,
    intro: [
      "Downsizing from a long-time home is as much an emotional process as a practical one. A plan helps: it breaks a huge job into manageable steps and keeps the person who's moving at the center of the decisions, whether the move is across Sarasota or to be closer to family.",
    ],
    sections: [
      {
        heading: "Two to three months before the move",
        checklist: [
          "Get the floor plan and room dimensions of the new home",
          "Ask the community about move-in rules, furniture limits, and what's provided",
          "Make a list of the furniture that will fit and be used",
          "Let family members know they can request items—with a deadline",
          "Start with spaces that are rarely used: guest rooms, storage, the garage",
        ],
      },
      {
        heading: "Four to six weeks before",
        checklist: [
          "Sort room by room into keep, family, donate, and discard",
          "Arrange appraisals for items that may have value",
          "Book the moving company and confirm the community's elevator or loading times",
          "Gather medical records, prescriptions, and important documents in one place",
          "Plan how to set up the new home so it feels familiar on day one",
        ],
      },
      {
        heading: "Moving week",
        checklist: [
          "Pack a first-night box: medications, toiletries, phone chargers, glasses, a change of clothes",
          "Label boxes by room in the new home",
          "Have someone at each end of the move",
          "Set up the bed and bathroom first",
        ],
      },
      {
        heading: "After the move",
        checklist: [
          "Clear the remaining contents of the old home",
          "Donate usable items and dispose of the rest properly",
          "Clean and make minor repairs if the home will be sold",
          "Update the address with banks, Social Security, Medicare, and insurers",
        ],
      },
      {
        heading: "Keeping the person at the center",
        paragraphs: [
          "Ask, don't assume. Let the person who's moving tell the stories behind their belongings, and give them time to decide. Items that can't come along may find a meaningful home with a family member, a friend, or an organization they care about—and knowing that can make letting go easier.",
        ],
      },
    ],
    takeaway:
      "Start early, plan around the new space, and leave the decisions with the person who's moving. Help with the physical work lets families focus on supporting one another.",
    services: ["senior-downsizing", "home-cleanouts"],
  },
  {
    slug: "what-to-do-with-belongings-after-a-death",
    group: "after-a-death",
    title: "What to Do With a Loved One's Belongings After a Death: A Florida Family Guide",
    metaTitle: "Belongings After a Death: A Florida Family Guide",
    metaDescription:
      "A gentle guide for Florida families on a loved one's belongings after a death: what to do first, what to keep, and how to donate, sell or discard the rest.",
    summary: "What to handle first, what to keep, and how to find good homes for the rest.",
    published: "2026-10-15",
    updated: "2026-10-19",
    readingMinutes: 7,
    intro: [
      "There's no right timeline for going through a loved one's belongings. Some families need to move quickly because of a lease, a condo association, or a sale; others have time to wait. Either way, it helps to know what has to happen first and what can wait until you're ready.",
    ],
    sections: [
      {
        heading: "What to do first",
        paragraphs: [
          "In the first days and weeks, focus on protecting the home and the estate rather than sorting belongings. Secure the property, find important documents, and avoid giving away or selling anything until the executor or personal representative has been identified and, if needed, a Florida probate attorney has been consulted.",
        ],
        checklist: [
          "Secure the home and any vehicles",
          "Locate the will and important financial papers",
          "Remove perishables and valuables at risk of theft",
          "Hold off on distributing belongings until authority is clear",
        ],
      },
      {
        heading: "Deciding what to keep",
        paragraphs: [
          "It's common to keep too much at first and too little later. Rather than deciding everything at once, set aside a few boxes of items you're uncertain about and revisit them in a few months. Photographs of belongings can preserve memories without keeping every object.",
        ],
      },
      {
        heading: "Sharing items with family and friends",
        paragraphs: [
          "Invite family and close friends to request items that are meaningful to them. A simple shared list, with a deadline, helps avoid misunderstandings. If there are disagreements about valuable items, the executor and estate attorney can help determine a fair approach.",
        ],
      },
      {
        heading: "Selling items of value",
        paragraphs: [
          "For furniture, art, jewelry, and collectibles with resale value, options include estate sale companies, consignment shops, auction houses, and online marketplaces. An appraisal can help you decide which route makes sense and give the estate a record of value.",
        ],
      },
      {
        heading: "Donating usable items",
        paragraphs: [
          "Clothing, housewares, furniture, books, and medical equipment can often be donated. Each organization has its own accepted-items list, and some offer pickup for larger items. Keep receipts for the estate's records and ask the estate's tax advisor how they should be treated.",
        ],
      },
      {
        heading: "Disposing of the rest responsibly",
        paragraphs: [
          "Items that can't be sold or donated should be recycled or disposed of properly. Medications can go to a take-back drop box, and chemicals, paint, and batteries can go to the county's household hazardous waste program. Shred documents with personal information once the estate no longer needs them.",
        ],
        links: [{ label: "Estate cleanout vs after-death cleanup: which do you need?", href: "/resources/estate-cleanout-vs-after-death-cleanup" }],
      },
    ],
    takeaway:
      "Protect the home and documents first, give yourself time on personal items, and find good homes for what you don't keep. When the volume is too much, a cleanout team can handle sorting, donations, and removal while you focus on your family.",
    services: ["estate-cleanouts", "home-cleanouts"],
  },
  {
    slug: "estate-cleanout-vs-after-death-cleanup",
    group: "after-a-death",
    title: "Estate Cleanout vs After-Death Cleanup in Sarasota: Which Do You Need?",
    metaTitle: "Estate Cleanout vs After-Death Cleanup in Sarasota",
    metaDescription:
      "Estate cleanout or after-death biohazard cleanup? How Sarasota families can tell which they need, who does each, and the order they happen in.",
    summary: "Two very different services with similar names—and how to tell which one your family needs.",
    published: "2026-10-19",
    updated: "2026-10-19",
    readingMinutes: 5,
    intro: [
      "After a death, families searching for help often find two kinds of companies: estate cleanout services and after-death (or biohazard) cleanup services. The names sound alike, but the work is completely different, and choosing the wrong one wastes time at a moment when you have little to spare.",
      "This guide explains the difference, how to tell which you need, and what order to do them in if you need both.",
    ],
    sections: [
      {
        heading: "What an estate cleanout is",
        paragraphs: [
          "An estate cleanout deals with a person's belongings and home. It means sorting the contents, setting aside keepsakes and important papers for the family, donating what can be donated, and removing the rest so the house can be sold, rented, or returned. It's the right service in most situations, including when someone died in hospital, in hospice, or peacefully at home and was found promptly.",
        ],
      },
      {
        heading: "What after-death cleanup is",
        paragraphs: [
          "After-death cleanup, sometimes called trauma, crime-scene, or biohazard cleaning, is specialist decontamination. It's needed when a death went undiscovered for some time, or when blood or other bodily fluids are present. These companies use protective equipment, remove contaminated materials such as flooring or drywall, and treat the area so it's safe to enter.",
          "It is not a job for a family member, a general cleaner, or a cleanout company. If you're unsure whether the situation calls for it, ask the medical examiner's office, the funeral home, or your insurer for guidance.",
        ],
      },
      {
        heading: "How to tell which one you need",
        checklist: [
          "The death was attended or discovered quickly, and there's no contamination: an estate cleanout",
          "The death went undiscovered, there are strong odors, or there are bodily fluids: after-death cleanup first",
          "The home is extremely cluttered or unsanitary but there was no death in it: a cleanout, sometimes with specialist cleaning for affected areas",
          "You aren't sure: ask before anyone goes in to sort belongings",
        ],
      },
      {
        heading: "If you need both, the order matters",
        paragraphs: [
          "When both are needed, the specialist cleanup comes first and should be finished and cleared before anyone sorts belongings. After that, the estate cleanout can proceed as normal: keepsakes first, then donation and removal, then cleaning and repairs if the home is going to market. Ask your homeowner's insurer early whether the policy covers specialist cleanup, since the answer can affect who you call.",
        ],
      },
    ],
    takeaway:
      "If there's contamination, call an after-death cleanup specialist first. For everything else—sorting, keepsakes, donations, and clearing the house—an estate cleanout is the service you need.",
    services: ["estate-cleanouts", "estate-transitions"],
  },
  {
    // VERIFY: legal content — flagged for review by a Florida probate attorney before launch.
    slug: "probate-before-clearing-a-house-florida",
    group: "inherited-and-probate",
    title: "Do You Need Probate Before Clearing a House in Florida?",
    metaTitle: "Probate Before Clearing a House in Florida? | Briarstone",
    metaDescription:
      "Can you clear a loved one's Florida house before probate? What to ask a probate attorney, what's usually safe to do first, and what to wait on.",
    summary: "What to check before anything leaves the house, and the questions to bring to a probate attorney.",
    published: "2026-10-19",
    updated: "2026-10-19",
    readingMinutes: 6,
    callout:
      "This guide is general information, not legal advice. Probate rules differ by state and by estate. Before anything is sold, given away, or removed from the house, talk to a Florida probate attorney.",
    intro: [
      "One of the first questions families ask after a death is whether they're allowed to start clearing the house. The honest answer is that it depends on how the property was owned, whether there's a will or trust, and who has been given authority over the estate. This guide explains the questions that decide it, so you can have a focused conversation with a Florida probate attorney.",
    ],
    sections: [
      {
        heading: "Why authority matters before anything leaves the house",
        paragraphs: [
          "The contents of a home usually belong to the estate until they're distributed. Removing, selling, or giving away belongings before someone has authority to act can cause disputes between heirs and problems for whoever eventually manages the estate. Being named as executor in a will may not, on its own, give someone authority to act; that can require appointment by the court. A probate attorney can tell you what applies.",
        ],
      },
      {
        heading: "Questions that decide whether probate is involved",
        checklist: [
          "Was the house owned by the person alone, jointly with someone else, or by a trust?",
          "Is there a will, and who is named to administer the estate?",
          "Has anyone been appointed by the court yet?",
          "Was the house the person's homestead? Florida has special rules for homestead property that can affect who inherits it",
          "Is the estate small enough that a simplified procedure might apply?",
          "Are there debts, a mortgage, or disagreements among heirs?",
        ],
      },
      {
        heading: "What families can usually do in the meantime",
        paragraphs: [
          "Protecting the property is generally sensible while questions of authority are sorted out. Confirm with the attorney, but these steps are about preservation rather than distribution:",
        ],
        checklist: [
          "Secure the home, re-key locks, and collect keys and gate cards",
          "Keep power and air conditioning on and the insurance in force",
          "Remove perishable food and trash",
          "Find and safeguard the will, financial papers, and valuables",
          "Photograph each room before anything is moved",
        ],
      },
      {
        heading: "What to hold off on until the attorney agrees",
        checklist: [
          "Selling furniture, vehicles, jewelry, or anything of value",
          "Letting family members take items before the plan is agreed",
          "Donating or discarding the bulk of the contents",
          "Listing or renting the house",
        ],
      },
      {
        heading: "How a cleanout fits around probate",
        paragraphs: [
          "Once the personal representative or trustee has authority and the attorney is comfortable, an estate cleanout can go ahead. A good cleanout team will take instructions from the person with authority, keep a record of what leaves the house, and pause for appraisals or for heirs to collect items.",
        ],
      },
    ],
    takeaway:
      "Protect the house first, find out who has authority, and ask a Florida probate attorney before anything leaves. Once that's clear, the cleanout itself is the straightforward part.",
    services: ["estate-cleanouts", "estate-transitions"],
  },
  {
    // VERIFY: publish price ranges here only if the client supplies real figures.
    slug: "estate-cleanout-cost-sarasota",
    group: "costs-and-planning",
    title: "How Much Does an Estate Cleanout Cost in Sarasota?",
    metaTitle: "Estate Cleanout Cost in Sarasota: What Drives the Price",
    metaDescription:
      "What drives the cost of an estate cleanout in Sarasota and Manatee: home size, volume, access, donations, cleaning and repairs. How to compare quotes.",
    summary: "The factors that drive the price of a cleanout, and how to compare quotes fairly.",
    published: "2026-10-19",
    updated: "2026-10-19",
    readingMinutes: 6,
    intro: [
      "It's the first question most families ask, and the honest answer is that cleanout costs depend heavily on the house. Two homes with the same square footage can differ widely in how much is in them, how much sorting the family wants, and how easy the property is to work in.",
      "This guide explains what drives the price of an estate cleanout in the Sarasota area, so you can understand a quote and compare companies on the same terms.",
    ],
    sections: [
      {
        heading: "The biggest factor: how much is in the house",
        paragraphs: [
          "Volume drives most of the cost: how many rooms are full, whether the garage, attic, lanai, or storage units are packed, and how much will need hauling away rather than donating. A lightly furnished condo and a house with decades of storage are very different jobs.",
        ],
      },
      {
        heading: "How much sorting the family wants",
        paragraphs: [
          "Clearing a house the family has already been through is faster than sorting every drawer for papers, photos, and keepsakes. Careful sorting is often the right choice for an estate, but it takes more time, and time is part of the price.",
        ],
      },
      {
        heading: "Access and building rules",
        paragraphs: [
          "Stairs, long walks from the door to the truck, condo elevator bookings, set move-out hours, and gated-community access all affect how long a job takes. If the association requires proof of insurance or limits work to certain days, that shapes the schedule too.",
        ],
      },
      {
        heading: "Donation, recycling, and disposal",
        paragraphs: [
          "Disposal fees and the time spent delivering donations both affect cost. Items many organizations won't accept, such as mattresses or worn upholstery, usually go for disposal. Hazardous materials like paint and pool chemicals need separate handling.",
        ],
      },
      {
        heading: "Add-ons: cleaning, repairs, and deadlines",
        paragraphs: [
          "If the home is going to market, deep cleaning and minor repairs are often added after the cleanout. A short deadline, such as a closing date or a lease end, can also affect the price if it means a larger crew.",
        ],
      },
      {
        heading: "How to compare cleanout quotes",
        checklist: [
          "Is the price fixed for the agreed scope, or an estimate that can change?",
          "What exactly is included: sorting, donation runs, disposal fees, sweeping, cleaning?",
          "How are keepsakes, papers, and valuables handled if they're found?",
          "Who handles condo or HOA requirements such as insurance certificates?",
          "Will you get donation receipts and photos for the estate's records?",
          "What's excluded, and what would trigger an extra charge?",
        ],
      },
    ],
    takeaway:
      "The best way to get a reliable number is to share photos or a walkthrough and a clear description of what the family wants kept. Compare quotes on scope, not just the total.",
    services: ["estate-cleanouts", "estate-transitions"],
  },
  {
    slug: "managing-a-sarasota-estate-cleanout-from-out-of-state",
    group: "inherited-and-probate",
    title: "Managing a Sarasota Estate Cleanout From Out of State",
    metaTitle: "Managing a Sarasota Estate Cleanout From Out of State",
    metaDescription:
      "Live far from a parent's Sarasota home? How to handle access, keepsakes, condo rules, hurricane season and updates when managing a cleanout remotely.",
    summary: "How heirs and executors who live elsewhere can manage a Sarasota cleanout without moving in for a month.",
    published: "2026-10-19",
    updated: "2026-10-19",
    readingMinutes: 7,
    intro: [
      "Many people responsible for a Sarasota home live hundreds or thousands of miles away. Seasonal residents, retirees who moved south, and parents whose children settled elsewhere all leave houses that need clearing by someone who can't easily be there.",
      "With some planning, most of a cleanout can be managed remotely. This guide covers what to set up before the work starts and how to stay in control from a distance.",
    ],
    sections: [
      {
        heading: "Sort out authority and paperwork first",
        paragraphs: [
          "Confirm who has legal authority to make decisions about the house and its contents. If the estate is in probate, or you're unsure, talk to a Florida probate attorney before anything leaves the house. Having one person with authority, and one point of contact for any company you hire, keeps decisions clear.",
        ],
        links: [{ label: "Do you need probate before clearing a house in Florida?", href: "/resources/probate-before-clearing-a-house-florida" }],
      },
      {
        heading: "Arrange access you can control",
        checklist: [
          "Re-key the locks and decide who holds keys",
          "Use a lockbox, a trusted neighbor, or the listing agent for access",
          "Collect gate cards, garage remotes, and any community access codes",
          "Tell the condo or homeowners' association who will be working at the property and when",
        ],
      },
      {
        heading: "Protect a closed-up Florida house",
        paragraphs: [
          "An empty house in Florida needs a few precautions. Keep the air conditioning running to control humidity, have someone check the house regularly, and tell the insurer it's vacant. During hurricane season, from June through November, know who will secure outdoor furniture and close shutters if a storm is forecast.",
        ],
      },
      {
        heading: "Choose keepsakes before the cleanout",
        paragraphs: [
          "If you can make one trip, use it to walk the house, choose keepsakes, and agree on a written keep list. If you can't travel, a video walkthrough lets family members point out what they want. Items can then be set aside and packed for shipping or collection.",
        ],
      },
      {
        heading: "Agree on updates before work starts",
        checklist: [
          "Who receives updates, and how: email, text, or a shared folder",
          "Which milestones need photos: keepsakes set aside, house cleared, cleaning done",
          "What needs your approval before it happens, such as discarding papers",
          "How donation receipts and records will be shared for the estate",
        ],
      },
      {
        heading: "Plan the handoff",
        paragraphs: [
          "Decide what happens once the house is empty: listing with an agent, handing to a property manager, or closing on a sale. If cleaning and repairs are needed first, it's simpler when the same team that cleared the house carries on, so you have one contact through to the end.",
        ],
      },
    ],
    takeaway:
      "Settle authority, set up access, protect the empty house, and agree on updates in advance. With those in place, you can manage a Sarasota cleanout from anywhere.",
    services: ["inherited-home-cleanouts", "estate-cleanouts"],
  },
];

export const resourceGroups: { id: ResourceGroup; title: string; intro: string }[] = [
  {
    id: "after-a-death",
    title: "After a death: belongings and the family home",
    intro:
      "When someone dies, the first weeks are about protecting the home and the estate, not sorting every drawer. These guides explain what to handle first, how to share keepsakes fairly, what an estate cleanout involves from start to finish, and how to tell whether you need a cleanout or specialist after-death cleaning.",
  },
  {
    id: "inherited-and-probate",
    title: "Inherited homes, probate, and managing from a distance",
    intro:
      "Inheriting a house in Florida raises questions about authority, probate, and what to do with a property you may never have planned to own. Start with the step-by-step guide to clearing an inherited house, read the probate guide before anything leaves the house, and use the out-of-state guide if you're managing it from elsewhere.",
  },
  {
    id: "downsizing-and-selling",
    title: "Downsizing and getting a house ready to sell",
    intro:
      "Whether a parent is moving to a smaller home or senior living, or a house is heading to market, the work follows a similar order: decide what's going, clear what isn't, then repair and clean. These checklists break that into steps, including the humidity, storm-season, and association items that matter in Florida.",
  },
  {
    id: "costs-and-planning",
    title: "Costs and planning",
    intro:
      "Knowing what drives the cost of a cleanout makes it easier to budget and to compare quotes on the same terms. This guide covers the factors that matter most and the questions worth asking any company before you hire them.",
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
