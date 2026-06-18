import { site } from "@/lib/content";

/*
  Структуровані дані Schema.org (JSON-LD) для локального SEO ЖК.
  Organization + WebSite + RealEstateAgent (NAP, гео, години, ціна) + ApartmentComplex.
*/

const phone = "+380973313355";
const address = {
  "@type": "PostalAddress",
  streetAddress: "вул. Загорська, 211",
  addressLocality: "Ужгород",
  addressRegion: "Закарпатська область",
  addressCountry: "UA",
};
const geo = {
  "@type": "GeoCoordinates",
  latitude: site.geo.lat,
  longitude: site.geo.lng,
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: "ЖК Садовий квартал",
      url: site.url,
      logo: `${site.url}/kvartal/logo.png`,
      image: `${site.url}/og.jpg`,
      telephone: phone,
      email: site.email,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "ЖК Садовий квартал — Ужгород",
      inLanguage: "uk-UA",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${site.url}/#salesoffice`,
      name: "Відділ продажу ЖК Садовий квартал",
      url: site.url,
      image: `${site.url}/og.jpg`,
      telephone: phone,
      email: site.email,
      priceRange: "$$",
      currenciesAccepted: "USD, UAH",
      address,
      geo,
      hasMap: site.mapUrl,
      areaServed: { "@type": "City", name: "Ужгород" },
      parentOrganization: { "@id": `${site.url}/#organization` },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "15:00",
        },
      ],
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${site.url}/#complex`,
      name: "Житловий комплекс «Садовий квартал»",
      description:
        "Сучасний житловий квартал в Ужгороді: 408 квартир, власна інфраструктура, газове опалення, підземний паркінг та комерція.",
      url: site.url,
      image: [`${site.url}/gallery/g2.jpg`, `${site.url}/og.jpg`],
      numberOfAccommodationUnits: 408,
      address,
      geo,
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
