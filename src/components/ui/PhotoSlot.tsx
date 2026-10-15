import Image from "next/image";
import { photos, type PhotoSlotKey } from "@/content/images";
import { Illustration } from "./Illustration";

/**
 * Shows the configured photo for a slot, or a decorative illustration when no
 * approved photo exists yet.
 */
export function PhotoSlot({
  slot,
  fallback,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  eager = false,
}: {
  slot: PhotoSlotKey;
  fallback: "home" | "interior" | "door" | "garden";
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  const photo = photos[slot];
  return (
    <div className={`relative overflow-hidden rounded-card bg-linen ${className}`}>
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="object-cover"
        />
      ) : (
        <Illustration variant={fallback} className="absolute inset-0 h-full w-full" />
      )}
    </div>
  );
}
