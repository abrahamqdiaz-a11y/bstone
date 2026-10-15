/**
 * Photography slots. Every slot is empty until Briarstone supplies original
 * project photos (or properly licensed images) — until then the site renders
 * an illustrated placeholder in a matching layout.
 *
 * To add a photo: put the file in /public/photos and set the slot, e.g.
 *   hero: { src: "/photos/hero-kirkland-craftsman.jpg", alt: "Front porch of a cleared craftsman home ready for listing", width: 1600, height: 1200 },
 * Alt text should describe what is actually in the photo.
 */
export type Photo = { src: string; alt: string; width: number; height: number };

export type PhotoSlotKey =
  | "hero"
  | "problem"
  | "about"
  | "trust"
  | "service-cleanouts"
  | "service-transitions"
  | "service-market-ready"
  | "service-projects";

export const photos: Record<PhotoSlotKey, Photo | null> = {
  hero: null,
  problem: null,
  about: null,
  trust: null,
  "service-cleanouts": null,
  "service-transitions": null,
  "service-market-ready": null,
  "service-projects": null,
};
