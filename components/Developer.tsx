import Image from "next/image";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { developer as d } from "@/lib/content";

export default function Developer() {
  return (
    <section className="section-dark">
      <div className="container-sk py-[var(--spacing-section)]">
        <SectionHead index="11" badge={d.badge} title={d.title} subtitle={d.intro} />

        {/* показники довіри */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {d.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="h-full border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm">
                <p className="font-display text-3xl font-extrabold tracking-tight text-gold-soft sm:text-4xl">
                  {s.value}
                  {s.unit && (
                    <span className="ml-1 text-base font-bold sm:text-lg"> {s.unit}</span>
                  )}
                </p>
                <p className="mt-2 text-sm leading-snug text-cream/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* портфоліо реалізованих проєктів */}
        <Reveal className="mt-16 text-center">
          <h3 className="font-display text-lg font-bold text-cream sm:text-xl">
            {d.projectsTitle}
          </h3>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {d.projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={i * 80}
              className="group flex flex-col overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/20">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="font-display text-lg font-bold text-cream">{p.name}</h4>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold-soft">
                  {p.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{p.scope}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* можливості: власні бригади + партнери */}
        <div className="mt-12 grid grid-cols-1 gap-8 border border-white/10 bg-white/[0.03] p-8 sm:p-10 md:grid-cols-2">
          <Reveal>
            <h4 className="text-base font-bold text-cream">{d.capabilities.ownTitle}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.capabilities.own.map((w) => (
                <span
                  key={w}
                  className="border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-cream/85"
                >
                  {w}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h4 className="text-base font-bold text-cream">{d.capabilities.partnersTitle}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.capabilities.partners.map((w) => (
                <span
                  key={w}
                  className="border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-cream/85"
                >
                  {w}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
