import Link from 'next/link'

import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'

export type Props = {
  children: ReactNode
  href: string
}

export default function NavigationItem({ children, href }: Props) {
  return (
    <Button asChild variant="ghost">
      <Link href={href}>
        <span className="font-bold">{children}</span>
      </Link>
    </Button>
  )
}
