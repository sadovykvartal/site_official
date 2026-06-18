import Image from "next/image";

/*
  Зображення секцій. Якщо передано src - показуємо реальне фото (next/image).
  Інакше - м'який градієнт (фолбек).
  ТИМЧАСОВІ фото: безкоштовні (Lorem Picsum, вільна ліцензія).
  Замінюються на рендери ЖК Садовий квартал у public/placeholders/.
*/
type PlaceholderProps = {
  src?: string;
  label?: string;
  hue?: number;
  className?: string;
  rounded?: string;
  priority?: boolean;
};

export default function Placeholder({
  src,
  label,
  hue = 150,
  className = "",
  rounded = "rounded-none",
  priority = false,
}: PlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={src}
          alt={label ?? ""}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        {label && (
          <span className="absolute bottom-3 left-3 z-10 bg-black/35 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            {label}
          </span>
        )}
      </div>
    );
  }

  const c1 = `hsl(${hue} 24% 78%)`;
  const c2 = `hsl(${hue + 20} 28% 58%)`;
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${c1}, ${c2})` }}
      aria-hidden={!label}
    >
      {label && (
        <span className="absolute bottom-3 left-3 bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
