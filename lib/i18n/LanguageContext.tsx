"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { translations, Lang, LANGS, LANG_META, TranslationDict } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  locale: string;
  t: TranslationDict;
};

const STORAGE_KEY = "orbis-lang";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

/** Lingua iniziale del welcome book: ?lang= nell'URL > scelta salvata > lingua del browser > italiano. */
function detectLang(fallback: Lang): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (isLang(fromUrl)) return fromUrl;
  } catch {}
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {}
  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const l of browserLangs) {
    const code = l?.slice(0, 2).toLowerCase();
    if (isLang(code)) return code;
  }
  return fallback;
}

/**
 * - `initialLang`: lingua di partenza (nelle pagine del sito è quella dell'URL).
 * - `detect`: se true (welcome book) sceglie la lingua dall'URL/browser e ricorda la scelta.
 */
export function LanguageProvider({
  children,
  initialLang = "it",
  detect = false,
}: {
  children: ReactNode;
  initialLang?: Lang;
  detect?: boolean;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    if (detect) setLangState(detectLang(initialLang));
  }, [detect, initialLang]);

  useEffect(() => {
    if (detect) document.documentElement.lang = lang;
  }, [detect, lang]);

  const setLang = useCallback(
    (next: Lang) => {
      setLangState(next);
      if (detect) {
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch {}
      }
    },
    [detect]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, locale: LANG_META[lang].locale, t: translations[lang] }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
