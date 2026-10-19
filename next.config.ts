import type { NextConfig } from "next";
import { allowIndexing } from "./src/lib/indexing";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

// Deploy previews, branch deploys and NEXT_PUBLIC_ALLOW_INDEXING=false builds
// must never be indexed. See src/lib/indexing.ts.
if (!allowIndexing) securityHeaders.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    serverActions: {
      // Photo uploads are capped at 4 MB in the form; allow overhead for fields.
      bodySizeLimit: "5mb",
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
