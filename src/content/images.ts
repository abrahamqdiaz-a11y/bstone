/**
 * Photography. Each page's hero uses its own image; no hero photo appears on
 * two pages. Card thumbnails on /services and the homepage reuse the hero of
 * the page they link to.
 *
 * Stock photos are free Unsplash images (https://unsplash.com/license) and are
 * labeled on the page as illustrative. They are never Briarstone projects or
 * staff. See docs/PHOTOGRAPHY.md.
 *
 * VERIFY: the Unsplash CDN was unreachable from the build environment, so the
 * alt text below could not be checked against the actual images. Inspect each
 * photo and correct its alt text before launch.
 *
 * JOB PHOTO SLOTS: slots set to `null` show the original illustration and are
 * reserved for real Briarstone job photos. Put approved photos in
 * public/photos/ and set { src: "/photos/…", alt, width, height, stock: false }.
 * Replace stock slots the same way as real photos become available.
 */
export type Photo = { src: string; alt: string; width: number; height: number; stock: boolean };

const stock = (id: string, alt: string): Photo => ({
  // Width and quality are added per request by the Unsplash loader in PhotoSlot.
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop`,
  alt,
  width: 1600,
  height: 1200,
  stock: true,
});

export const photos = {
  hero: stock("photo-1600210492486-724fe5c67fb0", "A welcoming living space with natural light"),
  "service-cleanouts": stock("photo-1600566753086-00f18fb6b3ea", "Natural materials and considered details in a home interior"),
  "service-inherited": stock("photo-1600047509807-ba8f99d2cdde", "A bright residential interior ready for a new chapter"),
  "service-downsizing": stock("photo-1586023492125-27b2c045efd7", "A comfortable living area with a simple furniture arrangement"),
  "service-transitions": stock("photo-1600585154340-be6161a56a0c", "A residential home with an inviting outdoor setting"),
  "service-market-ready": stock("photo-1600607687939-ce8a6c25118c", "A clean, light-filled home interior"),
  "service-home-cleanouts": stock("photo-1600566753190-17f0baa2a6c3", "An open residential space with room to move"),
  "service-projects": stock("photo-1600607687920-4e2a09cf159d", "Interior finishes and fixtures in a home"),
  // JOB PHOTO SLOT: replace with a real photo of a Briarstone team at work (no faces without releases).
  trust: null,
  // JOB PHOTO SLOT: replace with a real before/after of a cleared room.
  problem: null,
  // JOB PHOTO SLOT: replace with a real photo from a Sarasota-area job.
  about: null,
} satisfies Record<string, Photo | null>;

export type PhotoSlotKey = keyof typeof photos;
export type PhotoFallback = "home" | "interior" | "door" | "garden";
type PhotoChoice = { slot: PhotoSlotKey; fallback: PhotoFallback };

export const servicePhotos: Record<string, PhotoChoice> = {
  "estate-cleanouts": { slot: "service-cleanouts", fallback: "interior" },
  "inherited-home-cleanouts": { slot: "service-inherited", fallback: "home" },
  "senior-downsizing": { slot: "service-downsizing", fallback: "interior" },
  "estate-transitions": { slot: "service-transitions", fallback: "garden" },
  "pre-listing-home-preparation": { slot: "service-market-ready", fallback: "home" },
  "home-cleanouts": { slot: "service-home-cleanouts", fallback: "interior" },
  "handyman-home-projects": { slot: "service-projects", fallback: "door" },
};

export const groupPhotos = {
  cleanouts: servicePhotos["estate-cleanouts"],
  transitions: servicePhotos["senior-downsizing"],
  "market-ready": servicePhotos["pre-listing-home-preparation"],
  projects: servicePhotos["handyman-home-projects"],
};
