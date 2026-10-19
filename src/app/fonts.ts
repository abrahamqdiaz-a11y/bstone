import localFont from "next/font/local";

// Self-hosted variable fonts (SIL Open Font License — see src/fonts/OFL-*.txt).
export const newsreader = localFont({
  src: [
    { path: "../fonts/newsreader-latin-opsz-normal.woff2", style: "normal", weight: "200 800" },
    { path: "../fonts/newsreader-latin-opsz-italic.woff2", style: "italic", weight: "200 800" },
  ],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const inter = localFont({
  src: [{ path: "../fonts/inter-latin-wght-normal.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-inter",
  display: "swap",
});

// Logo lockup only: "Briarstone" wordmark and "Estate Prep" tagline.
export const cormorant = localFont({
  src: [{ path: "../fonts/cormorant-garamond-latin-600-700.woff2", style: "normal", weight: "600 700" }],
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const montserrat = localFont({
  src: [{ path: "../fonts/montserrat-latin-600.woff2", style: "normal", weight: "600" }],
  variable: "--font-montserrat",
  display: "swap",
});
