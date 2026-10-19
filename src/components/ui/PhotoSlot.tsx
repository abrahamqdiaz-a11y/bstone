"use client";

import Image, { type ImageLoader } from "next/image";
import { useState } from "react";
import { photos, type PhotoFallback, type PhotoSlotKey } from "@/content/images";
import { Illustration } from "./Illustration";

/**
 * Unsplash resizes on its own CDN, so the browser gets a srcset of real widths
 * without depending on the server's network policy. Local photos fall back to
 * Next's built-in optimizer.
 */
const unsplashLoader: ImageLoader = ({ src, width, quality }) => `${src}&w=${width}&q=${quality ?? 70}`;

/**
 * Stock photos illustrate the service; they are not project evidence. A slot
 * with no photo shows the illustration and is reserved for real job photos.
 */
export function PhotoSlot({
  slot,
  fallback,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  eager = false,
}: {
  slot: PhotoSlotKey;
  fallback: PhotoFallback;
  className?: string;
  sizes?: string;
  /** Only the page's hero image should load eagerly. */
  eager?: boolean;
}) {
  const photo = photos[slot];
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  return (
    <div className={`relative overflow-hidden rounded-card bg-linen ${className}`}>
      <Illustration variant={fallback} className="absolute inset-0 h-full w-full" />
      {photo && failedSrc !== photo.src && (
        <>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={sizes}
            loader={photo.stock ? unsplashLoader : undefined}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            onError={() => setFailedSrc(photo.src)}
            onLoad={() => setLoadedSrc(photo.src)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {photo.stock && loadedSrc === photo.src && <span className="absolute left-3 bottom-3 rounded-full bg-forest-deep px-3 py-1 text-[0.65rem] tracking-wide text-ivory">Illustrative stock photography</span>}
        </>
      )}
    </div>
  );
}
