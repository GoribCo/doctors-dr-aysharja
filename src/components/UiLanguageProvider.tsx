'use client'

import { createContext, useContext } from 'react'
import { useContentLanguage } from './ContentLanguageProvider'
import { type UiLang, type Translations, translations } from '@/lib/i18n'


interface UiLangContextValue {
  lang: UiLang
  t: Translations
  setLang: (lang: UiLang) => void
}

const UiLangContext = createContext<UiLangContextValue>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
})

export function useUiLang() {
  return useContext(UiLangContext)
}

export default function UiLanguageProvider({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useContentLanguage()

  return (
    <UiLangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </UiLangContext.Provider>
  )
}
