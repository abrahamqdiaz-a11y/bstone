"use client";

import Image from "next/image";
import { useState } from "react";
import { photos, type PhotoSlotKey } from "@/content/images";
import { Illustration } from "./Illustration";

/** Stock photos illustrate the service; they are not project evidence. */
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
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const isStock = photo.src.startsWith("https://images.unsplash.com/");
  return (
    <div className={`relative overflow-hidden rounded-card bg-linen ${className}`}>
      <Illustration variant={fallback} className="absolute inset-0 h-full w-full" />
      {failedSrc !== photo.src && (
        <>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            // Direct CDN delivery keeps the browser independent of the server's
            // network policy. Local replacement photos use Next optimization.
            unoptimized={isStock}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            onError={() => setFailedSrc(photo.src)}
            onLoad={() => setLoadedSrc(photo.src)}
            className="object-cover"
          />
          {isStock && loadedSrc === photo.src && <span className="absolute left-3 bottom-3 rounded-full bg-forest-deep px-3 py-1 text-[0.65rem] tracking-wide text-ivory">Illustrative stock photography</span>}
        </>
      )}
    </div>
  );
}
