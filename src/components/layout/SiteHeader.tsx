"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { primaryNav } from "@/content/navigation";
import { buttonClass } from "../ui/Button";
import { Logo } from "../ui/Logo";

export function SiteHeader({ phone }: { phone: { display: string; href: string } | null }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuId = useId();

  // Close menus after navigation. Adjusting state during render on a changed
  // value avoids a cascading effect render.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b hairline bg-ivory/95 backdrop-blur-sm">
      <div className="container-bs flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="shrink-0 rounded-sm">
          <Logo />
        </Link>

        <nav ref={navRef} aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) =>
              item.children ? (
                <li key={item.href} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === item.href}
                    aria-controls={`${menuId}-${item.label}`}
                    onClick={() => setOpenMenu(openMenu === item.href ? null : item.href)}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] hover:text-forest ${
                      isActive(item.href) ? "text-forest font-medium" : "text-slate"
                    }`}
                  >
                    {item.label}
                    <svg aria-hidden="true" viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${openMenu === item.href ? "rotate-180" : ""}`}>
                      <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div
                    id={`${menuId}-${item.label}`}
                    hidden={openMenu !== item.href}
                    className="absolute left-1/2 top-full mt-2 w-[min(36rem,90vw)] -translate-x-1/2 rounded-card border hairline bg-white p-3 shadow-card"
                  >
                    <ul className={item.children.length > 4 ? "grid grid-cols-2 gap-1" : "grid gap-1"}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="block rounded-lg px-3 py-2.5 hover:bg-ivory"
                          >
                            <span className="block font-medium text-forest">{child.label}</span>
                            {child.description && (
                              <span className="mt-0.5 block text-sm leading-snug text-slate-soft line-clamp-2">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={item.href} className="mt-2 block border-t hairline px-3 pt-3 pb-1 text-sm font-medium text-forest underline decoration-brass underline-offset-4">
                      View all {item.label.toLowerCase()}
                    </Link>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-[0.95rem] hover:text-forest ${
                      isActive(item.href) ? "text-forest font-medium" : "text-slate"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {phone && (
            <a href={phone.href} data-track="phone_click" data-track-label="header" className="text-[0.95rem] font-medium text-forest">
              {phone.display}
            </a>
          )}
          <Link href="/contact" data-track="cta_click" data-track-label="header" className={buttonClass("primary", "min-h-11 px-5")}>
            Request a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-forest lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls={`${menuId}-mobile`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        id={`${menuId}-mobile`}
        hidden={!mobileOpen}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto border-t hairline bg-ivory lg:hidden"
      >
        <nav aria-label="Mobile" className="container-bs py-6">
          <ul className="divide-y divide-slate/10">
            {primaryNav.map((item) => (
              <li key={item.href} className="py-4">
                <Link href={item.href} className="font-serif text-2xl text-forest">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-3 grid gap-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block py-1.5 text-slate">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <Link href="/contact" className={buttonClass("primary")}>
              Request a Consultation
            </Link>
            {phone && (
              <a href={phone.href} data-track="phone_click" data-track-label="mobile-menu" className={buttonClass("secondary")}>
                Call {phone.display}
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
