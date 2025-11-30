'use client'

import { PostMetadata } from '@/lib/mdx'
import BlogCard from './blog-card'

interface BlogListProps {
  posts: PostMetadata[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
