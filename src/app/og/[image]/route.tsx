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
  // Same badge colors as Logo.tsx: green parts flip to ivory on dark cards.
  const badge = p.ink === "#F7F5F0" ? { green: "#F7F5F0", bronze: "#CDB98F" } : { green: "#1E352F", bronze: "#9A7B4F" };
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
          <svg width="84" height="84" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="44" stroke={badge.green} strokeWidth="4" />
            <path d="M26 58L58 30L86 54" stroke={badge.bronze} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M72 42V32H79V48" fill={badge.bronze} />
            <path d="M52 44h5v5h-5zM59 44h5v5h-5zM52 51h5v5h-5zM59 51h5v5h-5z" fill={badge.bronze} />
            <path d="M54 94C58 75 22 68 24 42C26 20 48 8 68 12" stroke={badge.green} strokeWidth="4" strokeLinecap="round" />
            <path d="M25 50C35 38 48 34 56 22" stroke={badge.green} strokeWidth="3" strokeLinecap="round" />
            <path
              d="M24 42C14 40 8 32 10 24C18 26 24 32 24 42ZM32 25C28 16 30 8 36 4C40 10 38 18 32 25ZM40 58C32 62 24 60 20 54C26 50 34 52 40 58ZM58 76C66 72 72 64 70 56C62 58 58 66 58 76Z"
              fill={badge.green}
            />
            <path d="M62 18C70 14 78 16 84 22C76 26 68 24 62 18Z" fill={badge.bronze} />
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
