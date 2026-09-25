import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n/translations";
import type { PageKey } from "@/lib/site";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileActionBar from "@/components/site/MobileActionBar";

export default function Shell({
  lang,
  current,
  roomSlugIt,
  overHero,
  children,
}: {
  lang: Lang;
  current: PageKey;
  roomSlugIt?: string;
  overHero?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <Header lang={lang} current={current} roomSlugIt={roomSlugIt} overHero={overHero} />
      <main id="contenuto">{children}</main>
      <Footer lang={lang} current={current} roomSlugIt={roomSlugIt} />
      <MobileActionBar lang={lang} />
    </>
  );
}
