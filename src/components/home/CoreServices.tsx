import Link from "next/link";
import { getService, serviceGroups } from "@/content/services";
import { Arrow } from "../ui/Button";
import { PhotoSlot } from "../ui/PhotoSlot";
import { groupPhotos } from "@/content/images";
import { SectionHeader } from "../ui/Section";

export function CoreServices() {
  const [a, b, c, projects] = serviceGroups;
  return (
    <section aria-labelledby="core-services" className="py-20 md:py-28">
      <div className="container-bs">
        <SectionHeader
          id="core-services"
          eyebrow="What we do"
          title="Estate cleanouts, downsizing and pre-listing preparation"
          intro="Our work falls into three connected areas. Many projects touch all three—which is exactly why it helps to have one team handling them."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-card border hairline bg-slate/10 lg:grid-cols-3">
          {[a, b, c].map((g) => (
            <li key={g.id} className="flex flex-col bg-white">
              <PhotoSlot slot={groupPhotos[g.id].slot} fallback={groupPhotos[g.id].fallback} className="aspect-[4/3] !rounded-none" sizes="(min-width: 1024px) 33vw, 100vw" />
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <span className="font-serif text-5xl text-brass" aria-hidden="true">
                  {g.label}
                </span>
                <h3 className="mt-6 text-[1.65rem] leading-tight">{g.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-soft">{g.body}</p>
                <ul className="mt-8 flex-1 space-y-3 border-t hairline pt-6">
                  {g.members.map((slug) => {
                    const s = getService(slug)!;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          data-track="service_cta_click"
                          data-track-label={slug}
                          className="group flex items-center justify-between gap-3 font-medium text-forest"
                        >
                          {s.navLabel}
                          <Arrow className="text-brass-deep transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <Link
          href={`/services/${projects.primary}`}
          data-track="service_cta_click"
          data-track-label={projects.primary}
          className="group mt-5 flex flex-col gap-4 rounded-card border hairline bg-linen/70 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <span>
            <span className="block text-xs font-semibold tracking-[0.16em] text-brass-deep uppercase">Also available</span>
            <span className="mt-2 block font-serif text-2xl text-forest">{projects.title}</span>
            <span className="mt-1.5 block text-slate-soft">{projects.body}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-2 font-medium text-forest">
            Home projects <Arrow className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}
