import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { specs } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

function MiniCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-gold"
      aria-hidden
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export default function Specs() {
  return (
    <section className="container-sk py-[var(--spacing-section)]">
      <SectionHead index="07" badge="Комплектація" title={specs.title} subtitle={specs.subtitle} />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {specs.groups.map((g, i) => {
          const Glyph = Icon[g.icon as IconName];
          return (
            <Reveal
              key={g.title}
              as="article"
              delay={i * 80}
              className="sk-card flex flex-col p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center bg-gold/10 text-gold">
                <Glyph width={24} height={24} />
              </span>
              <h3 className="mt-5 text-base font-bold text-ink">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <MiniCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
