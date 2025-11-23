'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Dictionary, en, id } from '@/config/dictionaries'

type Language = 'EN' | 'ID'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dict: Dictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

declare global {
  interface Document {
    startViewTransition(callback: () => void): void
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'EN' || savedLanguage === 'ID')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setLanguage(lang)
        localStorage.setItem('language', lang)
      })
    } else {
      setLanguage(lang)
      localStorage.setItem('language', lang)
    }
  }

  const dict = language === 'EN' ? en : id

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
