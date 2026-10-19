import { reviews } from "@/content/proof";
import { business } from "@/content/site";
import { SectionHeader } from "../ui/Section";

/**
 * Real, client-supplied reviews only (src/content/proof.ts), plus a link to the
 * Google Business Profile review page once it exists. Renders nothing while
 * both are empty. Deliberately emits no rating or review structured data.
 */
export function Reviews({ title = "What clients say about working with us" }: { title?: string }) {
  if (reviews.length === 0 && !business.googleReviewUrl) return null;
  return (
    <section aria-labelledby="reviews" className="border-t hairline py-20 md:py-28">
      <div className="container-bs">
        <SectionHeader id="reviews" eyebrow="From our clients" title={title} />
        {reviews.length > 0 && (
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.quote} className="rounded-card border hairline bg-white p-8 shadow-card">
                <figure>
                  <blockquote className="font-serif text-xl leading-relaxed text-forest">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 text-sm text-slate-soft">
                    {r.attribution}
                    {r.context && <> &middot; {r.context}</>}
                    {r.source &&
                      (r.sourceUrl ? (
                        <>
                          {" "}&middot;{" "}
                          <a href={r.sourceUrl} rel="noopener" className="underline underline-offset-2">
                            via {r.source}
                          </a>
                        </>
                      ) : (
                        <> &middot; via {r.source}</>
                      ))}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
        {business.googleReviewUrl && (
          <p className="mt-10 text-slate">
            Worked with us?{" "}
            <a
              href={business.googleReviewUrl}
              rel="noopener"
              data-track="cta_click"
              data-track-label="google-review"
              className="font-medium text-forest underline decoration-brass underline-offset-4"
            >
              Leave a review on Google
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
