'use client'

import Image from 'next/image'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Mail } from 'lucide-react'

import { siteConfig } from '@/config/site'

import { Button } from '@/components/ui/button'
import TermWord from '@/components/term-word'
import { useLanguage } from '@/components/providers/language-provider'

export default function IntroductionSection() {
  const { dict } = useLanguage()

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-24 gap-12">
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2">
          <div className="w-16 h-[2px] bg-primary" />
          <span className="md:text-xl font-bold text-primary">
            {dict.home.introduction.welcome}
          </span>
        </div>
        <span
          className="text-5xl md:text-7xl font-bold"
          style={{ textShadow: '3px 3px hsla(var(--primary) / 0.4)' }}
        >
          {dict.home.introduction.me}
        </span>
        <div className="mt-4 flex flex-col">
          <span className="text-lg md:text-2xl font-bold">
            {dict.home.introduction.passionate}{' '}
            <TermWord description={dict.home.introduction.selfTaughtDesc}>
              <i>{dict.home.introduction.selfTaught}</i>
            </TermWord>{' '}
            {dict.home.introduction.developer}
          </span>
          <span className="text-lg md:text-2xl font-bold text-foreground/50">
            {dict.home.introduction.patron}
          </span>
        </div>
        <div className="mt-2 flex gap-4">
          <Button className="text-lg font-bold flex gap-2" size="lg" asChild>
            <a href={siteConfig.links.github}>
              <SiGithub />
              {dict.common.github}
            </a>
          </Button>
          <Button className="text-lg font-bold flex gap-2" variant="secondary" size="lg" asChild>
            <a href={siteConfig.links.email}>
              <Mail />
              {dict.common.email}
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
