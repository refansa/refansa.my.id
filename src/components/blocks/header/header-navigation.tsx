'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { MenuIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import NavigationItem from '@/components/blocks/header/navigation-item'
import { useLanguage } from '@/components/providers/language-provider'

const Clock = dynamic(() => import('@/components/clock').then((mod) => mod.Clock), {
  loading: () => <Skeleton className="md:w-52 w-[100px] h-7" />,
  ssr: false,
})

const ThemeSwitch = dynamic(
  () => import('@/components/theme-switch').then((mod) => mod.ThemeSwitch),
  {
    loading: () => <Skeleton className="w-10 h-10" />,
    ssr: false,
  },
)

const LanguageSwitch = dynamic(
  () => import('@/components/language-switch').then((mod) => mod.LanguageSwitch),
  {
    loading: () => <Skeleton className="w-10 h-10" />,
    ssr: false,
  },
)

export default function HeaderNavigation() {
  const pathname = usePathname()
  const { dict } = useLanguage()

  const smoothHeaderScroll = (e: any) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="flex h-16 p-2 items-center">
      <div className="flex-1">
        <Link href="/" className="font-bold text-xl" onClick={smoothHeaderScroll}>
          Refansa
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <Clock />
      </div>
      <div id="Desktop" className="flex-1 hidden md:flex gap-4 items-center justify-end">
        <NavigationItem href="/blog">{dict.common.blog}</NavigationItem>
        <NavigationItem href="/projects">{dict.common.projects}</NavigationItem>
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
      <div id="Mobile" className="flex-1 flex md:hidden justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="flex gap-2 justify-between px-2">
                <div className="flex gap-2">
                  <ThemeSwitch starterId={10} />
                  <LanguageSwitch />
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <XIcon />
                  </Button>
                </SheetClose>
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-2">
                <NavigationItem href="/blog">{dict.common.blog}</NavigationItem>
                <NavigationItem href="/projects">{dict.common.projects}</NavigationItem>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
