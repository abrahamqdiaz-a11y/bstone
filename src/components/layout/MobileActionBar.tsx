import Link from "next/link";
import { hasPhone, telHref } from "@/content/site";
import { PhoneIcon } from "../ui/PhoneLink";

/** Persistent bottom bar on small screens with the two primary actions. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t hairline bg-ivory/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm lg:hidden">
      <div className={`grid gap-3 ${hasPhone ? "grid-cols-[auto_1fr]" : ""}`}>
        {hasPhone && (
          <a
            href={telHref}
            data-track="phone_click"
            data-track-label="mobile-bar"
            className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest/30 px-5 font-medium text-forest"
          >
            <PhoneIcon />
            Call
          </a>
        )}
        <Link
          href="/contact"
          data-track="cta_click"
          data-track-label="mobile-bar"
          className="flex min-h-12 items-center justify-center rounded-full bg-forest px-5 font-medium text-ivory"
        >
          Request a Consultation
        </Link>
      </div>
    </div>
  );
}
