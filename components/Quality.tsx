import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { quality } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

export default function Quality() {
  return (
    <section className="container-sk py-[var(--spacing-section)]">
      <SectionHead index="02" badge="Переваги" title={quality.title} subtitle={quality.subtitle} />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {quality.cards.map((card, i) => {
          const Glyph = Icon[card.icon as IconName];
          return (
            <Reveal
              key={card.title}
              as="article"
              delay={i * 80}
              className="bg-beige-card p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center bg-white text-gold">
                <Glyph />
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{card.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
