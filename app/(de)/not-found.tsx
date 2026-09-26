import type { Metadata } from "next";
import NotFoundPage from "@/components/pages/NotFoundPage";

export const metadata: Metadata = { title: "404 | Orbis in Sabina", robots: { index: false } };

export default function NotFound() {
  return <NotFoundPage lang="de" />;
}
