'use client'

import { useTranslations } from 'next-intl'
import { Heading } from '@/components/ui/heading'
import { Briefcase, Code, Star } from 'lucide-react'

export default function TimelineSection() {
  const t = useTranslations('home.timeline')
  const years = ['2018', '2021', '2023', 'Present']

  const getIcon = (year: string) => {
    switch (year) {
      case '2018':
        return <Code className="w-5 h-5" />
      case '2021':
        return <Briefcase className="w-5 h-5" />
      case '2023':
        return <Briefcase className="w-5 h-5" />
      case 'Present':
        return <Star className="w-5 h-5" />
      default:
        return <Star className="w-5 h-5" />
    }
  }

  return (
    <section className="flex flex-col gap-8 tracking-wide leading-relaxed text-xs md:text-base">
      <Heading level={3}>{t('title')}</Heading>
      <div className="relative container mx-auto px-4">
        {/* Horizontal Line */}
        <div className="absolute top-2.5 left-0 w-full h-0.5 bg-border z-0" />

        <div className="flex justify-between relative z-10 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {years.map((year) => (
            <div key={year} className="flex flex-col items-center min-w-[150px] snap-center gap-4">
              {/* Dot */}
              <div className="w-5 h-5 rounded-full bg-background border-2 border-primary z-10" />

              {/* Content */}
              <div className="text-center flex flex-col gap-2 px-2">
                <span className="text-sm font-mono text-primary/80 font-bold">{year}</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-muted-foreground mb-1">{getIcon(year)}</div>
                  <h4 className="font-bold text-base">{t(`items.${year}.title`)}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">
                    {t(`items.${year}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
