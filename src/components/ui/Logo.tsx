import { business } from "@/content/site";

type Tone = "dark" | "light";

const palette: Record<Tone, { green: string; bronze: string }> = {
  dark: { green: "#1E352F", bronze: "#9A7B4F" },
  // On forest-deep the green parts flip to ivory so the badge stays legible.
  light: { green: "#F7F5F0", bronze: "#CDB98F" },
};

/** Briarstone badge: a briar vine wrapped around a bronze roofline and window. */
export function LogoMark({ className = "h-[52px] w-[52px]", tone = "dark" }: { className?: string; tone?: Tone }) {
  const { green, bronze } = palette[tone];
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="44" stroke={green} strokeWidth="4" />

      <path d="M26 58L58 30L86 54" stroke={bronze} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 42V32H79V48" fill={bronze} />

      <rect x="52" y="44" width="5" height="5" rx="0.5" fill={bronze} />
      <rect x="59" y="44" width="5" height="5" rx="0.5" fill={bronze} />
      <rect x="52" y="51" width="5" height="5" rx="0.5" fill={bronze} />
      <rect x="59" y="51" width="5" height="5" rx="0.5" fill={bronze} />

      <path d="M54 94C58 75 22 68 24 42C26 20 48 8 68 12" stroke={green} strokeWidth="4" strokeLinecap="round" />
      <path d="M25 50C35 38 48 34 56 22" stroke={green} strokeWidth="3" strokeLinecap="round" />

      <path d="M24 42C14 40 8 32 10 24C18 26 24 32 24 42Z" fill={green} />
      <path d="M32 25C28 16 30 8 36 4C40 10 38 18 32 25Z" fill={green} />
      <path d="M40 58C32 62 24 60 20 54C26 50 34 52 40 58Z" fill={green} />
      <path d="M58 76C66 72 72 64 70 56C62 58 58 66 58 76Z" fill={green} />
      <path d="M62 18C70 14 78 16 84 22C76 26 68 24 62 18Z" fill={bronze} />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: Tone }) {
  const { green, bronze } = palette[tone];
  return (
    <span className="inline-flex items-center gap-3.5">
      <LogoMark tone={tone} />
      <span className="flex flex-col justify-center">
        <span className="font-logo text-[28px] leading-[0.95] font-bold tracking-[-0.01em]" style={{ color: green }}>
          Briarstone
        </span>
        <span
          className="font-logo-tag mt-[5px] pl-[2px] text-[9.5px] leading-none font-semibold tracking-[0.24em] uppercase"
          style={{ color: bronze }}
        >
          Estate Prep
        </span>
      </span>
      <span className="sr-only">{business.name} home</span>
    </span>
  );
}
