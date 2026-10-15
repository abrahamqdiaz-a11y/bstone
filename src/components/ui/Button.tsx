import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "light" | "outline-light" | "text";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium transition-colors duration-200 min-h-12 px-6 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-ivory hover:bg-forest-deep",
  secondary: "border border-forest/30 text-forest hover:border-forest hover:bg-forest/5",
  light: "bg-ivory text-forest hover:bg-white",
  "outline-light": "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10",
  text: "min-h-0 px-0 rounded-none text-forest underline decoration-brass underline-offset-4 hover:decoration-forest",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`.trim();
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  /** Analytics event name read by the delegated click tracker. */
  track?: string;
  trackLabel?: string;
};

export function ButtonLink({ variant = "primary", className = "", track, trackLabel, ...props }: ButtonLinkProps) {
  return (
    <Link
      {...props}
      data-track={track}
      data-track-label={trackLabel}
      className={buttonClass(variant, className)}
    />
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-4 w-4 ${className}`} fill="none">
      <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
