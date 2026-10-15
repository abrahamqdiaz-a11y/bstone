import { coordinationBurden } from "@/content/home";
import { Eyebrow } from "../ui/Section";

export function Problem() {
  return (
    <section aria-labelledby="problem" className="bg-forest py-20 text-ivory md:py-28">
      <div className="container-bs grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Eyebrow tone="light">The real problem</Eyebrow>
          <h2 id="problem" className="mt-4 !text-ivory text-[2rem] leading-[1.12] sm:text-[2.6rem]">
            A home transition shouldn&rsquo;t require managing five different companies.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ivory/85">
            <p>
              Emptying and preparing a house usually means finding a hauler, arranging donation drop-offs, booking
              cleaners, and chasing down a handyman—then making sure each one shows up in the right order.
            </p>
            <p>
              Each step waits on the one before it. When no one owns the sequence, weeks slip by and the person in
              charge becomes a full-time project manager.
            </p>
            <p className="text-ivory">
              Briarstone brings the work into one plan, with one team accountable for keeping it moving and telling
              you plainly where things stand.
            </p>
          </div>
        </div>
        <div className="self-center">
          <div className="rounded-card border border-ivory/15 bg-forest-deep/60 p-6 sm:p-8">
            <p className="text-sm font-semibold tracking-[0.14em] text-brass-light uppercase">The usual way</p>
            <ul className="mt-5 divide-y divide-ivory/10">
              {coordinationBurden.map((row) => (
                <li key={row.task} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="text-ivory">{row.task}</span>
                  <span className="text-sm text-ivory/65 sm:text-right">{row.who}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-ivory p-5 text-forest">
              <p className="text-sm font-semibold tracking-[0.14em] text-brass-deep uppercase">With Briarstone</p>
              <p className="mt-2 font-serif text-xl leading-snug">
                One plan. One point of contact. Clear updates on the work we&rsquo;ve agreed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
