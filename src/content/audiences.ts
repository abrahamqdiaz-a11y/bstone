import type { Audience } from "./types";

export const audiences: Audience[] = [
  {
    slug: "families-and-executors",
    navLabel: "Families & Executors",
    title: "Help for Families and Executors Settling a Loved One's Home",
    metaTitle: "Help for Families & Estate Executors",
    metaDescription:
      "Practical help for executors, trustees, and families responsible for a loved one's home: sorting, donations, cleanouts, and preparing the house to sell.",
    eyebrow: "Who We Help",
    lead: "Being responsible for a loved one's home is a job most people take on while they're grieving, working, and handling everything else an estate asks of them. We take on the physical work so you can focus on the decisions only you can make.",
    summary:
      "For executors, trustees, and family members responsible for clearing and preparing a loved one's home.",
    concerns: [
      {
        title: "\"I don't know where to start.\"",
        body: "We'll walk through the house with you—in person or by video—and lay out the work in order, so the first step is obvious.",
      },
      {
        title: "\"I'm afraid something important will be thrown out.\"",
        body: "We agree on a keep list before anything leaves the house, and set aside photos, documents, and anything you've flagged for your review.",
      },
      {
        title: "\"I live too far away to do this myself.\"",
        body: "Much of the work can happen without you on site, with updates at milestones you choose.",
      },
      {
        title: "\"My siblings and I need to agree.\"",
        body: "One point of contact and clear updates make it easier for everyone to stay on the same page.",
      },
    ],
    sections: [
      {
        heading: "Your role, and ours",
        paragraphs: [
          "As executor or personal representative, you decide what happens to the estate's property, often with guidance from an attorney. Our role is to carry out those decisions: sorting, packing family items, arranging donations, clearing the rest, and preparing the house for its next step.",
          "We don't give legal, tax, or valuation advice. When those questions come up, we'll pause and let you check with the right professional.",
        ],
      },
      {
        heading: "A typical path",
        bullets: [
          "Secure the home and gather important documents",
          "Let family members choose keepsakes",
          "Arrange appraisal or sale of valuable items, if needed",
          "Clear, donate, and remove the remaining contents",
          "Clean and make minor repairs before listing",
        ],
      },
    ],
    services: ["estate-cleanouts", "inherited-home-cleanouts", "estate-transitions"],
    resources: [
      "estate-cleanout-checklist",
      "what-to-do-with-belongings-after-a-death",
      "how-to-clean-out-an-inherited-house",
    ],
    faqs: [
      {
        q: "When should we start clearing the house?",
        a: "Once the person with legal authority over the estate has approved it and the family has had a chance to choose keepsakes. If the estate is in probate, confirm the timing with the estate's attorney first.",
      },
    ],
  },
  {
    slug: "seniors-and-families",
    navLabel: "Seniors & Adult Children",
    title: "Support for Older Adults and Their Families Through a Move",
    metaTitle: "Downsizing Help for Seniors & Families",
    metaDescription:
      "Downsizing help for older adults and adult children: sorting a long-time home, planning for a smaller space or senior living, and handling what stays behind.",
    eyebrow: "Who We Help",
    lead: "Whether you're planning your own move or helping a parent, leaving a long-time home is a big change. We help make the practical side manageable, with patience and respect for the person whose home it is.",
    summary: "For older adults planning a move, and the adult children helping them.",
    concerns: [
      {
        title: "\"There's a lifetime of things here.\"",
        body: "We go room by room at a comfortable pace, starting with the easier spaces and working toward the harder decisions.",
      },
      {
        title: "\"The new place is so much smaller.\"",
        body: "Planning around the new floor plan turns an overwhelming question—what do I keep?—into a practical one: what fits?",
      },
      {
        title: "\"I want to help, but I can't be there every day.\"",
        body: "We can handle the day-to-day work and keep you informed, while your parent stays in charge of their decisions.",
      },
      {
        title: "\"What happens to the house afterward?\"",
        body: "When the move is done, we can clear what's left and prepare the home to sell.",
      },
    ],
    sections: [
      {
        heading: "For adult children",
        paragraphs: [
          "You may be the one making the calls, but your parent is the one making the move. We'll keep you informed and involved while making sure they have a real voice in what happens to their belongings. Sometimes having a neutral person in the room makes the hard conversations easier for everyone.",
        ],
      },
      {
        heading: "For those planning their own move",
        paragraphs: [
          "Planning ahead gives you more control over where your things go—to family, to friends, to organizations that will use them. If you're thinking about a move in the next year or two, starting now makes the eventual move far less stressful.",
        ],
      },
    ],
    services: ["senior-downsizing", "estate-transitions", "home-cleanouts"],
    resources: ["senior-downsizing-checklist"],
    faqs: [
      {
        q: "How far ahead should we start?",
        a: "Earlier is easier. A few months before a move gives time for unhurried decisions and for family to claim items. That said, we also help with moves on short notice—tell us the date and we'll tell you what's realistic.",
      },
    ],
  },
  {
    slug: "real-estate-agents",
    navLabel: "Real Estate Agents",
    title: "A Prep Partner for Real Estate Agents and Their Sellers",
    metaTitle: "Listing Prep Partner for Real Estate Agents",
    metaDescription:
      "For real estate agents with listings that need cleanouts, cleaning, or pre-market repairs. One call to get a property cleared, cleaned, and ready for photos.",
    eyebrow: "Who We Help",
    lead: "Some listings need more than staging. When a house is full of belongings, needs a deep clean, or has a punch list of small repairs, we can take on the prep work so you can focus on pricing, marketing, and your client.",
    summary: "For agents whose listings need clearing, cleaning, or repairs before photos.",
    concerns: [
      {
        title: "Estate and inherited listings",
        body: "Heirs who live far away often need someone local to manage the house. We can coordinate directly with you and keep your client updated.",
      },
      {
        title: "Sellers who are overwhelmed",
        body: "When a seller can't face the cleanout, the listing stalls. Taking that work off their plate keeps the timeline moving.",
      },
      {
        title: "Punch lists before photos",
        body: "Clearing, cleaning, and small repairs planned backward from your photo date.",
      },
      {
        title: "One call instead of three",
        body: "Rather than referring separate haulers, cleaners, and handymen, refer one team for the prep work.",
      },
    ],
    sections: [
      {
        heading: "How we work with agents",
        paragraphs: [
          "Your client remains our client. With their permission, we'll coordinate access and scheduling with you, work from your punch list, and send progress updates to both of you. We stay in our lane: no pricing advice, no staging, no interference with your relationship.",
        ],
      },
      {
        heading: "Referring a client",
        paragraphs: [
          "The easiest way to refer a client is to send us the property address, your target listing date, and a short description of what the house needs. We'll reach out to your client directly to scope the work.",
        ],
      },
    ],
    services: ["pre-listing-home-preparation", "inherited-home-cleanouts", "handyman-home-projects"],
    resources: ["preparing-a-house-for-sale-checklist", "how-to-clean-out-an-inherited-house"],
    faqs: [
      {
        q: "Can you work around a fixed listing date?",
        a: "Tell us the date when you first reach out. We'll review the property and let you know honestly whether the scope fits the timeline, and what to prioritize if it doesn't.",
      },
    ],
  },
];

export function getAudience(slug: string) {
  return audiences.find((a) => a.slug === slug);
}
