'use client'

import Image from 'next/image'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { siteConfig } from '@/config/site'

import { Button } from '@/components/ui/button'

export default function IntroductionSection() {
  const t = useTranslations('home.introduction')
  const common = useTranslations('common')

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-24 gap-12">
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2">
          <div className="w-16 h-[2px] bg-primary" />
          <span className="md:text-xl font-bold text-primary">{t('welcome')}</span>
        </div>
        <span
          className="text-5xl md:text-7xl font-bold"
          style={{ textShadow: '3px 3px hsla(var(--primary) / 0.4)' }}
        >
          {t('me')}
        </span>
        <div className="mt-4 flex flex-col">
          <span className="text-lg md:text-2xl font-bold">
            {t('passionate')} {t('developer')}
          </span>
          <span className="text-lg md:text-2xl font-bold text-foreground/50">{t('patron')}</span>
        </div>
        <div className="mt-2 flex gap-4">
          <Button className="text-lg font-bold flex gap-2" size="lg" asChild>
            <a href={siteConfig.links.github}>
              <SiGithub />
              {common('github')}
            </a>
          </Button>
          <Button className="text-lg font-bold flex gap-2" variant="secondary" size="lg" asChild>
            <a href={siteConfig.links.email}>
              <Mail />
              {common('email')}
            </a>
          </Button>
        </div>
      </div>
      <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group">
        <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
        <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden dark:bg-stone-900 bg-stone-200">
          <Image
            src="/my-photo.png"
            alt="My Photo"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>
      </div>
    </section>
  )
}
