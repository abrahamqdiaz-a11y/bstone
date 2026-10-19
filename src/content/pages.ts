/**
 * Last real content edit for pages that aren't driven by a content file.
 * Update the date only when the page's own content changes; the sitemap uses
 * these as lastmod, so never set them to the build date.
 */
export const pageUpdated: Record<string, string> = {
  "/": "2026-10-19",
  "/services": "2026-10-19",
  "/who-we-help": "2026-10-19",
  "/resources": "2026-10-19",
  "/service-areas": "2026-10-19",
  "/about": "2026-10-19",
  "/contact": "2026-10-19",
  "/privacy": "2026-10-15",
};
