'use client'

import { siteConfig } from '@/config/site'

import { Heading } from '@/components/ui/heading'
import Anchor from '@/components/anchor'
import { useLanguage } from '@/components/providers/language-provider'

export default function ContactSection() {
  const { dict } = useLanguage()

  return (
    <section className="flex flex-col gap-4 text-xs md:text-base tracking-wide leading-relaxed">
      <Heading level={3}>{dict.home.contact.title}</Heading>
      <div className="flex flex-col gap-2">
        <span>
          {dict.home.contact.email}:{' '}
          <Anchor href={siteConfig.links.email}>{siteConfig.email}</Anchor>
        </span>
        <span>
          {dict.home.contact.tel}: <Anchor href={siteConfig.links.tel}>{siteConfig.tel}</Anchor>
        </span>
      </div>
    </section>
  )
}
