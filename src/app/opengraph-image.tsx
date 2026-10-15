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
          <svg width="72" height="72" viewBox="0 0 40 40">
            <path d="M20 3.5c8.6 0 16 5.6 16 15.3 0 10.3-7.4 17.7-16.6 17.7C10.4 36.5 4 29.8 4 20.6 4 10.4 11.3 3.5 20 3.5Z" fill="#243D35" />
            <path d="M23.4 16.1c-.4-3.6 1.6-6.4 5.2-7.3.7 3.5-1.3 6.6-5.2 7.3Z" fill="#CDB98F" />
            <path d="M18.6 22.6c-2.8-.3-4.8-2.4-4.9-5.3 2.9.1 4.9 2.2 4.9 5.3Z" fill="#B49A70" />
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
