# Launch Dependencies & Items Requiring Verification

Nothing below is published as fact on the site today. Each item is either hidden until provided, or written as approach rather than claim. Tick each item off with the owner before launch. Search the code for `VERIFY` to find every placeholder.

## A. Business facts — `src/content/site.ts` (hidden until filled)

Name, address and phone must match the Google Business Profile exactly.

- [ ] Registered legal entity name (`legalName`)
- [ ] Business phone (`phoneDisplay` + `phoneE164`). The header number, footer link, contact-page number, every "Call" button, the mobile call button and schema `telephone` all appear automatically once set.
- [ ] Public email (`email`)
- [ ] Public storefront? (`hasPublicStorefront`). Leave `false` for a service-area business: no street address is shown or sent in schema, and `areaServed` carries the location. Only if `true`, fill `address`.
- [ ] Hours (`hours`) and the matching schema strings (`openingHours`, e.g. `["Mo-Fr 08:00-17:00"]`)
- [ ] Ownership statement (e.g., "Locally owned and operated"). Only if accurate.
- [ ] Contractor licence (`contractorLicense`). Confirm with the owner whether the planned repair/handyman work requires a Florida or county licence, and add the number if so.
- [ ] Profile URLs (`profiles`): Google Business Profile, Facebook, Yelp. These become schema `sameAs`.
- [ ] Google review link (`googleReviewUrl`), once the Business Profile exists. The reviews section links to it.

## B. Service area — `serviceArea` in `src/content/site.ts`

- [ ] Confirm the counties: Sarasota County and Manatee County.
- [ ] Confirm each city: Sarasota, Bradenton, Venice, Lakewood Ranch, Longboat Key (each `verified: false` today). They appear on the contact page, the service-areas page and in schema `areaServed`.
- [ ] City pages (`src/content/serviceAreas.ts`): only Sarasota is published. Bradenton, Venice, Lakewood Ranch and Longboat Key pages need the client to confirm the city **and** supply local details before `ready: true`. Never copy one page and swap the city name.
- [ ] For each city page, including Sarasota: the donation organizations Briarstone actually uses, condo and HOA move-out rules the team has worked with, and gated-community access arrangements. The Sarasota page currently names no partners and quotes no rules.
- [ ] Sarasota County household hazardous waste drop-off: confirm current locations before naming any on the site.

## C. Services: in-house vs. coordinated

The copy assumes Briarstone **performs** sorting, removal/hauling, donation drop-off, deep cleaning and minor repairs, and **coordinates** specialists for anything else. Confirm each:

| Capability | Assumed | Confirm |
|---|---|---|
| Sorting & packing belongings | In-house | [ ] |
| Hauling & disposal | In-house | [ ] |
| Donation drop-off to local organizations | In-house | [ ] |
| Selling items of value (estate sale, consignment) | **Not offered.** Copy says "we don't run estate sales" | [ ] |
| Deep cleaning | In-house | [ ] |
| Minor repairs, paint, fixtures, re-screening a few lanai/pool-cage panels | In-house | [ ] |
| Moving/transport for senior moves | Copy says "depends on the project" | [ ] |
| Rental turnover and abandoned-property cleanouts | `/who-we-help/landlords-and-property-managers` | [ ] |
| Assisted living apartment move-outs | Senior downsizing page | [ ] |
| Probate property work, coordinating with attorneys | Estate cleanouts page | [ ] |
| Remote work for out-of-state heirs (photo/video updates, lockbox access) | Inherited home page, out-of-state guide | [ ] |
| Pre-listing Florida items (mildew checks, lanai/screen cleaning, salt/rust wash-down) | Pre-listing page | [ ] |
| Rescheduling when a storm is forecast | Sarasota page | [ ] |

## D. Process statements to confirm (`src/content/home.ts`, service pages)

- [ ] How estimates happen (photos, video call, on-site walkthrough)
- [ ] Scope "agreed in writing before work begins" (estate cleanouts page)
- [ ] "Your plan will spell out who does what" (estate transitions page)
- [ ] Progress updates "at milestones you choose", photo updates, before/after room photos and donation receipts for executors
- [ ] Hazardous items: confirm what Briarstone will/won't remove
- [ ] Brand story on /about (the meaning of "briar" and "stone"). Confirm the owners are comfortable with it.

## E. Assets

- [ ] Logo approval (current mark: briar vine & roofline badge in `src/components/ui/Logo.tsx`, `public/logo.svg`, `src/app/icon.svg`, and the share images in `src/app/og/[image]/route.tsx`).
- [ ] **Stock photo alt text.** The Unsplash CDN was unreachable from the build environment, so the alt text in `src/content/images.ts` has not been checked against the actual images. Inspect each photo and correct its alt text.
- [ ] **Real job photos.** Slots `trust`, `problem` and `about` in `src/content/images.ts` are reserved for real Briarstone photos and show the illustration until filled. Replace stock service photos as real ones become available. Save to `public/photos/` (no faces without releases).
- [ ] Before/after project examples → `src/content/proof.ts` (`projectExamples`), with client permission.
- [ ] Reviews → `src/content/proof.ts` (`reviews`), verbatim with written permission. The section stays hidden while the list is empty. No rating markup is emitted.

## F. Legal & compliance

- [ ] **Attorney review:** `/resources/probate-before-clearing-a-house-florida` must be reviewed by a Florida probate attorney before launch (homestead, court appointment, simplified procedures).
- [ ] Review the other guides for Florida accuracy: firearms, a former tenant's belongings (landlords page), medication take-back, county hazardous waste.
- [ ] Have the privacy policy (`/privacy`) reviewed.
- [ ] Insurance / bonding. **Not claimed anywhere.** Add only once verified.
- [ ] Pricing: `/resources/estate-cleanout-cost-sarasota` explains cost drivers only. Add figures only if the client supplies them.
- [ ] Guarantees, response-time promises, years in business: **none claimed.**

## G. Technical launch

- [ ] Configure at least one lead delivery path (`LEAD_WEBHOOK_URL` and/or `RESEND_*`). **Production rejects submissions without one.**
- [ ] Send a real test inquiry from the production URL and confirm receipt.
- [ ] Optional: Cloudflare Turnstile keys; GTM container with GA4 + conversion events.
- [ ] Attach `briarstoneprep.com` (and `www`) to the Netlify site and provision HTTPS. `netlify.toml` already 301s www and HTTP to `https://briarstoneprep.com`.
- [ ] Indexing: keep `NEXT_PUBLIC_ALLOW_INDEXING=false` on the Netlify production context until the domain is attached and sections A, B and F are done; then set it to `true` (or remove it) and redeploy. Non-production contexts are always noindexed.
- [ ] Run `npm run build && npm run seo:check` before every deploy.
- [ ] Submit `https://briarstoneprep.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- [ ] Create or claim the **Google Business Profile** as a service-area business covering Sarasota and Manatee counties, with categories matching the services and the same name and phone as `site.ts`.
