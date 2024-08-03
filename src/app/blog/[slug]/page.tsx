import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { components } from '@/components/mdx-components'

const BLOG_PATH = path.join('src', 'contents', 'posts')

export interface Props {
  params: {
    slug: string
  }
}

type FrontMatterMetadata = {
  siteTitle: string
  postTitle: string
  siteDescription: string
  postDescription: string
  publishedOn: string
  updatedOn: string
  isPublished: boolean
  tags: string[]
}

export interface PostMetadata {
  slug: string
  frontMatter: FrontMatterMetadata
  content: string
}

/**
 * Get the post from file system, matching the provided slug from the route params.
 */
function getPost(slug: string): PostMetadata {
  try {
    const markdownFile = fs.readFileSync(path.join(BLOG_PATH, slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    if (!frontMatter.isPublished) {
      throw new Error('Post is currently not published yet!')
    }

    return {
      frontMatter: frontMatter as FrontMatterMetadata,
      slug,
      content,
    }
  } catch {
    /*
     * Catch any possible error (could be no slug exists, post has not been published,
     * or something wrong with the fs) above and just render not found.
     */
    notFound()
  }
}

/**
 * Statically generate routes at build time.
 *
 * See: <https://nextjs.org/docs/app/api-reference/functions/generate-static-params>
 */
export async function generateStaticParams(): Promise<string[]> {
  const files = fs.readdirSync(BLOG_PATH)

  const slugPaths = files.map((filename) => filename.replace('.mdx', ''))

  return slugPaths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const post = getPost(slug)

  return {
    title: post.frontMatter.siteTitle,
    description: post.frontMatter.siteDescription,
  }
}

export default function Post({ params }: Props) {
  const { slug } = params

  const post = getPost(slug)

  return (
    <main className="flex flex-col gap-4 my-8">
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
