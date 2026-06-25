import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import TrackedLink from "./TrackedLink";
import { location, site } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

export default function Location() {
  return (
    <section id="infrastructure" className="container-sk py-[var(--spacing-section)]">
      <SectionHead index="04" badge="Розташування" title={location.title} subtitle={location.subtitle} />

      <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* вбудована карта Google з міткою */}
        <Reveal>
          <div className="overflow-hidden border border-line">
            <iframe
              src={site.mapEmbed}
              title="Карта - ЖК Садовий квартал, Ужгород, вул. Загорська, 211"
              className="aspect-square w-full lg:aspect-[4/3]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <TrackedLink
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            event="map_click"
            eventParams={{ location: "location" }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-opacity hover:opacity-80"
          >
            {location.mapCta}
            <span aria-hidden>→</span>
          </TrackedLink>
        </Reveal>

        {/* список зручностей */}
        <Reveal delay={100} className="grid grid-cols-2 gap-x-6 gap-y-8 xl:grid-cols-3">
          {location.items.map((item) => {
            const Glyph = Icon[item.icon as IconName];
            return (
              <div key={item.title} className="flex flex-col gap-3">
                <span className="flex h-12 w-12 items-center justify-center bg-gold/10 text-gold">
                  <Glyph width={22} height={22} />
                </span>
                <span className="text-sm font-medium text-ink">{item.title}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
