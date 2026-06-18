import Logo from "./Logo";
import { site, documents } from "@/lib/content";

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.5c0-.3.2-.5.5-.5Z" />
    </svg>
  );
}
function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark-2 text-cream">
      <div className="container-sk flex flex-col items-center gap-8 py-14 sm:flex-row sm:justify-between">
        <div className="[&_img]:brightness-0 [&_img]:invert">
          <Logo />
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.social.facebook}
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            <FbIcon />
          </a>
          <a
            href={site.social.instagram}
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            <IgIcon />
          </a>
        </div>

        <div className="flex flex-col items-center gap-2.5 text-sm sm:items-end">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/45">
            Документи та дозволи
          </span>
          {documents.items.map((d) => (
            <a
              key={d.file}
              href={d.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-gold-soft"
            >
              {d.short ?? d.title}
              <span aria-hidden className="text-cream/40">↗</span>
            </a>
          ))}
          <span className="mt-2 text-xs text-cream/45">
            © {site.name}. Усі права захищені.
          </span>
        </div>
      </div>
    </footer>
  );
}
