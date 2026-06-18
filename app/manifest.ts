import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ЖК Садовий квартал — Ужгород",
    short_name: "Садовий квартал",
    description: "Сучасний житловий квартал в Ужгороді — 408 квартир, від $780/м².",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#488060",
    lang: "uk",
    icons: [
      {
        src: "/kvartal/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
