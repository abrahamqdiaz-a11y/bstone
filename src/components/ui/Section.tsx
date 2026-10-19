import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "dark",
  as: Tag = "p",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  /** Render as the page's H1 while keeping the eyebrow styling. */
  as?: "p" | "h1";
}) {
  return (
    <Tag
      className={`flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.18em] uppercase ${
        tone === "dark" ? "text-brass-deep" : "text-brass-light"
      }`}
    >
      <span aria-hidden="true" className={`h-px w-8 shrink-0 ${tone === "dark" ? "bg-brass" : "bg-brass-light"}`} />
      {children}
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  as: Heading = "h2",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={`mt-4 text-[2rem] leading-[1.12] sm:text-[2.6rem] ${tone === "light" ? "!text-ivory" : ""}`}
      >
        {title}
      </Heading>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${tone === "light" ? "text-ivory/85" : "text-slate-soft"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
