import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-soft">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-slate">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="hover:text-forest hover:underline">
                      {c.name}
                    </Link>
                    <span aria-hidden="true" className="text-brass">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
