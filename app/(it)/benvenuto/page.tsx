"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  activities,
  emergency,
  houseRules,
  restaurants,
  transport,
} from "@/lib/data/welcomeGuide";

function Divider() {
  return (
    <div className="section-divider my-16">
      <span className="section-divider__mark" aria-hidden="true" />
    </div>
  );
}

export default function BenvenutoPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <header className="border-b border-sabina-800 px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-serif text-lg tracking-wide text-sabina-50"
          >
            <span className="h-2 w-2 rotate-45 border border-sabina-400/70" aria-hidden="true" />
            Orbis in Sabina
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="nav-link font-sans text-xs uppercase tracking-widest text-sabina-100/80"
            >
              {t.welcome.backToSite}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <section id="benvenuto">
          <p className="section-eyebrow mb-3">{t.welcome.eyebrow}</p>
          <h1 className="section-title">{t.welcome.title}</h1>
          <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">{t.welcome.intro}</p>
          <p className="mt-6 font-sans text-sm text-sabina-300">{t.welcome.hostNote}</p>
        </section>

        <Divider />

        <section id="regole">
          <p className="section-eyebrow mb-3">{t.welcome.houseRules.eyebrow}</p>
          <h2 className="section-title">{t.welcome.houseRules.title}</h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="card-surface rounded-2xl p-5">
              <p className="font-serif text-xl text-sabina-50">{houseRules.checkIn[lang]}</p>
            </div>
            <div className="card-surface rounded-2xl p-5">
              <p className="font-serif text-xl text-sabina-50">{houseRules.checkOut[lang]}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {houseRules.items.map((item) => (
              <div key={item.title.it} className="card-surface rounded-2xl p-5">
                <h3 className="font-serif text-lg text-sabina-50">{item.title[lang]}</h3>
                <p className="mt-2 font-sans text-sm text-sabina-100/80">{item.text[lang]}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-sans text-sm text-sabina-300/80">{t.welcome.houseRules.thanks}</p>
        </section>

        <Divider />

        <section id="ristoranti">
          <p className="section-eyebrow mb-3">{t.welcome.restaurants.eyebrow}</p>
          <h2 className="section-title">{t.welcome.restaurants.title}</h2>
          <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">{t.welcome.restaurants.intro}</p>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-4 font-sans text-xs uppercase tracking-widest text-sabina-300">
                {t.welcome.restaurants.breakfastTitle}
              </p>
              <div className="flex flex-col gap-3">
                {restaurants.breakfast.map((r) => (
                  <div key={r.name} className="card-surface rounded-xl p-4">
                    <p className="font-serif text-base text-sabina-50">{r.name}</p>
                    <p className="mt-1 font-sans text-xs text-sabina-100/70">{r.tag[lang]}</p>
                  </div>
                ))}
              </div>

              <p className="mb-4 mt-8 font-sans text-xs uppercase tracking-widest text-sabina-300">
                {t.welcome.restaurants.casualTitle}
              </p>
              <div className="flex flex-col gap-3">
                {restaurants.casual.map((r) => (
                  <div key={r.name} className="card-surface rounded-xl p-4">
                    <p className="font-serif text-base text-sabina-50">{r.name}</p>
                    <p className="mt-1 font-sans text-xs text-sabina-100/70">{r.tag[lang]}</p>
                    {r.note && (
                      <p className="mt-1 font-sans text-xs text-sabina-300/70">{r.note[lang]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 font-sans text-xs uppercase tracking-widest text-sabina-300">
                {t.welcome.restaurants.localTitle}
              </p>
              <div className="flex flex-col gap-3">
                {restaurants.local.map((r) => (
                  <div key={r.name} className="card-surface rounded-xl p-4">
                    <p className="font-serif text-base text-sabina-50">{r.name}</p>
                    <p className="mt-1 font-sans text-xs text-sabina-100/70">{r.tag[lang]}</p>
                    {r.note && (
                      <p className="mt-1 font-sans text-xs text-sabina-300/70">{r.note[lang]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-3 font-sans text-xs uppercase tracking-widest text-sabina-300">
              {t.welcome.restaurants.tipsTitle}
            </p>
            <ul className="space-y-2">
              {restaurants.tips[lang].map((tip) => (
                <li
                  key={tip}
                  className="font-sans text-sm text-sabina-100/90 before:mr-2 before:text-sabina-400 before:content-['—']"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        <section id="attivita">
          <p className="section-eyebrow mb-3">{t.welcome.activities.eyebrow}</p>
          <h2 className="section-title">{t.welcome.activities.title}</h2>
          <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">{t.welcome.activities.intro}</p>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {[activities.village, activities.nearby].map((block) => (
              <div key={block.title.it}>
                <p className="mb-4 font-sans text-xs uppercase tracking-widest text-sabina-300">
                  {block.title[lang]}
                </p>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item.it}
                      className="font-sans text-sm text-sabina-100/90 before:mr-2 before:text-sabina-400 before:content-['—']"
                    >
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-3 font-sans text-xs uppercase tracking-widest text-sabina-300">
              {t.welcome.activities.tipsTitle}
            </p>
            <ul className="space-y-2">
              {activities.tips[lang].map((tip) => (
                <li
                  key={tip}
                  className="font-sans text-sm text-sabina-100/90 before:mr-2 before:text-sabina-400 before:content-['—']"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        <section id="trasporti">
          <p className="section-eyebrow mb-3">{t.welcome.transport.eyebrow}</p>
          <h2 className="section-title">{t.welcome.transport.title}</h2>
          <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">{t.welcome.transport.intro}</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[transport.car, transport.train, transport.local].map((block) => (
              <div key={block.title.it} className="card-surface rounded-2xl p-5">
                <h3 className="font-serif text-lg text-sabina-50">{block.title[lang]}</h3>
                <ul className="mt-3 space-y-2">
                  {block.items.map((item) => (
                    <li key={item.it} className="font-sans text-sm text-sabina-100/80">
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section id="emergenza">
          <p className="section-eyebrow mb-3">{t.welcome.emergency.eyebrow}</p>
          <h2 className="section-title">{t.welcome.emergency.title}</h2>
          <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">{t.welcome.emergency.intro}</p>

          <div className="mt-10">
            <p className="mb-4 font-sans text-xs uppercase tracking-widest text-sabina-300">
              {t.welcome.emergency.numbersTitle}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {emergency.numbers.map((n) => (
                <a
                  key={n.value}
                  href={`tel:${n.value.replace(/\s/g, "")}`}
                  className="card-surface rounded-xl p-4 text-center transition-colors duration-300 hover:border-sabina-400/50"
                >
                  <p className="font-serif text-2xl text-sabina-50">{n.value}</p>
                  <p className="mt-1 font-sans text-xs text-sabina-100/70">{n.name[lang]}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[emergency.hospital, emergency.pharmacy, emergency.supermarket].map((block) => (
              <div key={block.title.it} className="card-surface rounded-2xl p-5">
                <h3 className="font-serif text-lg text-sabina-50">{block.title[lang]}</h3>
                <ul className="mt-3 space-y-2">
                  {block.items.map((item) => (
                    <li key={item.it} className="font-sans text-sm text-sabina-100/80">
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
