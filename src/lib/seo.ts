import type { Metadata } from "next";
import { absoluteUrl, business } from "@/content/site";
import { ogImagePath } from "./og";

type PageMeta = {
  /** The full <title>, used as-is. 60 characters or fewer; brand only if it fits. */
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /** Key of the share image under /og/. Defaults to the site-wide image. */
  ogImage?: string;
  article?: { publishedTime: string; modifiedTime: string };
};

export function pageMetadata({ title, description, path, type = "website", ogImage = "default", article }: PageMeta): Metadata {
  const image = { url: ogImagePath(ogImage), width: 1200, height: 630, alt: title };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: absoluteUrl(path),
      siteName: business.name,
      locale: "en_US",
      images: [image],
      ...(article && type === "article" && article),
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
