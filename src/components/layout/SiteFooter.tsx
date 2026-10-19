import Link from "next/link";
import { audienceNav, serviceNav } from "@/content/navigation";
import { resources } from "@/content/resources";
import { publishedServiceAreaPages } from "@/content/serviceAreas";
import { business, hasPhone, serviceArea, telHref } from "@/content/site";
import { Logo } from "../ui/Logo";
import { PhoneIcon } from "../ui/PhoneLink";

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
            {business.descriptor} in {serviceArea.region}, {serviceArea.state}. One accountable team for clearing,
            cleaning, and preparing a home for its next chapter.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {hasPhone && (
              <li>
                <a href={telHref} data-track="phone_click" data-track-label="footer" className="inline-flex items-center gap-2 text-ivory hover:underline">
                  <PhoneIcon />
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
            {business.contractorLicense && <li>License no. {business.contractorLicense}</li>}
          </ul>
        </div>

        <FooterList id="footer-services" title="Services" links={serviceNav} />
        <FooterList id="footer-audiences" title="Who We Help" links={audienceNav} />
        <FooterList
          id="footer-resources"
          title="Resources"
          links={[
            ...publishedServiceAreaPages.map((p) => ({ label: `Estate cleanouts in ${p.city}`, href: `/service-areas/${p.slug}` })),
            { label: "Service areas", href: "/service-areas" },
            ...resources.slice(0, 3).map((r) => ({ label: r.metaTitle.split(" | ")[0], href: `/resources/${r.slug}` })),
            { label: "All guides", href: "/resources" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-bs flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.legalName || business.name}. Serving {serviceArea.region}, {serviceArea.state}.
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

/**
 * A labeled link list. The label is a plain paragraph, not a heading, so the
 * footer doesn't add three headings to every page's outline; the nav landmark
 * is named by it for screen readers.
 */
function FooterList({ id, title, links }: { id: string; title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-labelledby={id}>
      <p id={id} className="font-sans text-xs font-semibold tracking-[0.18em] text-brass-light uppercase">
        {title}
      </p>
      <ul className="mt-5 space-y-2.5 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-ivory">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
