import Link from "next/link";
import { Arrow } from "./Button";

export function LinkCard({
  href,
  title,
  body,
  cta = "Learn more",
  kicker,
  track,
  headingLevel = 3,
}: {
  href: string;
  title: string;
  body: string;
  cta?: string;
  kicker?: string;
  track?: string;
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link
      href={href}
      data-track={track}
      data-track-label={href}
      className="group flex h-full flex-col rounded-card border hairline bg-white p-7 shadow-card transition-colors hover:border-forest/30"
    >
      {kicker && <span className="text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">{kicker}</span>}
      <H className={`text-[1.45rem] leading-snug ${kicker ? "mt-3" : ""}`}>{title}</H>
      <p className="mt-3 flex-1 leading-relaxed text-slate-soft">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-forest">
        {cta}
        <Arrow className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
