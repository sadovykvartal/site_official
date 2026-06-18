import Image from "next/image";

/* Логотип ЖК Садовий квартал (public/kvartal/logo.png, 466x112). */
export default function Logo({
  className = "",
  height = 44,
}: {
  className?: string;
  height?: number;
  /** залишено для сумісності зі старим API */
  tone?: "gold" | "white";
}) {
  const width = Math.round((height * 466) / 112);
  return (
    <Image
      src="/kvartal/logo.png"
      alt="ЖК Садовий квартал"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
