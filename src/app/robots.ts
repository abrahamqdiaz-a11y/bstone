import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  // Block all crawling on preview deploys or when indexing is switched off.
  const allow = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false" && process.env.CONTEXT !== "deploy-preview";
  return {
    rules: allow ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
