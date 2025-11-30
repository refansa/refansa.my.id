import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { useFormatter } from 'next-intl'
import { PostMetadata } from '@/lib/mdx'
import { Heading } from '@/components/ui/heading'

interface BlogCardProps {
  post: PostMetadata
}

export default function BlogCard({ post }: BlogCardProps) {
  const format = useFormatter()

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-6 p-8 border border-border/50 rounded-2xl bg-linear-to-br from-card to-card/50 hover:from-card hover:to-primary/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex flex-col gap-3">
        <Heading
          level={3}
          withLink={false}
          className="group-hover:text-primary transition-colors text-2xl"
        >
          {post.frontMatter.postTitle}
        </Heading>
        <p className="text-muted-foreground line-clamp-2 text-base leading-relaxed">
          {post.frontMatter.postDescription}
        </p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={post.frontMatter.publishedOn}>
            {format.dateTime(new Date(post.frontMatter.publishedOn), {
              dateStyle: 'medium',
            })}
          </time>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-2 items-center">
          {post.frontMatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-secondary/50 text-secondary-foreground border border-border/50"
            >
              {tag}
            </span>
          ))}
          {post.frontMatter.tags.length > 3 && (
            <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-secondary/50 text-secondary-foreground border border-border/50">
              +{post.frontMatter.tags.length - 3}
            </span>
          )}
        </div>

        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  )
}
