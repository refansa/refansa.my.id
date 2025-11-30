import Link from 'next/link'

import slug from 'slug'

import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type HeadingProps = HTMLAttributes<HTMLHeadingElement>

export interface Props extends HeadingProps {
  children: string
  /**
   * Heading level, each level represent the HTML heading level.
   * @min 1
   * @max 6
   */
  level: number
  /**
   * If `true`, the heading will be associated with a hash link.
   * @default true
   */
  withLink?: boolean
}

const HashLink = ({ text }: { text: string }) => {
  return (
    <>
      <Link
        href={`#${slug(text)}`}
        className="group-hover/heading:opacity-100 opacity-0 transition-opacity ease-in-out duration-500 text-foreground/40"
      >
        #
      </Link>
      <div id={slug(text)} className="relative invisible -top-24" />
    </>
  )
}

export function Heading({ children, level, withLink = true, ...rest }: Props) {
  const defaultClasses = ['group/heading', 'font-bold', 'flex', 'items-center', 'gap-4', 'mb-2']

  switch (level) {
    case 1:
      return (
        <h1 {...rest} className={cn(defaultClasses, 'text-3xl md:text-5xl', rest.className)}>
          {children}
          {withLink ? <HashLink text={children} /> : null}
        </h1>
      )
    case 2:
      return (
        <h2 {...rest} className={cn(defaultClasses, 'text-2xl md:text-4xl', rest.className)}>
          {children}
          {withLink ? <HashLink text={children} /> : null}
        </h2>
      )
    case 3:
      return (
        <h3 {...rest} className={cn(defaultClasses, 'text-xl md:text-3xl', rest.className)}>
          {children}
          {withLink ? <HashLink text={children} /> : null}
        </h3>
      )
    case 4:
      return (
        <h4 {...rest} className={cn(defaultClasses, 'text-lg md:text-2xl', rest.className)}>
          {children}
          {withLink ? <HashLink text={children} /> : null}
        </h4>
      )
    case 5:
      return (
        <h5 {...rest} className={cn(defaultClasses, 'text-base md:text-xl', rest.className)}>
          {children}
          {withLink ? <HashLink text={children} /> : null}
        </h5>
      )
    case 6:
      return (
        <h6 {...rest} className={cn(defaultClasses, 'text-sm md:text-lg', rest.className)}>
          {children}
          {withLink ? <HashLink text={children} /> : null}
        </h6>
      )
  }
}
