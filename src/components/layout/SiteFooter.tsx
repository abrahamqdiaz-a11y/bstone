import Link from "next/link";
import { audienceNav, serviceNav } from "@/content/navigation";
import { resources } from "@/content/resources";
import { business, hasPhone, telHref } from "@/content/site";
import { Logo } from "../ui/Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-deep text-ivory/80">
      <div className="container-bs grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-block rounded-sm">
            <Logo tone="light" />
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed">
            {business.descriptor}. One accountable team for clearing, cleaning, and preparing a home for its next chapter.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {hasPhone && (
              <li>
                <a href={telHref} data-track="phone_click" data-track-label="footer" className="text-ivory hover:underline">
                  {business.phoneDisplay}
                </a>
              </li>
            )}
            {business.email && (
              <li>
                <a href={`mailto:${business.email}`} data-track="email_click" className="text-ivory hover:underline">
                  {business.email}
                </a>
              </li>
            )}
            {business.hours && <li>{business.hours}</li>}
            {business.contractorRegistration && <li>WA contractor reg. {business.contractorRegistration}</li>}
          </ul>
        </div>

        <FooterList title="Services" links={serviceNav} />
        <FooterList title="Who We Help" links={audienceNav} />
        <FooterList
          title="Resources"
          links={[
            ...resources.slice(0, 4).map((r) => ({ label: r.metaTitle, href: `/resources/${r.slug}` })),
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-bs flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.legalName || business.name}. Serving {business.serviceRegion}.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-ivory">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ivory">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-brass-light uppercase">{title}</h2>
      <ul className="mt-5 space-y-2.5 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-ivory">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
