"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { commercialSpace as c } from "@/lib/content";
import { gtmEvent } from "@/lib/gtm";

export default function Commercial() {
  const [zoom, setZoom] = useState(false);

  return (
    <section id="commercial" className="container-sk py-[var(--spacing-section)]">
      <SectionHead index="06" badge="Комерція" title={c.title} subtitle={c.subtitle} />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* ліворуч: цифри + CTA */}
        <Reveal>
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {c.stats.map((s) => (
              <div
                key={s.label}
                className="sk-card p-5 text-center sm:p-6"
              >
                <p className="font-display text-2xl font-extrabold tracking-tight text-gold sm:text-4xl">
                  {s.value}
                  {s.unit && <span className="text-base sm:text-xl"> {s.unit}</span>}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted">{c.note}</p>

          <a
            href="#sales"
            onClick={() => gtmEvent("cta_click", { cta: "commercial", location: "commercial" })}
            className="btn-solid mt-8"
          >
            {c.cta}
          </a>
        </Reveal>

        {/* праворуч: план (клік = збільшити) */}
        <Reveal delay={120}>
          <button
            type="button"
            onClick={() => setZoom(true)}
            className="sk-card relative aspect-[3/4] w-full overflow-hidden"
            aria-label="Збільшити план комерції та паркінгу"
          >
            <Image
              src={c.image.src}
              alt={c.image.label}
              fill
              className="object-contain p-4"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <span className="absolute right-3 top-3 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brown backdrop-blur-sm">
              Збільшити
            </span>
            <span className="absolute bottom-3 left-3 bg-brown-bubble px-2.5 py-1 text-xs font-medium text-white">
              {c.image.label}
            </span>
          </button>
        </Reveal>
      </div>

      {/* лайтбокс */}
      {zoom && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 sm:p-8"
          onClick={() => setZoom(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setZoom(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white"
            aria-label="Закрити"
          >
            ✕
          </button>
          <div className="flex w-full max-w-4xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image.src}
              alt={c.image.label}
              className="max-h-[82vh] w-auto max-w-full bg-white object-contain p-2"
            />
            <p className="mt-4 text-center text-sm font-medium text-white">{c.image.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
