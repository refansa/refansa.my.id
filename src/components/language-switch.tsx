'use client'

import { Button } from '@/components/ui/button'
import { useI18n } from '@/components/providers/i18n-provider'

export function LanguageSwitch() {
  const { locale, setLocale } = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'id' : 'en')
  }

  const getLanguageLabel = () => {
    return `Switch to ${locale === 'en' ? 'Indonesian' : 'English'}`
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="font-bold w-10 px-0"
      onClick={toggleLanguage}
      aria-label={getLanguageLabel()}
      title={getLanguageLabel()}
    >
      {locale.toUpperCase()}
    </Button>
  )
}
