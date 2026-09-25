import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Benvenuti | Orbis in Sabina",
  robots: { index: false, follow: false },
};

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider initialLang="it" detect>{children}</LanguageProvider>;
}
