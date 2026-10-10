import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'en' | 'vi'

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void } | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('portfolio-language') === 'vi' ? 'vi' : 'en')

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}

export function tr(language: Language, english: string, vietnamese: string) {
  return language === 'vi' ? vietnamese : english
}
