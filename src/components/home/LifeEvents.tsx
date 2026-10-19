import { lifeEvents } from "@/content/home";
import { LinkCard } from "../ui/LinkCard";
import { SectionHeader } from "../ui/Section";

export function LifeEvents() {
  return (
    <section aria-labelledby="life-events" className="border-t hairline bg-linen/60 py-20 md:py-28">
      <div className="container-bs">
        <SectionHeader
          id="life-events"
          eyebrow="Where you are now"
          title="Help for an estate, a downsizing move, or a home sale"
          intro="Most people find us during a change they didn't plan for, or one they've put off for a long time. Start with the situation that sounds like yours."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lifeEvents.map((e) => (
            <li key={e.href}>
              <LinkCard href={e.href} title={e.title} body={e.body} cta={e.cta} track="service_cta_click" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
