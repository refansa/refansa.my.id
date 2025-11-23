'use client'

import Anchor from '@/components/anchor'
import Package from '../../../../package.json'
import { useLanguage } from '@/components/providers/language-provider'

export default function Footer() {
  const { dict } = useLanguage()

  return (
    <footer className="flex flex-col gap-1 items-center mb-8 text-xs md:text-base">
      <p className="font-semibold text-center">
        {dict.footer.createdWith} {dict.footer.by}{' '}
        <Anchor href={Package.author.url} isExternal>
          {Package.author.nickname}
        </Anchor>
      </p>
    </footer>
  )
}
