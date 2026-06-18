import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { pricing } from "@/lib/content";

function PriceCard({ name, prices }: { name: string; prices: number[] }) {
  return (
    <div className="sk-card flex h-full flex-col p-6 sm:p-7">
      <h3 className="text-base font-bold text-ink">{name}</h3>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">
        Ціна за 1 м²
      </p>
      <div className="mt-5 border-t border-line">
        {pricing.downPayments.map((d, i) => (
          <div
            key={d}
            className="flex items-center justify-between border-b border-line/70 py-3 text-sm last:border-b-0"
          >
            <span className="text-muted">Внесок {d}</span>
            <span className={i === 0 ? "font-bold text-gold" : "font-semibold text-ink"}>
              ${prices[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="container-sk py-[var(--spacing-section)]">
      <SectionHead index="08" badge="Ціни" title={pricing.title} subtitle={pricing.subtitle} />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pricing.sections.map((s, i) => (
          <Reveal as="article" key={s.name} delay={i * 80} className="h-full">
            <PriceCard name={s.name} prices={s.prices} />
          </Reveal>
        ))}

        <Reveal as="article" delay={160} className="h-full">
          <PriceCard name={pricing.commercial.name} prices={pricing.commercial.prices} />
        </Reveal>

        {/* гараж - фіксована вартість */}
        <Reveal as="article" delay={240} className="h-full">
          <div className="flex h-full flex-col justify-center border border-gold bg-beige-card p-6 sm:p-7">
            <h3 className="text-base font-bold text-ink">{pricing.garage.name}</h3>
            <p className="mt-3 font-display text-3xl font-extrabold text-gold">
              ${pricing.garage.price.toLocaleString("uk-UA")}
            </p>
            <p className="mt-1 text-sm text-muted">фіксована вартість</p>
          </div>
        </Reveal>
      </div>

      <p className="mt-6 text-xs text-muted-2">
        «0%» - повне розтермінування без першого внеску.
      </p>
      <Reveal className="mt-3 text-sm text-muted">{pricing.note}</Reveal>
    </section>
  );
}
