import type { MetadataRoute } from "next";
import { audiences } from "@/content/audiences";
import { pageUpdated } from "@/content/pages";
import { resources } from "@/content/resources";
import { publishedServiceAreaPages } from "@/content/serviceAreas";
import { services } from "@/content/services";
import { absoluteUrl } from "@/content/site";

/**
 * lastmod comes from each page's last real content edit (content files and
 * src/content/pages.ts), never the build time. No priority: Google ignores it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, lastModified = pageUpdated[path]) => {
    if (!lastModified) throw new Error(`sitemap: no last-edit date for ${path}`);
    return { url: absoluteUrl(path), lastModified };
  };
  return [
    page("/"),
    page("/services"),
    ...services.map((s) => page(`/services/${s.slug}`, s.updated)),
    page("/who-we-help"),
    ...audiences.map((a) => page(`/who-we-help/${a.slug}`, a.updated)),
    page("/service-areas"),
    ...publishedServiceAreaPages.map((p) => page(`/service-areas/${p.slug}`, p.updated)),
    page("/resources"),
    ...resources.map((r) => page(`/resources/${r.slug}`, r.updated)),
    page("/about"),
    page("/contact"),
    page("/privacy"),
  ];
}
