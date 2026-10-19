# Launch Dependencies & Items Requiring Verification

Nothing below is published as fact on the site today. Each item is either hidden until provided, or written as approach rather than claim. Tick each item off with the owner before launch.

## A. Business facts — `src/content/site.ts` (hidden until filled)

- [ ] Registered legal entity name (`legalName`)
- [ ] Business phone (`phoneDisplay` + `phoneE164`). **Every** call button, the header number, the mobile "Call" button and schema `telephone` appear automatically once set.
- [ ] Public email (`email`)
- [ ] Street address. Publish only if the business receives visitors there; otherwise leave blank and use a service-area Google Business Profile.
- [ ] Hours (`hours`)
- [ ] Ownership statement (e.g., "Locally owned and operated"). Only if accurate. Do **not** reuse Heritage's "family-owned" claim unless it is true of Briarstone.
- [ ] Washington L&I contractor registration. Confirm whether the planned repair/handyman work requires registration in Washington, and add the number if so.
- [ ] Profile URLs for `sameAs` (Google Business Profile, Yelp, Facebook, Nextdoor)

## B. Service area

- [ ] Confirm the working region: copy currently says "**the Greater Seattle area**" (`serviceRegion`).
- [ ] Confirm the list of served cities (`confirmedServiceCities`). Candidate research markets were Woodinville, Bellevue, Redmond, Kirkland, Bothell and Greater Seattle; none are confirmed. Once set, cities appear on the contact page and in schema `areaServed`.
- [ ] Decide whether any city merits a genuinely local landing page (see STRATEGY §4).

## C. Services: in-house vs. coordinated

The copy assumes Briarstone **performs** sorting, removal/hauling, donation drop-off, deep cleaning and minor repairs, and **coordinates** specialists for anything else. Confirm each:

| Capability | Assumed | Confirm |
|---|---|---|
| Sorting & packing belongings | In-house | [ ] |
| Hauling & disposal (truck, dump runs) | In-house | [ ] |
| Donation drop-off to local charities | In-house | [ ] |
| Selling items of value (estate sale, consignment) | **Not claimed.** Only "decide what to sell" guidance | [ ] |
| Deep cleaning | In-house | [ ] |
| Minor repairs, paint, fixtures | In-house | [ ] |
| Moving/transport for senior moves | Copy says "depends on the project" | [ ] |
| Rental property / tenant-abandoned-property cleanouts | Section on Home Cleanouts page | [ ] |
| Assisted living apartment move-outs | Section on Senior Downsizing page | [ ] |
| Probate property work | Section on Estate Cleanouts page | [ ] |
| Remote work for out-of-area heirs (photo/video updates, lockbox access) | Described on Inherited Home page | [ ] |

## D. Process statements to confirm (`src/content/home.ts`, service pages)

- [ ] How estimates happen (photos, video call, on-site walkthrough)
- [ ] Scope "agreed in writing before work begins" (estate cleanouts page)
- [ ] "Your plan will spell out who does what" (estate transitions page)
- [ ] Progress updates "at milestones you choose", "photo updates"
- [ ] Hazardous items: confirm what Briarstone will/won't remove
- [ ] Brand story on /about (the meaning of "briar" and "stone") was written for the brand. Confirm the owners are comfortable with it.

## E. Assets

- [ ] Logo approval (current mark: briar vine & roofline badge in `src/components/ui/Logo.tsx`, `public/logo.svg`, `src/app/icon.svg`, `src/app/opengraph-image.tsx`).
- [ ] Original project photography for 8 slots in `src/content/images.ts` (hero, about, trust, problem, 4 service groups). Recommended: real Briarstone crews at work (no faces without releases), cleared rooms, PNW exteriors.
- [ ] Before/after project examples → `src/content/proof.ts` (`projectExamples`), with client permission.
- [ ] Testimonials → `src/content/proof.ts` (`testimonials`), verbatim with written permission. The section stays hidden while the list is empty.

## F. Legal & compliance

- [ ] Have the privacy policy (`/privacy`) reviewed.
- [ ] Have resources content (probate, firearms, tenant property, take-back programs) reviewed for Washington accuracy. Each guide carries a "not legal advice" disclaimer.
- [ ] Insurance / bonding. **Not claimed anywhere.** Add to `site.ts`/trust section only once verified, with carrier details on request.
- [ ] Any pricing, guarantees, response-time promises or years in business. **None claimed.**

## G. Technical launch

- [ ] Configure at least one lead delivery path (`LEAD_WEBHOOK_URL` and/or `RESEND_*`). **Production rejects submissions without one**, so leads are never silently dropped.
- [ ] Send a real test inquiry from the production URL and confirm receipt.
- [ ] Optional: Cloudflare Turnstile keys
- [ ] Optional: GTM container with GA4 + conversion events (`inquiry_submitted`, `phone_click`, `cta_click`, `service_cta_click`, `form_start`, `form_validation_error`)
- [ ] Point DNS for briarstoneprep.com to Netlify; enforce HTTPS; redirect www ↔ apex
- [ ] Submit `https://briarstoneprep.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools
- [ ] Create or claim the **Google Business Profile** (the single biggest local-ranking lever), with categories matching the services and the same NAP as `site.ts`
