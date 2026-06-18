"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { apartments } from "@/lib/content";

const TYPE_ORDER = ["studio", "1", "2", "3"];

export default function Apartments() {
  const [filter, setFilter] = useState("overview");
  const [active, setActive] = useState<number | null>(null);

  const typeCount = (t: string) =>
    apartments.plans.filter((p) => p.type === t).length;

  const visible =
    filter === "all"
      ? apartments.plans
      : filter === "overview"
        ? TYPE_ORDER.map((t) => apartments.plans.find((p) => p.type === t)!)
        : apartments.plans.filter((p) => p.type === filter);

  return (
    <section id="apartments" className="container-sk py-[var(--spacing-section)]">
      <SectionHead
        index="05"
        badge={apartments.badge}
        title={apartments.title}
        subtitle={apartments.subtitle}
      />

      {/* фільтр за типом */}
      <Reveal className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {apartments.filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
              filter === f.key
                ? "border-gold bg-gold text-white"
                : "border-line bg-white text-ink hover:border-gold"
            }`}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      {/* сітка планувань */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((p) => (
          <Reveal
            as="article"
            key={p.src}
            className="sk-card flex flex-col overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setActive(apartments.plans.indexOf(p))}
              className="relative aspect-square w-full bg-gray-card transition-colors hover:bg-beige-card"
              aria-label={`Збільшити планування ${p.label}, ${p.area} м²`}
            >
              <Image
                src={p.src}
                alt={`Планування ${p.label}, ${p.area} м²`}
                fill
                className="object-contain p-4"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
              <span className="absolute right-3 top-3 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brown backdrop-blur-sm">
                Збільшити
              </span>
            </button>
            <div className="border-t border-line/70 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">{p.label}</span>
                <span className="text-sm font-medium text-gold">{p.area} м²</span>
              </div>
              {filter === "overview" && (
                <button
                  type="button"
                  onClick={() => setFilter(p.type)}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brown transition-opacity hover:opacity-70"
                >
                  Переглянути всі ({typeCount(p.type)})
                  <span aria-hidden>→</span>
                </button>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center text-sm text-muted">{apartments.note}</Reveal>

      {/* лайтбокс */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 sm:p-8"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white"
            aria-label="Закрити"
          >
            ✕
          </button>
          <div
            className="flex w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={apartments.plans[active].src}
              alt={`Планування ${apartments.plans[active].label}, ${apartments.plans[active].area} м²`}
              className="max-h-[82vh] w-auto max-w-full bg-white object-contain p-2"
            />
            <p className="mt-4 text-center text-sm font-medium text-white">
              {apartments.plans[active].label} · {apartments.plans[active].area} м²
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
