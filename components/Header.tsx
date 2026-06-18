"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-line bg-white/80 shadow-[0_8px_30px_-18px_rgba(16,32,24,0.3)]"
          : "border-transparent bg-white/70"
      }`}
    >
      <div className="container-sk flex h-20 items-center justify-between gap-6">
        <a href="#top" aria-label={site.name} className="shrink-0">
          <Logo />
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 xl:flex">
          {nav
            .filter((item) => item.href !== "#sales")
            .map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.04em] text-ink/75 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <a
            href={site.phoneHref}
            className="whitespace-nowrap text-[13px] font-semibold text-ink transition-colors hover:text-gold"
          >
            {site.phone}
          </a>
          <a
            href="#sales"
            className="whitespace-nowrap bg-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brown"
          >
            Отримати консультацію
          </a>
        </div>

        {/* mobile burger */}
        <button
          type="button"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center xl:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile panel */}
      <div
        className={`overflow-hidden border-t border-line bg-white xl:hidden ${
          open ? "max-h-[520px]" : "max-h-0"
        } transition-[max-height] duration-300`}
      >
        <nav className="container-sk flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-ink/85"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="py-3 text-base font-bold text-ink"
          >
            {site.phone}
          </a>
          <a
            href="#sales"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
          >
            Отримати консультацію
          </a>
        </nav>
      </div>
    </header>
  );
}
