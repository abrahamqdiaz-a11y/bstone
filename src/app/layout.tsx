import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/layout/Analytics";
import { JsonLd } from "@/components/layout/JsonLd";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { business, hasPhone, serviceArea, siteUrl, telHref } from "@/content/site";
import { allowIndexing } from "@/lib/indexing";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { inter, newsreader } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${business.name} | Estate Cleanouts in ${serviceArea.short}, ${serviceArea.stateCode}`,
  description: `Estate cleanouts, senior downsizing, and pre-listing home preparation in ${serviceArea.region}, ${serviceArea.state}.`,
  applicationName: business.name,
  formatDetection: { telephone: false },
  // Non-production Netlify deploys and NEXT_PUBLIC_ALLOW_INDEXING=false get
  // noindex here and an X-Robots-Tag header from next.config.ts.
  robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-ivory"
        >
          Skip to main content
        </a>
        <SiteHeader phone={hasPhone ? { display: business.phoneDisplay, href: telHref } : null} />
        <main id="main" className="pb-20 lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
        <Analytics />
        <JsonLd data={businessSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
