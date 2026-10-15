import Link from "next/link";
import { getAudience } from "@/content/audiences";
import { getResource } from "@/content/resources";
import { getService } from "@/content/services";
import { LinkCard } from "../ui/LinkCard";
import { SectionHeader } from "../ui/Section";

export function RelatedServices({ slugs, title = "Related services" }: { slugs: string[]; title?: string }) {
  const items = slugs.map(getService).filter((s) => s !== undefined);
  if (!items.length) return null;
  return (
    <section aria-labelledby="related-services" className="py-20">
      <div className="container-bs">
        <SectionHeader id="related-services" title={title} />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((s) => (
            <li key={s.slug}>
              <LinkCard href={`/services/${s.slug}`} title={s.navLabel} body={s.summary} track="service_cta_click" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SidebarLinks({ resources = [], audiences = [] }: { resources?: string[]; audiences?: string[] }) {
  const res = resources.map(getResource).filter((r) => r !== undefined);
  const aud = audiences.map(getAudience).filter((a) => a !== undefined);
  if (!res.length && !aud.length) return null;
  return (
    <div className="rounded-card border hairline bg-white p-6">
      {res.length > 0 && (
        <>
          <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">Helpful guides</h2>
          <ul className="mt-4 space-y-3">
            {res.map((r) => (
              <li key={r.slug}>
                <Link href={`/resources/${r.slug}`} className="leading-snug text-forest underline decoration-brass/60 underline-offset-4 hover:decoration-forest">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {aud.length > 0 && (
        <>
          <h2 className={`font-sans text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase ${res.length ? "mt-8" : ""}`}>
            Who this helps
          </h2>
          <ul className="mt-4 space-y-3">
            {aud.map((a) => (
              <li key={a.slug}>
                <Link href={`/who-we-help/${a.slug}`} className="leading-snug text-forest underline decoration-brass/60 underline-offset-4 hover:decoration-forest">
                  {a.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
