"use client";

import { useRef } from "react";
import SectionHead from "./SectionHead";
import Placeholder from "./Placeholder";
import { gallery } from "@/lib/content";

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-sk">
        <SectionHead index="03" badge="Галерея" title={gallery.title} subtitle={gallery.subtitle} />
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {gallery.images.map((img, i) => (
          <Placeholder
            key={i}
            src={img.src}
            label={img.label}
            rounded="rounded-none"
            className="aspect-[16/10] w-[340px] shrink-0 snap-center sm:w-[520px]"
          />
        ))}
      </div>

      <div className="container-sk mt-8 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Назад"
          onClick={() => scrollBy(-1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Далі"
          onClick={() => scrollBy(1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold"
        >
          ›
        </button>
      </div>
    </section>
  );
}
