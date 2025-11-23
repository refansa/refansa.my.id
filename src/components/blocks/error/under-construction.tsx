'use client'

import Link from 'next/link'

import { HomeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/providers/language-provider'

export default function UnderConstruction() {
  const { dict } = useLanguage()

  return (
    <div className="flex font-mono gap-4 flex-col items-center tracking-wide">
      <span className="text-7xl md:text-9xl">501</span>
      <i className="text-xl md:text-2xl">{dict.underConstruction.title}</i>
      <p className="text-center">{dict.underConstruction.message}</p>
      <Button className="font-sans font-bold" variant="secondary">
        <Link className="flex gap-2 items-center" href="/">
          <HomeIcon />
          {dict.underConstruction.goHome}
        </Link>
      </Button>
    </div>
  )
}
