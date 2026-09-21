import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbis in Sabina | Casa vacanze a Montopoli in Sabina",
  description:
    "Orbis in Sabina: casa vacanze di fascia alta a Montopoli in Sabina, cinque camere a tema continenti e area wellness, a un passo da Roma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body
        className={`${playfair.variable} ${jost.variable} font-sans text-sabina-50`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
