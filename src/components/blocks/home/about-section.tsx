'use client'

import { useTranslations } from 'next-intl'
import TermWord from '@/components/term-word'
import { Heading } from '@/components/ui/heading'

export default function AboutSection() {
  const t = useTranslations('home.about')

  return (
    <section className="flex flex-col gap-4 tracking-wide leading-relaxed text-xs md:text-base">
      <Heading level={3}>{t('title')}</Heading>
      <p>
        {t('intro')} <TermWord description={t('niceToMeetYouDesc')}>{t('niceToMeetYou')}</TermWord>
      </p>
      <p>{t('humbleAbode')}</p>
      <p>{t('loveComplexity')}</p>
      <p>{t('openSource')}</p>
      <p>
        <em className="text-foreground/50">
          {t('archBtw')}{' '}
          <TermWord description={t('archDesc')}>
            <em>arch</em>
          </TermWord>{' '}
          {t('archBtwSuffix')}
        </em>
        .
      </p>
    </section>
  )
}
