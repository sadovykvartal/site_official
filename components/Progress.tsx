import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { progress } from "@/lib/content";

export default function Progress() {
  return (
    <section id="progress" className="py-[var(--spacing-section)]">
      <div className="container-sk">
        <SectionHead index="09" badge="Хід будівництва" title={progress.title} subtitle={progress.subtitle} />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_1fr]">
          {/* поточний етап */}
          <Reveal className="flex flex-col justify-center bg-beige-card p-8 sm:p-10">
            <span className="inline-flex w-fit items-center gap-2 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
              <span className="h-2 w-2 rounded-full bg-gold" />
              {progress.status.stage}
            </span>
            <p className="mt-5 text-lg leading-relaxed text-ink sm:text-xl">
              {progress.status.text}
            </p>
            <p className="mt-4 text-sm text-muted">{progress.note}</p>
          </Reveal>

          {/* планові терміни здачі */}
          <Reveal delay={120} className="sk-card p-8 sm:p-10">
            <h3 className="text-base font-semibold text-ink">Планова здача</h3>
            <div className="mt-6 space-y-6">
              {progress.phases.map((ph) => (
                <div key={ph.name} className="flex items-start gap-4 border-l-2 border-gold pl-4">
                  <div>
                    <p className="text-sm font-bold text-ink">{ph.name}</p>
                    <p className="mt-1 text-sm text-muted">{ph.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
