import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/site";

const t = content.en.home;
export const metadata: Metadata = pageMeta("en", "home", t.metaTitle, t.metaDescription);

export default function Page() {
  return <HomePage lang="en" />;
}
