'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl'

type Locale = 'en' | 'id'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null)

  useEffect(() => {
    const savedLocale = localStorage.getItem('language') as Locale
    if (savedLocale === 'en' || savedLocale === 'id') {
      setLocaleState(savedLocale)
    }
  }, [])

  useEffect(() => {
    async function loadMessages() {
      try {
        const msgs = (await import(`../../messages/${locale}.json`)).default
        setMessages(msgs)
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error)
      }
    }
    loadMessages()
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('language', newLocale)
  }

  if (!messages) {
    return null // Or a loading spinner
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within a I18nProvider')
  }
  return context
}
