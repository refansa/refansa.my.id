'use client'

import { useTranslations } from 'next-intl'

import { siteConfig } from '@/config/site'

import { Heading } from '@/components/ui/heading'
import Anchor from '@/components/anchor'

export default function ContactSection() {
  const t = useTranslations('home.contact')

  return (
    <section className="flex flex-col gap-6 text-xs md:text-base tracking-wide leading-relaxed">
      <Heading level={3}>{t('title')}</Heading>

      <div className="flex flex-col gap-2">
        <span>
          {t('email')}: <Anchor href={siteConfig.links.email}>{siteConfig.email}</Anchor>
        </span>
      </div>
    </section>
  )
}
