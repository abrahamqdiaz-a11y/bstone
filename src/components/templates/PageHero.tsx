import type { PhotoSlotKey } from "@/content/images";
import { Breadcrumbs, type Crumb } from "../layout/Breadcrumbs";
import { ButtonLink } from "../ui/Button";
import { PhoneButton } from "../ui/PhoneLink";
import { PhotoSlot } from "../ui/PhotoSlot";
import { Eyebrow } from "../ui/Section";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  photo,
  ctaHref = "/contact",
  showCtas = true,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead: string;
  photo?: { slot: PhotoSlotKey; fallback: "home" | "interior" | "door" | "garden" };
  ctaHref?: string;
  showCtas?: boolean;
}) {
  return (
    <section className="border-b hairline">
      <div
        className={`container-bs grid gap-12 pt-8 pb-16 md:pb-20 ${photo ? "lg:grid-cols-[1.2fr_1fr] lg:items-center" : ""}`}
      >
        <div className={photo ? "" : "max-w-3xl"}>
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 md:mt-14">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl">{lead}</p>
            {showCtas && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={ctaHref} track="cta_click" trackLabel="page-hero">
                  Request a Consultation
                </ButtonLink>
                <PhoneButton />
              </div>
            )}
          </div>
        </div>
        {photo && (
          <PhotoSlot
            slot={photo.slot}
            fallback={photo.fallback}
            eager
            className="aspect-[4/3] lg:mt-12"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        )}
      </div>
    </section>
  );
}
