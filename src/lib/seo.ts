import type { Metadata } from "next";
import { absoluteUrl, business } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is instead of appending the brand. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
};

export function pageMetadata({ title, description, path, absoluteTitle, type = "website" }: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${business.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: business.name,
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
