import type { Metadata, Viewport } from "next";
import "../globals.css";
import { playfair, jost } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Dimora Pangea",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#140f0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${jost.variable} font-sans text-sabina-50`}>
        {children}
      </body>
    </html>
  );
}
