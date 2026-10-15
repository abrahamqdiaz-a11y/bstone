import { business } from "@/content/site";

/** Briarstone mark: a river stone with a single briar leaf. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 3.5c8.6 0 16 5.6 16 15.3 0 10.3-7.4 17.7-16.6 17.7C10.4 36.5 4 29.8 4 20.6 4 10.4 11.3 3.5 20 3.5Z"
        fill="#243D35"
      />
      <path d="M13 27.5c3.5-1.2 7.6-5.2 10.4-11.4" stroke="#CDB98F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path
        d="M23.4 16.1c-.4-3.6 1.6-6.4 5.2-7.3.7 3.5-1.3 6.6-5.2 7.3Z"
        fill="#CDB98F"
      />
      <path d="M18.6 22.6c-2.8-.3-4.8-2.4-4.9-5.3 2.9.1 4.9 2.2 4.9 5.3Z" fill="#B49A70" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.35rem] tracking-[-0.01em] ${tone === "dark" ? "text-forest" : "text-ivory"}`}>
          Briarstone
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold tracking-[0.32em] uppercase ${
            tone === "dark" ? "text-brass-deep" : "text-brass-light"
          }`}
        >
          Prep
        </span>
      </span>
      <span className="sr-only">{business.name} home</span>
    </span>
  );
}
