import type { MetadataRoute } from "next";
import { audiences } from "@/content/audiences";
import { resources } from "@/content/resources";
import { services } from "@/content/services";
import { absoluteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, lastModified?: string) => ({
    url: absoluteUrl(path),
    priority,
    ...(lastModified && { lastModified }),
  });
  return [
    page("/", 1),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/who-we-help", 0.6),
    ...audiences.map((a) => page(`/who-we-help/${a.slug}`, 0.7)),
    page("/resources", 0.6),
    ...resources.map((r) => page(`/resources/${r.slug}`, 0.6, r.updated)),
    page("/about", 0.5),
    page("/contact", 0.8),
    page("/privacy", 0.2),
  ];
}
