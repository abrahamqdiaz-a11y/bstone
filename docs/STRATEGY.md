# Briarstone Prep — Audit, Competitive Research & Positioning

_Prepared October 2026. Research inputs: preliminary Semrush keyword data supplied by the client, web search of the Greater Seattle market, and the Heritage Estate Prep site used as a structural reference._

## 1. Audit of current assets

| Asset | Finding | Action |
|---|---|---|
| briarstoneprep.com | Domain did not resolve (no DNS / no live site) at audit time. No existing copy, photos, logo, or contact details to reuse. | Built an original brand. All business facts are placeholders in `src/content/site.ts` and hidden until filled. |
| Brand identity | None existed. | Created: name treatment, "river stone + briar leaf" mark, palette, typography, voice (see §5). |
| Photography | None available. No stock was used, since licensing couldn't be confirmed. | Original SVG illustrations fill every photo slot (`src/content/images.ts`) until real project photos are supplied. |
| Heritage Estate Prep (reference business) | Facts in the brief (Woodinville, 206-408-3900, family-owned, three offer areas: Home Projects, Estate Transitions, Market-Ready Homes; removal/donation/sale, deep cleaning, pre-market handyman work) belong to **another company**. Its site could not be fetched from the build environment (network policy), and the phone number has no public footprint in search results. | Used only as a reference for **service mix and offer grouping**. None of its facts, phone number, location, or ownership claims appear on the Briarstone site. |

> **Network limitation:** this build environment's network policy blocked direct page fetches (briarstoneprep.com, caringtransitions.com, junkluggers.com and others returned a proxy 403). The competitor analysis below draws on search-engine results and snippets, not full page crawls. Re-run a hands-on review of the top 5 competitor sites before launch.

## 2. Competitive landscape (Greater Seattle / Eastside)

The market splits into **specialists that each own one slice** of a home transition:

| Category | Examples found | What they do well | Gaps Briarstone can own |
|---|---|---|---|
| Franchise junk removal | The Junkluggers (Greater Seattle; North Puget Sound), LoadUp (city pages across WA), Ready Set Remove (Everett) | Strong local SEO via city pages, "donation-first" messaging, online booking/upfront pricing (LoadUp) | Hauling only. No cleaning or repairs. Content is mass-produced city pages (LoadUp's near-identical pages for Kingston, Burien, Lochsloy). Transactional, not relational. |
| Senior move management / estate sale franchises | Caring Transitions of Seattle (lists Bothell, Redmond, Kirkland), NASMM member directory | Credentialing (NASMM, SMM-C), empathy-led messaging, estate sale + downsizing bundle | Usually **coordinate** rather than perform physical work; little emphasis on getting the house market-ready afterward. |
| Estate sale / liquidation companies | Grasons of Bellevue, Girlfriends Estate Sales (Seattle), Rainier New Era and Family Nest (Woodinville), Rainier Estates | Expertise in valuing and selling contents | Often leave unsold items, cleaning and repairs to the family; commission model doesn't suit low-value estates. |
| Agent-side prep programs | Compass Concierge (fronts cost of prep), brokers offering hands-on prep (e.g., a Windermere Bellevue broker with a moving truck) | Financing / convenience for sellers | Tied to a single brokerage; the agent still coordinates the vendors. |
| Cleaners and handymen | Listing-cleaning services (e.g., Three Sisters, Bellevue), general handymen | Specialized quality | Siloed; scheduling depends on the cleanout being finished. |

**Patterns in competitor UX**
- CTAs are almost always "Book now / Get a quote", built for transactional hauling, not for a multi-week, emotionally loaded project.
- Trust signals lean on franchise scale ("nationwide"), review counts and "insured" claims. Local, independent operators rarely explain *how* the work is sequenced.
- Very few pages speak directly to **executors**, **out-of-state heirs**, or **listing agents** as distinct audiences.
- Educational content is mostly thin blog posts written to capture keywords; useful checklists are rare.

## 3. Positioning

**Category:** estate transitions & home preparation, not junk removal, cleaning, or senior care.

**Positioning statement:** For families, executors, older adults and agents facing a home transition, Briarstone Prep is the one accountable team that clears, cleans and prepares the property, so no one has to manage five companies during a hard season.

**Promise line:** "One trusted partner for everything it takes to transition a home." The site phrases this carefully as *one plan, one point of contact*, and states that some work may be coordinated with specialists, with the plan saying who does what.

**Differentiators (all framed as approach, not unverified operational guarantees):**
1. Integration: contents → donations → cleaning → repairs in one sequenced plan.
2. Project ownership: a single point of contact who owns the sequence.
3. Remote-friendly: built for out-of-area heirs (photo updates, coordination with agents and attorneys).
4. Honest scope: explicit "what we don't do" (legal, tax, appraisal, licensed trades, staging).
5. Respect: keep-lists, "review later" boxes, decisions stay with the family or the person moving.

## 4. Information architecture decisions

- **Kept all 7 requested service pages**, each mapped to a distinct intent (see `KEYWORD_MAP.md`):
  - *Estate cleanouts* = the **belongings** after a death (executor, probate, keepsakes).
  - *Inherited home cleanouts* = the **property** an heir now owns (sell/rent/keep, remote heirs, vacant-home cleaning).
  - *Home cleanouts* = **living homeowners** clearing their own space (garage, whole-house, rental).
  - *Estate transitions* = the **coordinated full project** (umbrella offer), cross-linked to the three cleanout pages.
- **Consolidated rather than published** (no confirmed service yet, and too thin as stand-alone pages):
  - `/services/probate-property-cleanouts` → a section of *Estate cleanouts*.
  - `/services/rental-property-cleanouts` → a section of *Home cleanouts*.
  - `/services/assisted-living-move-outs` → a section of *Senior downsizing*.
  - Promote any of these to its own page only once the service is confirmed **and** there's enough unique content (process, pricing model, legal notes, photos).
- **No city landing pages.** No service cities have been verified. When cities are confirmed, add pages only where there is genuinely local content (e.g., county hazardous-waste rules, local donation-acceptance quirks, real local projects). Don't clone templates.
- Added `/who-we-help` index (breadcrumb target), `/privacy` (required by the form), and a 404.

## 5. Brand system

- **Name treatment:** "Briarstone" in an editorial serif with "PREP" in tracked small caps; mark = a river stone with a briar leaf (steady ground + the tangle that gets cleared).
- **Palette:** Warm ivory #F7F5F0, Deep forest #243D35, Slate #39464C, Warm taupe #D8CEC0, Muted brass #B49A70 (decorative only), plus accessible derivatives brass-deep #7A6443 (5.2:1 on ivory) and brass-light #CDB98F (6.1:1 on forest).
- **Type:** Newsreader (editorial serif, headings) + Inter (body). Both self-hosted under OFL.
- **Voice:** calm, specific, plain-spoken. Acknowledges hard moments without dwelling on grief; avoids fear, urgency gimmicks and superlatives.
