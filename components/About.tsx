import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { about } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

export default function About() {
  return (
    <section id="about" className="container-sk py-[var(--spacing-section)]">
      <SectionHead index="01" badge={about.badge} title={about.title} subtitle={about.subtitle} />

      {/* bento-сітка: фото (велика плитка) + картки-переваги + картка-концепція */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-16">
        {/* велика плитка з фото */}
        <Reveal className="sm:col-span-2 md:col-span-1 md:row-span-2">
          <Placeholder
            src={about.image.src}
            label={about.image.label}
            rounded="rounded-none"
            className="h-full min-h-[240px] w-full md:min-h-[460px]"
          />
        </Reveal>

        {/* картки-переваги */}
        {about.features.map((f, i) => {
          const Glyph = Icon[f.icon as IconName];
          return (
            <Reveal
              key={f.title}
              as="article"
              delay={i * 70}
              className="sk-card flex flex-col p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center bg-gold/10 text-gold">
                <Glyph width={22} height={22} />
              </span>
              <h3 className="mt-6 text-base font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
            </Reveal>
          );
        })}

        {/* картка-концепція (широка) */}
        <Reveal as="article" className="bg-beige-card p-8 sm:col-span-2 md:col-span-2">
          <h3 className="text-lg font-bold text-ink">{about.concept.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{about.concept.text}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {about.concept.points.map((p) => (
              <span
                key={p}
                className="border border-gold/30 bg-white px-3 py-1.5 text-xs font-medium text-brown"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
