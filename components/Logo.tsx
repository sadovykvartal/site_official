import Image from "next/image";

/* Логотип ЖК Садовий квартал (public/kvartal/logo.png, 466x112).
   Розмір керується через className (h-* w-auto) — щоб був адаптивним. */
export default function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/kvartal/logo.png"
      alt="ЖК Садовий квартал"
      width={466}
      height={112}
      priority
      className={className}
    />
  );
}
