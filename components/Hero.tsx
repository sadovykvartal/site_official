import Placeholder from "./Placeholder";
import TrackedLink from "./TrackedLink";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* фонове фото */}
      <div className="absolute inset-0">
        <Placeholder
          src="/kvartal/hero.jpg"
          rounded="rounded-none"
          className="h-full w-full"
          priority
        />
      </div>
      {/* делікатний скрім: фото «дихає», текст унизу читабельний */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

      {/* колонка на всю висоту: meta зверху, контент унизу */}
      <div className="container-sk relative z-10 flex min-h-[100svh] flex-col pb-9 pt-24 sm:pb-14 sm:pt-32">
        {/* тонкий мета-рядок */}
        <div className="flex items-center gap-4 text-white/70">
          <span className="h-px w-12 bg-white/40" />
          <span className="text-[11px] uppercase tracking-[0.3em]">Житловий квартал</span>
        </div>

        {/* нижній блок */}
        <div className="mt-auto">
          <div className="max-w-3xl">
            {hero.tag && (
              <span className="font-script -mb-1 block text-[34px] leading-tight text-gold-soft [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_4px_28px_rgba(0,0,0,0.8)] sm:-mb-2 sm:text-[46px] lg:text-[56px]">
                {hero.tag}
              </span>
            )}
            <h1 className="font-head text-[40px] font-normal leading-[1.05] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.4),0_6px_30px_rgba(0,0,0,0.5)] sm:text-7xl lg:text-[88px]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              {hero.subtitle}
            </p>

            {/* стримані дії */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-10 sm:gap-x-8 sm:gap-y-5">
              <TrackedLink
                href="#sales"
                event="cta_click"
                eventParams={{ cta: "consultation", location: "hero" }}
                className="group inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-ink sm:px-8 sm:py-4"
              >
                {hero.ctaPrimary}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </TrackedLink>
              <TrackedLink
                href="#apartments"
                event="cta_click"
                eventParams={{ cta: "view_plans", location: "hero" }}
                className="text-xs font-medium uppercase tracking-[0.2em] text-white/85 underline-offset-8 transition-colors hover:text-white hover:underline"
              >
                {hero.ctaSecondary}
              </TrackedLink>
            </div>
          </div>

          {/* редакторський рядок статистики: тонкі лінії, без карток */}
          <div className="mt-8 grid grid-cols-2 border-t border-white/20 sm:mt-14 sm:grid-cols-4">
            {hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-3.5 sm:py-8 sm:pl-8 ${
                  i > 0 ? "sm:border-l sm:border-white/15" : ""
                }`}
              >
                <div className="font-head text-2xl font-normal text-white sm:text-[40px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase leading-snug tracking-[0.16em] text-white/55 sm:mt-2 sm:text-[11px] sm:tracking-[0.18em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
