/**
 * Free stock photography from Unsplash (https://unsplash.com/license).
 * These are illustrative residential spaces, never Briarstone projects or staff.
 * See docs/PHOTOGRAPHY.md for sources and replacement guidance.
 */
export type Photo = { src: string; alt: string; width: number; height: number };

const stock = (id: string, alt: string): Photo => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`,
  alt,
  width: 1600,
  height: 1200,
});

export const photos = {
  hero: stock("photo-1600210492486-724fe5c67fb0", "A welcoming living space with natural light"),
  problem: stock("photo-1586023492125-27b2c045efd7", "A furnished residential living space"),
  about: stock("photo-1600585154340-be6161a56a0c", "A home surrounded by greenery"),
  trust: stock("photo-1600566753086-00f18fb6b3ea", "Natural materials and considered details in a home interior"),
  "service-cleanouts": stock("photo-1600210492486-724fe5c67fb0", "A furnished living room with space for meaningful belongings"),
  "service-inherited": stock("photo-1600047509807-ba8f99d2cdde", "A bright residential interior ready for a new chapter"),
  "service-downsizing": stock("photo-1586023492125-27b2c045efd7", "A comfortable living area with a simple furniture arrangement"),
  "service-transitions": stock("photo-1600585154340-be6161a56a0c", "A residential home with an inviting outdoor setting"),
  "service-market-ready": stock("photo-1600607687939-ce8a6c25118c", "A clean, light-filled home interior"),
  "service-home-cleanouts": stock("photo-1600566753190-17f0baa2a6c3", "An open residential space with room to move"),
  "service-projects": stock("photo-1600607687920-4e2a09cf159d", "Interior finishes and fixtures in a home"),
} satisfies Record<string, Photo>;

export type PhotoSlotKey = keyof typeof photos;
type PhotoChoice = { slot: PhotoSlotKey; fallback: "home" | "interior" | "door" | "garden" };

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
