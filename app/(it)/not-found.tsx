import type { Metadata } from "next";
import NotFoundPage from "@/components/pages/NotFoundPage";

export const metadata: Metadata = { title: "404 | Dimora Pangea", robots: { index: false } };

export default function NotFound() {
  return <NotFoundPage lang="it" />;
}
