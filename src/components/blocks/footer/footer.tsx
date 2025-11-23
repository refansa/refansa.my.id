'use client'

import { useTranslations } from 'next-intl'

import Anchor from '@/components/anchor'
import Package from '../../../../package.json'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="flex flex-col gap-1 items-center mb-8 text-xs md:text-base">
      <p className="font-semibold text-center">
        {t('createdWith')} {t('by')}{' '}
        <Anchor href={Package.author.url} isExternal>
          {Package.author.nickname}
        </Anchor>
      </p>
    </footer>
  )
}
