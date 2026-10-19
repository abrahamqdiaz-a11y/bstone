# Briarstone Prep — briarstoneprep.com

Marketing and lead-generation site for **Briarstone Prep**, an estate cleanout, downsizing and home preparation company serving Sarasota and Manatee counties, Florida: estate cleanouts, inherited homes, senior downsizing, pre-listing preparation, home and rental cleanouts and handyman projects.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Zod · Netlify
- **Pages:** 29 statically generated pages, build-time share images, and a server action for inquiries
- **Docs:** [`docs/STRATEGY.md`](docs/STRATEGY.md) (audit, competitors, positioning) · [`docs/KEYWORD_MAP.md`](docs/KEYWORD_MAP.md) · [`docs/LAUNCH_CHECKLIST.md`](docs/LAUNCH_CHECKLIST.md) (**read before launch**)

## Quick start

```bash
npm install
cp .env.example .env.local   # optional in development
npm run dev                  # http://localhost:3000
```

In development, inquiries are accepted and a redacted line is logged if no delivery adapter is configured.

## Checks

```bash
npm run lint        # ESLint (next/core-web-vitals + TypeScript)
npm run typecheck   # next typegen && tsc
npm test            # Vitest: validation, spam checks, delivery adapters
npm run build
npm run seo:check   # crawls the build: titles, descriptions, H1, canonical, og:image, place names, banned regions, footer headings, sitemap lastmod, duplicate FAQs, orphan pages
npm run test:e2e    # Playwright + axe on the production build (see below)
```

`test:e2e` starts `next start` and a mock CRM webhook. It checks every page for one H1, unique title/description, canonical URL and WCAG 2.2 AA (axe). It also checks internal links, sitemap/robots, structured data, form errors, a full successful submission (including HMAC signature), honeypot rejection, the mobile menu and horizontal overflow at 360/768/1280px. If Playwright can't download browsers, point it at an existing Chromium: `PW_CHROMIUM_PATH=/path/to/chrome npm run test:e2e`.

## Where things live

| What | Where |
|---|---|
| Business facts (phone, email, hours, profiles) and the `serviceArea` list: **all VERIFY** | `src/content/site.ts` |
| City pages (published only when `ready`) | `src/content/serviceAreas.ts` |
| Sitemap dates for non-content pages | `src/content/pages.ts` |
| Service pages copy | `src/content/services.ts` |
| Audience pages copy | `src/content/audiences.ts` |
| Guides / checklists | `src/content/resources.ts` |
| Homepage sections, FAQs, process | `src/content/home.ts` |
| Free stock photos (illustration fallback) | `src/content/images.ts` · [`docs/PHOTOGRAPHY.md`](docs/PHOTOGRAPHY.md) |
| Reviews, before/after (hidden while empty) | `src/content/proof.ts`, `src/components/proof/Reviews.tsx` |
| Inquiry validation / spam / delivery | `src/lib/inquiry/*` |
| Metadata & JSON-LD helpers | `src/lib/seo.ts`, `src/lib/schema.ts` |
| Analytics event helper | `src/lib/analytics.ts`, `src/components/layout/Analytics.tsx` |

Anything left blank in `site.ts` is omitted from the page and from structured data. For example, no phone buttons render until a verified number is entered.

## Lead delivery

The form posts to a Server Action (`src/lib/inquiry/action.ts`) that:

1. Drops bots quietly: a hidden honeypot field, a minimum fill time, and optional Cloudflare Turnstile.
2. Validates all fields server-side with Zod and returns accessible, per-field errors.
3. Accepts up to 3 photos (JPEG/PNG/WebP/HEIC, 4 MB total).
4. Delivers to every configured adapter and succeeds if at least one accepts:
   - **Webhook** (`LEAD_WEBHOOK_URL`): JSON payload; with `LEAD_WEBHOOK_SECRET`, signed as `X-Briarstone-Signature: sha256=<HMAC of raw body>`. Works with Zapier/Make/HubSpot/custom CRMs. Photos are base64 in `photos[]`.
   - **Email via Resend** (`RESEND_API_KEY`, `LEAD_EMAIL_TO`, `LEAD_EMAIL_FROM`): plain-text notification with photos attached and reply-to set to the visitor.
5. In production with no adapter configured, shows an error instead of discarding the lead.

Secrets are read only on the server. Logs never contain visitor details. Nothing is stored by the site itself.

## Analytics

Set `NEXT_PUBLIC_GTM_ID` to enable a consent banner. GTM loads only after the visitor accepts. Events are pushed to `dataLayer`: `phone_click`, `email_click`, `cta_click`, `service_cta_click`, `form_start`, `form_submit_attempt`, `form_validation_error`, `inquiry_submitted`. Event params never include form contents. Mark `inquiry_submitted` and `phone_click` as conversions in GA4.

## SEO implementation

- Unique title (≤60 chars), description, H1 and canonical on every page (`pageMetadata()`), each naming the service and Sarasota. `npm run seo:check` enforces this on the build.
- Share images: one 1200×630 PNG per page, generated at build time by `src/app/og/[image]/route.tsx` and styled per section.
- `sitemap.xml` uses each page's last real edit date (`updated` in the content files, `src/content/pages.ts`); no build-time dates, no priority.
- Indexing: every Netlify context except production gets `noindex` meta, an `X-Robots-Tag: noindex` header and a disallow-all robots.txt (`src/lib/indexing.ts`). `netlify.toml` 301s www and HTTP to `https://briarstoneprep.com`.
- JSON-LD: `HomeAndConstructionBusiness` with `areaServed` cities and counties from `serviceArea`, plus telephone, email, openingHours and sameAs once filled in; no street address unless `hasPublicStorefront`. `WebSite`, `BreadcrumbList` on every inner page, `Service` on service pages, `Article` (with image and published/modified dates) on guides. No rating or review markup.
- **No `FAQPage` schema** on purpose. Google restricts FAQ rich results to authoritative government and health sites, so the markup wouldn't be eligible. FAQs stay as visible, crawlable HTML.

## Deploying to Netlify

1. Create a Netlify site from this repository. `netlify.toml` sets `npm run build`, Node 22 and the Next.js runtime plugin.
2. Add environment variables from `.env.example` (at minimum one lead delivery path).
3. Deploy to a Netlify subdomain first and run through `docs/LAUNCH_CHECKLIST.md`.
4. Add the custom domain `briarstoneprep.com` and enable HTTPS. Only then submit the sitemap to Search Console.

Fonts (Newsreader and Inter, SIL OFL) are self-hosted in `src/fonts/`, so builds don't depend on Google Fonts.
