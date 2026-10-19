import Link from "next/link";
import type { ContentSection } from "@/content/types";

export function ContentSections({ sections }: { sections: (ContentSection & { checklist?: string[] })[] }) {
  return (
    <div className="space-y-14">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="text-[1.75rem] leading-tight sm:text-[2rem]">{s.heading}</h2>
          <div className="mt-5 space-y-4 text-[1.0625rem] leading-[1.75]">
            {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
          </div>
          {s.bullets && (
            <ul className="mt-5 space-y-2.5">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {s.checklist && (
            <ul className="mt-6 grid gap-3 rounded-card border hairline bg-white p-6">
              {s.checklist.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-forest">
                    <rect x="2.5" y="2.5" width="15" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.3" />
                    <path d="m6.5 10 2.5 2.5 4.5-5" fill="none" stroke="#7A6443" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          )}
          {s.links && (
            <ul className="mt-5 space-y-2">
              {s.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-medium text-forest underline decoration-brass underline-offset-4 hover:decoration-forest">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
