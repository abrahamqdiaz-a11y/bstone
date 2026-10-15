import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-bs py-28 text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-brass-deep uppercase">Page not found</p>
      <h1 className="mt-5 text-5xl">We couldn&rsquo;t find that page.</h1>
      <p className="mx-auto mt-5 max-w-lg text-lg text-slate-soft">
        It may have moved. Try our services, or tell us what you need and we&rsquo;ll point you in the right direction.
      </p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/services">View services</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Request a Consultation
        </ButtonLink>
      </div>
    </div>
  );
}
