import { ImageResponse } from "next/og";
import { business } from "@/content/site";

export const alt = `${business.name} — ${business.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F5F0",
          padding: "72px 80px",
          borderBottom: "24px solid #243D35",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="84" height="84" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="44" stroke="#1E352F" strokeWidth="4" />
            <path d="M26 58L58 30L86 54" stroke="#9A7B4F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M72 42V32H79V48" fill="#9A7B4F" />
            <path d="M52 44h5v5h-5zM59 44h5v5h-5zM52 51h5v5h-5zM59 51h5v5h-5z" fill="#9A7B4F" />
            <path d="M54 94C58 75 22 68 24 42C26 20 48 8 68 12" stroke="#1E352F" strokeWidth="4" strokeLinecap="round" />
            <path d="M25 50C35 38 48 34 56 22" stroke="#1E352F" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M24 42C14 40 8 32 10 24C18 26 24 32 24 42ZM32 25C28 16 30 8 36 4C40 10 38 18 32 25ZM40 58C32 62 24 60 20 54C26 50 34 52 40 58ZM58 76C66 72 72 64 70 56C62 58 58 66 58 76Z"
              fill="#1E352F"
            />
            <path d="M62 18C70 14 78 16 84 22C76 26 68 24 62 18Z" fill="#9A7B4F" />
          </svg>
          <div style={{ fontSize: 44, color: "#243D35", fontFamily: "serif" }}>{business.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#7A6443", textTransform: "uppercase" }}>
            {business.descriptor}
          </div>
          <div style={{ fontSize: 76, color: "#243D35", lineHeight: 1.05, marginTop: 20, fontFamily: "serif" }}>
            Preparing a home for what&apos;s next.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
