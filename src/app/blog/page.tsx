import { Metadata } from 'next'

import DefaultLayout from '@/components/layouts/default-layout'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog',
  description:
    'Read my thoughts on software development, web technologies, game development, and 3D modeling.',
  tags: ['Blog', 'Programming', 'Software Development', 'Web Development', 'Technology'],
})

import { getAllPosts } from '@/lib/mdx'
import BlogList from '@/components/blocks/blog/blog-list'
import { Heading } from '@/components/ui/heading'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <DefaultLayout>
      <main className="flex flex-col gap-8 mb-24">
        <section className="flex flex-col gap-4">
          <Heading level={1}>Blog</Heading>
          <p className="text-muted-foreground text-lg">
            Read my thoughts on software development, web technologies, game development, and 3D
            modeling.
          </p>
        </section>

        <BlogList posts={posts} />
      </main>
    </DefaultLayout>
  )
}
