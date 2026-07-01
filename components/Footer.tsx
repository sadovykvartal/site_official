import Logo from "./Logo";
import TrackedLink from "./TrackedLink";
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
function YtIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.8C19.3 5 12 5 12 5s-7.3 0-8.9.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.8C4.7 19 12 19 12 19s7.3 0 8.9-.5a2.5 2.5 0 0 0 1.7-1.8C23 15.2 23 12 23 12ZM9.8 15.3V8.7l6 3.3-6 3.3Z" />
    </svg>
  );
}
function TtIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c.28 2.02 1.5 3.62 3.5 4.02V9.6c-1.3 0-2.55-.4-3.7-1.1v5.86A5.68 5.68 0 1 1 10.6 8.7c.3 0 .6.02.9.07v2.77a2.9 2.9 0 1 0 2 2.76V3h3Z" />
    </svg>
  );
}

export default function Footer() {
  const socials = [
    { label: "Facebook", href: site.social.facebook, Icon: FbIcon },
    { label: "Instagram", href: site.social.instagram, Icon: IgIcon },
    { label: "YouTube", href: site.social.youtube, Icon: YtIcon },
    { label: "TikTok", href: site.social.tiktok, Icon: TtIcon },
  ].filter((s) => s.href && s.href !== "#");

  return (
    <footer className="bg-dark-2 text-cream">
      <div className="container-sk flex flex-col items-center gap-8 py-14 sm:flex-row sm:justify-between">
        <div className="[&_img]:brightness-0 [&_img]:invert">
          <Logo />
        </div>

        {socials.length > 0 && (
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <TrackedLink
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                event="social_click"
                eventParams={{ network: label }}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                <Icon />
              </TrackedLink>
            ))}
          </div>
        )}

        <div className="flex flex-col items-center gap-2.5 text-sm sm:items-end">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/45">
            Документи та дозволи
          </span>
          {documents.items.map((d) => (
            <TrackedLink
              key={d.file}
              href={d.file}
              target="_blank"
              rel="noopener noreferrer"
              event="document_view"
              eventParams={{ document: d.short ?? d.title }}
              className="inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-gold-soft"
            >
              {d.short ?? d.title}
              <span aria-hidden className="text-cream/40">↗</span>
            </TrackedLink>
          ))}
          <span className="mt-2 text-xs text-cream/45">
            © {site.name}. Усі права захищені.
          </span>
        </div>
      </div>
    </footer>
  );
}
