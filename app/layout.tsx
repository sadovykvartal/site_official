import type { Metadata } from "next";
import Script from "next/script";
import { fixelText, fixelDisplay } from "./fonts";
import { site } from "@/lib/content";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const GTM_ID = "GTM-MJ6CCX7Z";

const title = "Купити квартиру в Ужгороді | ЖК Садовий квартал";
const description =
  "ЖК Садовий квартал - сучасний житловий квартал в Ужгороді на вул. Загорській, 211. 408 квартир, від $780/м², розтермінування до 36 місяців без першого внеску, газове опалення.";
const ogDescription =
  "Сучасний житловий квартал в Ужгороді. 408 квартир, від $780/м², розтермінування до 36 місяців без першого внеску.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | ЖК Садовий квартал",
  },
  description,
  keywords: [
    "купити квартиру в Ужгороді",
    "ЖК Садовий квартал",
    "новобудова Ужгород",
    "квартири Ужгород",
    "квартира від забудовника Ужгород",
    "розтермінування квартири Ужгород",
    "новобудови Закарпаття",
    "квартири вул. Загорська Ужгород",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: site.url,
    siteName: "ЖК Садовий квартал",
    title,
    description: ogDescription,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "ЖК Садовий квартал — сучасний житловий квартал в Ужгороді",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ogDescription,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Іконки беруться з конвенцій app/: icon.png, apple-icon.png, favicon.ico
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className={`${fixelText.variable} ${fixelDisplay.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
