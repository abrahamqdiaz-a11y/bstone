import { audiences } from "./audiences";
import { services } from "./services";

export type NavLink = { label: string; href: string; description?: string };

export const serviceNav: NavLink[] = services.map((s) => ({
  label: s.navLabel,
  href: `/services/${s.slug}`,
  description: s.summary,
}));

export const audienceNav: NavLink[] = audiences.map((a) => ({
  label: a.navLabel,
  href: `/who-we-help/${a.slug}`,
}));

export const primaryNav: { label: string; href: string; children?: NavLink[] }[] = [
  { label: "Services", href: "/services", children: serviceNav },
  { label: "Who We Help", href: "/who-we-help", children: audienceNav },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];
