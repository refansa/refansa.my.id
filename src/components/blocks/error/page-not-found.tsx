'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { HomeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function PageNotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="flex font-mono gap-4 flex-col items-center tracking-wide">
      <span className="text-7xl md:text-9xl">404</span>
      <i className="text-xl md:text-2xl">{t('title')}</i>
      <p className="text-center">{t('message')}</p>
      <Button className="font-sans font-bold" variant="secondary">
        <Link className="flex gap-2 items-center" href="/">
          <HomeIcon />
          {t('goHome')}
        </Link>
      </Button>
    </div>
  )
}
