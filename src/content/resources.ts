import type { Resource } from "./types";

/**
 * Educational guides. These target informational searches and link to the
 * relevant service pages. Review annually and update `updated` when content
 * changes. Nothing here is legal or tax advice.
 */
export const resources: Resource[] = [
  {
    slug: "how-to-clean-out-an-inherited-house",
    title: "How to Clean Out an Inherited House, Step by Step",
    metaTitle: "How to Clean Out an Inherited House",
    metaDescription:
      "A step-by-step guide to cleaning out an inherited house: securing it, finding documents, dividing keepsakes, donating, and preparing it to sell or rent.",
    summary:
      "A practical order of operations for heirs—from securing the house to getting it ready to sell or rent.",
    updated: "2026-10-15",
    readingMinutes: 8,
    intro: [
      "Inheriting a house often comes with a long list of decisions and very little guidance. Where do you begin? What can you throw away? What if your siblings disagree? This guide lays out a sensible order of operations, so you can move forward one step at a time.",
      "Every estate is different. If the house is part of an estate in probate, or several people share ownership, check with the estate's attorney before removing or selling anything.",
    ],
    sections: [
      {
        heading: "1. Confirm who has authority",
        paragraphs: [
          "Before anything leaves the house, make sure the person making decisions has the legal authority to do so. That's usually the executor or personal representative named in the will or appointed by the court, or the trustee if the house is held in a trust. If ownership has already passed to heirs, all owners should agree on the plan.",
        ],
      },
      {
        heading: "2. Secure the house",
        paragraphs: [
          "A vacant house needs attention right away. Change or re-key the locks, make sure doors and windows are secure, and let a trusted neighbor know the house is empty.",
        ],
        checklist: [
          "Re-key locks and collect all spare keys",
          "Notify the homeowner's insurance company that the house is vacant—coverage can change",
          "Keep utilities on so the home stays heated and dry",
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
          "Jewelry, art, collectibles, antiques, firearms, and vehicles may warrant a professional appraisal before you decide what to do with them. Firearms in particular should not be transferred or sold without checking Washington's transfer requirements—contact a licensed dealer for guidance.",
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
          "Paint, chemicals, fuel, batteries, and medications shouldn't go in the trash. Counties in the Puget Sound area run household hazardous waste programs, and Washington has a statewide medication take-back program with drop-off locations at many pharmacies.",
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
    title: "Estate Cleanout Checklist: What to Do Before, During, and After",
    metaTitle: "Estate Cleanout Checklist",
    metaDescription:
      "A printable-style estate cleanout checklist for executors and families, covering what to do before, during, and after clearing a loved one's home.",
    summary: "A clear checklist for executors and families clearing a loved one's home.",
    updated: "2026-10-15",
    readingMinutes: 6,
    intro: [
      "An estate cleanout has a lot of moving parts, and it's easy to lose track of what's been done. Use this checklist to keep the work organized, whether you're doing it yourself or working with a team.",
    ],
    sections: [
      {
        heading: "Before the cleanout",
        checklist: [
          "Confirm the executor, personal representative, or trustee has approved the work",
          "If the estate is in probate, check with the attorney about timing and distribution",
          "Secure the home and notify the insurer that it's vacant",
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
          "Walk through every room, closet, attic, crawl space, and outbuilding",
          "Deep clean the home",
          "Complete minor repairs before an agent's evaluation or listing photos",
          "Adjust utilities, insurance, and mail forwarding as needed",
          "Hand off keys and access to the agent, buyer, or tenant",
        ],
      },
    ],
    takeaway:
      "Write things down—keep lists, receipts, and dates. A simple record protects the executor and makes it easier to keep the whole family informed.",
    services: ["estate-cleanouts", "estate-transitions"],
  },
  {
    slug: "preparing-a-house-for-sale-checklist",
    title: "Preparing a House for Sale: A Room-by-Room Checklist",
    metaTitle: "Preparing a House for Sale Checklist",
    metaDescription:
      "A checklist for getting a house ready to sell: clearing, repairs, deep cleaning, and Pacific Northwest exterior items to handle before listing photos.",
    summary: "What to clear, fix, and clean before listing photos—in the order that saves time.",
    updated: "2026-10-15",
    readingMinutes: 7,
    intro: [
      "Most of what makes a house ready to sell isn't expensive: it's clearing what doesn't need to be there, fixing small things, and cleaning thoroughly. The order you do it in matters. Clear first, repair second, clean last—otherwise you'll end up doing the same work twice.",
      "Your real estate agent knows your market and should guide decisions about pricing, staging, and which improvements are worth making. Use this checklist alongside their advice.",
    ],
    sections: [
      {
        heading: "Step 1: Clear and declutter",
        checklist: [
          "Remove everything you're not moving to your next home",
          "Clear countertops, tabletops, and the tops of refrigerators",
          "Thin out closets so they look roomy",
          "Empty the garage, basement, and storage spaces enough to show their size",
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
          "Replace damaged screens and broken window hardware",
        ],
      },
      {
        heading: "Step 3: Deep clean",
        checklist: [
          "Kitchen: inside and out of appliances, cabinet fronts, and backsplash",
          "Bathrooms: grout, glass, fixtures, and exhaust fans",
          "Floors: deep clean carpet and polish hard floors",
          "Windows and window tracks, inside and out where reachable",
          "Baseboards, light switches, and doors",
        ],
      },
      {
        heading: "Pacific Northwest exterior checklist",
        paragraphs: [
          "Buyers and inspectors in our region look closely at the effects of a wet climate. Addressing these early can avoid surprises later.",
        ],
        checklist: [
          "Clear gutters and downspouts",
          "Remove moss from walkways, decks, and, where appropriate, the roof",
          "Clean or pressure wash siding, paths, and decks as suitable for the material",
          "Check crawl spaces for standing water or damp insulation",
          "Look for mildew around bathroom ceilings and windows",
          "Trim plantings away from siding and the roofline",
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
    title: "Senior Downsizing Checklist for Families",
    metaTitle: "Senior Downsizing Checklist",
    metaDescription:
      "A downsizing checklist for older adults and adult children: planning for a smaller space, sorting a long-time home, moving day, and what's left behind.",
    summary: "A step-by-step plan for older adults and the families helping them move.",
    updated: "2026-10-15",
    readingMinutes: 6,
    intro: [
      "Downsizing from a long-time home is as much an emotional process as a practical one. A plan helps: it breaks a huge job into manageable steps and keeps the person who's moving at the center of the decisions.",
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
    title: "What to Do With a Loved One's Belongings After a Death",
    metaTitle: "What to Do With Belongings After a Death",
    metaDescription:
      "A gentle, practical guide to handling a loved one's belongings after a death: what to do first, what to keep, and how to donate, sell, or dispose of the rest.",
    summary: "What to handle first, what to keep, and how to find good homes for the rest.",
    updated: "2026-10-15",
    readingMinutes: 7,
    intro: [
      "There's no right timeline for going through a loved one's belongings. Some families need to move quickly because of a lease or a sale; others have time to wait. Either way, it helps to know what has to happen first and what can wait until you're ready.",
    ],
    sections: [
      {
        heading: "What to do first",
        paragraphs: [
          "In the first days and weeks, focus on protecting the home and the estate rather than sorting belongings. Secure the property, find important documents, and avoid giving away or selling anything until the executor or personal representative has been identified and, if needed, the estate's attorney has been consulted.",
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
          "Items that can't be sold or donated should be recycled or disposed of properly. Medications can go to a take-back location, and chemicals, paint, and batteries can go to a household hazardous waste program. Shred documents with personal information once the estate no longer needs them.",
        ],
      },
    ],
    takeaway:
      "Protect the home and documents first, give yourself time on personal items, and find good homes for what you don't keep. When the volume is too much, a cleanout team can handle sorting, donations, and removal while you focus on your family.",
    services: ["estate-cleanouts", "home-cleanouts"],
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
