import Link from 'next/link'

import { UrlObject } from 'url'

import { HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLAnchorElement> {
  href: string | UrlObject
}

export default function Anchor({ href, children, ...rest }: Props) {
  return (
    <Link className="underline hover:text-foreground/80" href={href} {...rest}>
      {children}
    </Link>
  )
}
