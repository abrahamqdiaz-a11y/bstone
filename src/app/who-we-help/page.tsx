import Link from "next/link";
import { PageHero } from "@/components/templates/PageHero";
import { Arrow } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { audiences } from "@/content/audiences";
import { getService } from "@/content/services";
import { serviceArea } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Who We Help: Families, Seniors & Realtors in Sarasota",
  description:
    "Estate and home-prep help in Sarasota for executors, families, seniors, real estate agents and landlords. See how we help you, then call to talk.",
  path: "/who-we-help",
  ogImage: "who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Who We Help", path: "/who-we-help" }]}
        eyebrow="Who we help"
        title="Who We Help in Sarasota: Families, Seniors, Agents and Landlords"
        lead={`Every home transition has people at the center of it. Whether you're settling an estate, helping a parent move, preparing a listing, or turning over a rental in ${serviceArea.region}, we start with your situation and plan the work around it.`}
      />
      <div className="container-bs py-20">
        <div className="max-w-3xl space-y-5 text-[1.0625rem] leading-[1.75]">
          <p>
            The physical work of clearing and preparing a house looks similar from job to job: sorting, donating,
            removing, cleaning, and repairing. What changes is who is making the decisions and what they need from us.
            An executor needs a record of what left the house. An adult child several states away needs updates they
            can trust. An agent needs the house ready by a photo date, and a landlord needs a unit turned around
            before the next tenant arrives.
          </p>
          <p>
            Find the description that sounds most like you below. Each page explains the concerns we hear most often,
            how we work with people in your position, and which services usually fit.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {audiences.map((a) => (
            <li key={a.slug} className="flex flex-col rounded-card border hairline bg-white p-7 shadow-card">
              <h2 className="text-[1.6rem] leading-snug">{a.navLabel}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-slate">{a.hubIntro}</p>
              <p className="mt-5 text-sm text-slate-soft">
                Services that usually fit:{" "}
                {a.services
                  .map(getService)
                  .filter((s) => s !== undefined)
                  .map((s, i, all) => (
                    <span key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-forest underline decoration-brass/60 underline-offset-4">
                        {s.navLabel.toLowerCase()}
                      </Link>
                      {i < all.length - 1 ? ", " : ""}
                    </span>
                  ))}
              </p>
              <Link
                href={`/who-we-help/${a.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-medium text-forest"
              >
                How we help {a.navLabel.toLowerCase()} <Arrow />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <CtaBand />
    </>
  );
}
