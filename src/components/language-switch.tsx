'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/providers/language-provider'

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ID' : 'EN')
  }

  const getLanguageLabel = () => {
    return `Switch to ${language === 'EN' ? 'Indonesian' : 'English'}`
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
      {language}
    </Button>
  )
}
