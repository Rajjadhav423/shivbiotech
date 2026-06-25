'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import t, { type Lang } from './translations';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: typeof t['English'];
}

const LangContext = createContext<LangContextValue>({
  lang: 'English',
  setLang: () => {},
  tr: t['English'],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('English');

  useEffect(() => {
    const saved = localStorage.getItem('sb_lang') as Lang | null;
    if (saved && t[saved]) {
      queueMicrotask(() => setLangState(saved));
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('sb_lang', l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
