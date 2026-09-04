'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ContentLanguage } from '@/lib/doctorContent'

const STORAGE_KEY = 'rxprofile_content_lang'
const DEFAULT_CONTENT_LANG: ContentLanguage = 'bn'

interface ContentLanguageContextValue {
  lang: ContentLanguage
  availableLangs: ContentLanguage[]
  setLang: (lang: ContentLanguage) => void
}

const ContentLanguageContext = createContext<ContentLanguageContextValue>({
  lang: DEFAULT_CONTENT_LANG,
  availableLangs: [DEFAULT_CONTENT_LANG],
  setLang: () => {},
})

export function useContentLanguage() {
  return useContext(ContentLanguageContext)
}

export default function ContentLanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<ContentLanguage>(DEFAULT_CONTENT_LANG)
  const [availableLangs, setAvailableLangs] = useState<ContentLanguage[]>([DEFAULT_CONTENT_LANG])

  useEffect(() => {
    // Fetch available languages from API
    fetch('/dr-aysharja/api/available-languages')
      .then(res => res.json())
      .then(data => {
        const available = data.languages as ContentLanguage[]
        setAvailableLangs(available)
        
        // Check if stored language is still available
        const stored = localStorage.getItem(STORAGE_KEY) as ContentLanguage | null
        if (stored && available.includes(stored)) {
          setLangState(stored)
        } else {
          setLangState(available[0] ?? DEFAULT_CONTENT_LANG)
        }
      })
      .catch(err => {
        console.error('Failed to fetch available languages:', err)
        setAvailableLangs([DEFAULT_CONTENT_LANG])
      })
  }, [])

  function setLang(next: ContentLanguage) {
    if (availableLangs.includes(next)) {
      setLangState(next)
      localStorage.setItem(STORAGE_KEY, next)
    }
  }

  return (
    <ContentLanguageContext.Provider value={{ lang, availableLangs, setLang }}>
      {children}
    </ContentLanguageContext.Provider>
  )
}
