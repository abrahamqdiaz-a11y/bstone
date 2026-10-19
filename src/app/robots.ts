import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";
import { allowIndexing } from "@/lib/indexing";

export default function robots(): MetadataRoute.Robots {
  // Block all crawling on non-production deploys or when indexing is switched off.
  return {
    rules: allowIndexing ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
