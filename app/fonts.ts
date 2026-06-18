import localFont from "next/font/local";

/*
  Fixel - офіційний безкоштовний український шрифт від MacPaw (github.com/MacPaw/Fixel).
  Той самий шрифт, що в оригіналі-прототипі.
  FixelText - для body, FixelDisplay - для заголовків.
*/

export const fixelText = localFont({
  variable: "--font-fixel-text",
  display: "swap",
  src: [
    { path: "../public/fonts/FixelText-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/FixelText-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/FixelText-SemiBold.woff2", weight: "600", style: "normal" },
  ],
});

export const fixelDisplay = localFont({
  variable: "--font-fixel-display",
  display: "swap",
  src: [
    { path: "../public/fonts/FixelDisplay-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/FixelDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/FixelDisplay-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
});
