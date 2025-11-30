'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { siteConfig } from '@/config/site'

export default function Footer() {
  const t = useTranslations('common')

  return (
    <footer className="flex flex-col gap-1 items-center mb-8 text-xs md:text-base">
      <p className="font-semibold text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <Link href={siteConfig.links.pgp} className="hover:underline">
        {t('pgp')}
      </Link>
    </footer>
  )
}
