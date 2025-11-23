'use client'

import TermWord from '@/components/term-word'
import { Heading } from '@/components/ui/heading'
import { useLanguage } from '@/components/providers/language-provider'

export default function AboutSection() {
  const { dict } = useLanguage()

  return (
    <section className="flex flex-col gap-4 tracking-wide leading-relaxed text-xs md:text-base">
      <Heading level={3}>{dict.home.about.title}</Heading>
      <p>
        {dict.home.about.intro}{' '}
        <TermWord description={dict.home.about.niceToMeetYouDesc}>
          {dict.home.about.niceToMeetYou}
        </TermWord>
      </p>
      <p>{dict.home.about.humbleAbode}</p>
      <p>{dict.home.about.loveComplexity}</p>
      <p>{dict.home.about.openSource}</p>
      <p>
        <em className="text-foreground/50">
          {dict.home.about.archBtw}{' '}
          <TermWord description={dict.home.about.archDesc}>
            <em>arch</em>
          </TermWord>{' '}
          {dict.home.about.archBtwSuffix}
        </em>
        .
      </p>
    </section>
  )
}
