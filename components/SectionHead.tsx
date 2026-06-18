import Reveal from "./Reveal";

/* Редакторський заголовок секції: нумерований eyebrow + велика тонка гарнітура + hairline. */
export default function SectionHead({
  badge,
  index,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  badge?: string;
  index?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const center = align === "center";
  const alignCls = center ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignCls} ${className}`}>
      {(index || badge) && (
        <span className="eyebrow mb-5">
          {index && <span className="eyebrow-num">{index}</span>}
          {index && badge && <span className="eyebrow-slash">/</span>}
          {badge}
        </span>
      )}
      <h2 className="h-display text-4xl sm:text-5xl lg:text-[58px]">{title}</h2>
      <span className={`sk-rule mt-7 ${center ? "sk-rule--center" : ""}`} aria-hidden />
      {subtitle && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
