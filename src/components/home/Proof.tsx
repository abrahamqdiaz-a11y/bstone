import Image from "next/image";
import { projectExamples } from "@/content/proof";
import { SectionHeader } from "../ui/Section";

/** Renders real before/after projects once they exist. Reviews live in proof/Reviews. */
export function Proof() {
  if (projectExamples.length === 0) return null;
  return (
    <section aria-labelledby="proof" className="border-t hairline py-20 md:py-28">
      <div className="container-bs">
        <SectionHeader id="proof" eyebrow="Our work" title="Before and after: recent projects" />
        {projectExamples.length > 0 && (
          <ul className="mt-12 grid gap-10 lg:grid-cols-2">
            {projectExamples.map((p) => (
              <li key={p.title}>
                <div className="grid grid-cols-2 gap-2">
                  {[p.before, p.after].map((img, i) => (
                    <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-card bg-linen">
                      <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                      <figcaption className="absolute left-3 top-3 rounded-full bg-ivory/90 px-3 py-1 text-xs font-medium text-forest">
                        {i === 0 ? "Before" : "After"}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-soft">{p.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
