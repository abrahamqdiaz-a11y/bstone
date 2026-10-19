import { homeAudiences } from "@/content/home";
import { LinkCard } from "../ui/LinkCard";
import { SectionHeader } from "../ui/Section";

export function WhoWeHelp() {
  return (
    <section aria-labelledby="who-we-help" className="border-t hairline bg-linen/60 py-20 md:py-28">
      <div className="container-bs">
        <SectionHeader id="who-we-help" eyebrow="Who we help" title="Who we help across Sarasota and Manatee" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeAudiences.map((a) => (
            <li key={a.title}>
              <LinkCard href={a.href} title={a.title} body={a.body} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
