import { MDXComponents } from 'mdx/types'

import Anchor from '@/components/anchor'
import TermWord from '@/components/term-word'
import { Heading } from '@/components/ui/heading'

export const components: MDXComponents = {
  Anchor,
  TermWord,
  Heading,
  p(props) {
    return <p className="tracking-wide leading-relaxed my-6">{props.children}</p>
  },
  h1(props) {
    return (
      <Heading level={1} className="mt-10 mb-6">
        {props.children as string}
      </Heading>
    )
  },
  h2(props) {
    return (
      <Heading level={2} className="mt-10 mb-6">
        {props.children as string}
      </Heading>
    )
  },
  h3(props) {
    return (
      <Heading level={3} className="mt-8 mb-4">
        {props.children as string}
      </Heading>
    )
  },
  h4(props) {
    return (
      <Heading level={4} className="mt-8 mb-4">
        {props.children as string}
      </Heading>
    )
  },
  h5(props) {
    return (
      <Heading level={5} className="mt-6 mb-3">
        {props.children as string}
      </Heading>
    )
  },
  h6(props) {
    return (
      <Heading level={6} className="mt-6 mb-3">
        {props.children as string}
      </Heading>
    )
  },
  code(props) {
    return (
      <code className="bg-muted text-muted-foreground p-1 rounded-md tracking-normal">
        {props.children}
      </code>
    )
  },
  blockquote(props) {
    return (
      <blockquote className="bg-muted/50 my-6 px-6 py-8 border-l-4 border-primary/50 italic rounded-r-lg">
        {props.children}
      </blockquote>
    )
  },
  ul(props) {
    return <ul className="my-6 ml-6 list-disc marker:text-primary">{props.children}</ul>
  },
  ol(props) {
    return <ol className="my-6 ml-6 list-decimal marker:text-primary">{props.children}</ol>
  },
  li(props) {
    return <li className="my-2 pl-2">{props.children}</li>
  },
}
