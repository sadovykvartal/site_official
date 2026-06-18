import Image from "next/image";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { documents } from "@/lib/content";

export default function Documents() {
  return (
    <section id="documents" className="container-sk py-[var(--spacing-section)]">
      <SectionHead
        index="10"
        badge={documents.badge}
        title={documents.title}
        subtitle={documents.subtitle}
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {documents.items.map((d, i) => (
          <Reveal as="article" key={d.title} delay={i * 80} className="h-full">
            <a
              href={d.file}
              target="_blank"
              rel="noopener noreferrer"
              className="sk-card group flex h-full gap-5 p-5 sm:gap-6 sm:p-6"
            >
              {/* мініатюра 1-ї сторінки */}
              <div className="relative aspect-[210/297] w-24 shrink-0 overflow-hidden border border-line bg-gray-card sm:w-28">
                <Image
                  src={d.thumb}
                  alt={d.title}
                  fill
                  className="object-cover object-top"
                  sizes="120px"
                />
              </div>

              {/* контент */}
              <div className="flex flex-1 flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {d.type}
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug text-ink sm:text-lg">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.desc}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-5">
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {d.status}
                  </span>
                  <span className="text-xs text-muted-2">від {d.date}</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brown transition-opacity group-hover:opacity-70">
                    Переглянути PDF
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center text-sm text-muted">{documents.note}</Reveal>
    </section>
  );
}
