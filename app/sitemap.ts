import type { MetadataRoute } from "next";
import { rooms } from "@/lib/data/rooms";
import { LANGS } from "@/lib/i18n/translations";
import { SITE_URL, href, hrefAll, type PageKey } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { page: PageKey; slug?: string }[] = [
    { page: "home" },
    { page: "rooms" },
    ...rooms.map((r) => ({ page: "room" as const, slug: r.slug.it })),
    { page: "house" },
    { page: "territory" },
    { page: "contact" },
  ];
  return pages.flatMap(({ page, slug }) =>
    LANGS.map((lang) => ({
      url: `${SITE_URL}${href(lang, page, slug)}`,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(hrefAll(page, slug)).map(([l, path]) => [l, `${SITE_URL}${path}`])
        ),
      },
    }))
  );
}
