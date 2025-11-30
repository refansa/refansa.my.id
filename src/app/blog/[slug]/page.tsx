import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { components } from '@/components/mdx-components'
import { getPost, getAllPosts } from '@/lib/mdx'

export interface Props {
  params: Promise<{
    slug: string
  }>
}

/**
 * Statically generate routes at build time.
 *
 * See: <https://nextjs.org/docs/app/api-reference/functions/generate-static-params>
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.frontMatter.siteTitle,
    description: post.frontMatter.siteDescription,
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return notFound()
  }

  return (
    <main className="flex flex-col gap-4 my-8">
      <Link
        href="/blog"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Blog</span>
      </Link>

      <div id="post-detail" className="flex flex-col gap-2 mb-2">
        <h1 id="post-title" className="text-3xl md:text-4xl font-bold">
          {post.frontMatter.postTitle}
        </h1>
        <span id="post-description" className="text-base md:text-lg">
          {post.frontMatter.postDescription}
        </span>
        <div id="post-tags" className="flex gap-2 mb-4">
          {post.frontMatter.tags.map((tag: string, index: number) => {
            return (
              <span key={index} className="px-2 py-1 rounded-lg bg-primary/30 text-xs">
                #{tag}
              </span>
            )
          })}
        </div>
        <div id="post-publication-date" className="flex gap-2 font-bold text-xs">
          <span>PUBLISHED ON: {post.frontMatter.publishedOn}</span>
          {post.frontMatter.updatedOn !== post.frontMatter.publishedOn ? (
            <>
              <span>|</span>
              <span>UPDATED ON: {post.frontMatter.updatedOn}</span>
            </>
          ) : null}
        </div>
      </div>
      <hr />
      <article id="post-content" className="flex flex-col gap-4">
        <MDXRemote source={post.content} components={components} />
      </article>
    </main>
  )
}
