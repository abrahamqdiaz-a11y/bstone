import { ImageResponse } from "next/og";
import { business, serviceArea } from "@/content/site";
import { ogCards, type OgSection } from "@/lib/ogCards";

export const dynamic = "force-static";
export const dynamicParams = false;

const size = { width: 1200, height: 630 };

const palettes: Record<OgSection, { bg: string; ink: string; accent: string; bar: string }> = {
  default: { bg: "#F7F5F0", ink: "#243D35", accent: "#7A6443", bar: "#243D35" },
  services: { bg: "#243D35", ink: "#F7F5F0", accent: "#CDB98F", bar: "#B49A70" },
  audiences: { bg: "#EFEAE1", ink: "#243D35", accent: "#7A6443", bar: "#39464C" },
  guides: { bg: "#F7F5F0", ink: "#39464C", accent: "#7A6443", bar: "#B49A70" },
  areas: { bg: "#1B2F29", ink: "#F7F5F0", accent: "#CDB98F", bar: "#CDB98F" },
};

export function generateStaticParams() {
  return Object.keys(ogCards()).map((key) => ({ image: `${key}.png` }));
}

export async function GET(_req: Request, ctx: RouteContext<"/og/[image]">) {
  const { image } = await ctx.params;
  const card = ogCards()[image.replace(/\.png$/, "")];
  if (!card) return new Response("Not found", { status: 404 });
  const p = palettes[card.section];
  const titleSize = card.title.length > 60 ? 58 : card.title.length > 40 ? 66 : 76;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: p.bg,
          padding: "64px 80px",
          borderBottom: `24px solid ${p.bar}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 40 40">
            <path d="M20 3.5c8.6 0 16 5.6 16 15.3 0 10.3-7.4 17.7-16.6 17.7C10.4 36.5 4 29.8 4 20.6 4 10.4 11.3 3.5 20 3.5Z" fill={p.ink === "#F7F5F0" ? "#F7F5F0" : "#243D35"} />
            <path d="M23.4 16.1c-.4-3.6 1.6-6.4 5.2-7.3.7 3.5-1.3 6.6-5.2 7.3Z" fill="#CDB98F" />
            <path d="M18.6 22.6c-2.8-.3-4.8-2.4-4.9-5.3 2.9.1 4.9 2.2 4.9 5.3Z" fill="#B49A70" />
          </svg>
          <div style={{ fontSize: 40, color: p.ink, fontFamily: "serif" }}>{business.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 5, color: p.accent, textTransform: "uppercase" }}>{card.eyebrow}</div>
          <div style={{ fontSize: titleSize, color: p.ink, lineHeight: 1.08, marginTop: 18, fontFamily: "serif" }}>{card.title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: p.accent }}>{`${serviceArea.region}, ${serviceArea.state}`}</div>
      </div>
    ),
    size,
  );
}
