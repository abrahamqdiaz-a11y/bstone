import { business, hasPhone, telHref } from "@/content/site";
import { buttonClass } from "./Button";

type Variant = Parameters<typeof buttonClass>[0];

/**
 * Renders a tel: link only when a verified phone number is configured in
 * site.ts. Otherwise renders `fallback` (or nothing), so no unconfirmed
 * number is ever published.
 */
export function PhoneButton({
  variant = "secondary",
  className = "",
  label,
  fallback = null,
}: {
  variant?: Variant;
  className?: string;
  label?: string;
  fallback?: React.ReactNode;
}) {
  if (!hasPhone) return <>{fallback}</>;
  return (
    <a href={telHref} className={buttonClass(variant, className)} data-track="phone_click">
      <PhoneIcon />
      {label ?? `Call ${business.phoneDisplay}`}
    </a>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M6.6 2.75H4.5A1.75 1.75 0 0 0 2.75 4.6c.3 6.9 5.75 12.35 12.65 12.65a1.75 1.75 0 0 0 1.85-1.75v-2.1a1 1 0 0 0-.78-.98l-2.84-.63a1 1 0 0 0-.94.27l-1.06 1.06a10.1 10.1 0 0 1-4.75-4.75l1.06-1.06a1 1 0 0 0 .27-.94l-.63-2.84a1 1 0 0 0-.98-.78Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
