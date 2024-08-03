import { MDXComponents } from 'mdx/types'

import Anchor from '@/components/anchor'
import TermWord from '@/components/term-word'
import { Heading } from '@/components/ui/heading'

export const components: MDXComponents = {
  Anchor,
  TermWord,
  Heading,
  p(props) {
    return <p className="tracking-wide leading-relaxed">{props.children}</p>
  },
  h1(props) {
    return <Heading level={1}>{props.children as string}</Heading>
  },
  h2(props) {
    return <Heading level={2}>{props.children as string}</Heading>
  },
  h3(props) {
    return <Heading level={3}>{props.children as string}</Heading>
  },
  h4(props) {
    return <Heading level={4}>{props.children as string}</Heading>
  },
  h5(props) {
    return <Heading level={5}>{props.children as string}</Heading>
  },
  h6(props) {
    return <Heading level={6}>{props.children as string}</Heading>
  },
  code(props) {
    return (
      <code className="bg-gray-500/20 text-foreground/50 p-1 tracking-normal">
        {props.children}
      </code>
    )
  },
  blockquote(props) {
    return (
      <blockquote className="bg-gray-500/20 my-3 px-4 py-6 border-l-8 border-gray-500/50">
        {props.children}
      </blockquote>
    )
  },
}
