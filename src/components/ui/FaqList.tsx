import type { Faq } from "@/content/types";

/**
 * FAQ accordion built on native <details>, so it works without JavaScript and
 * the answers stay in the HTML for search engines. FAQPage schema is
 * intentionally not emitted: Google limits FAQ rich results to well-known
 * government and health sites, so the markup would not be eligible.
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-slate/15 border-y border-slate/15">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="font-serif text-xl leading-snug sm:text-[1.35rem]">{f.q}</h3>
            <span
              aria-hidden="true"
              className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-forest/25 text-forest transition-transform group-open:rotate-45"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-12 leading-relaxed text-slate">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
