import Link from 'next/link'

import { UrlObject } from 'url'

import { HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLAnchorElement> {
  href: string | UrlObject
  /**
   * Whether the type of the anchor is for external or internal links.
   *
   * @default false
   */
  isExternal?: boolean
}

export default function Anchor({ href, isExternal = false, children, ...rest }: Props) {
  return !isExternal ? (
    <Link className="underline hover:text-foreground/80" href={href} {...rest}>
      {children}
    </Link>
  ) : (
    <a className="underline hover:text-foreground/80" href={href.toString()} {...rest}>
      {children}
    </a>
  )
}
