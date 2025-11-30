import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectMetadata } from '@/lib/mdx'
import { Heading } from '@/components/ui/heading'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: ProjectMetadata
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-6 p-8 border border-border/50 rounded-2xl bg-linear-to-br from-card to-card/50 hover:from-card hover:to-primary/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex flex-col gap-3">
        <Heading
          level={3}
          withLink={false}
          className="group-hover:text-primary transition-colors text-2xl"
        >
          {project.frontMatter.title}
        </Heading>
        <p className="text-muted-foreground line-clamp-2 text-base leading-relaxed">
          {project.frontMatter.description}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-2 items-center">
          <span
            className={cn(
              'px-2.5 py-0.5 text-xs font-medium rounded-full border',
              project.frontMatter.status === 'Maintained' &&
                'bg-green-500/10 text-green-500 border-green-500/20',
              project.frontMatter.status === 'Completed' &&
                'bg-blue-500/10 text-blue-500 border-blue-500/20',
              project.frontMatter.status === 'Archived' &&
                'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
              project.frontMatter.status === 'Abandoned' &&
                'bg-red-500/10 text-red-500 border-red-500/20',
            )}
          >
            {project.frontMatter.status}
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full border bg-muted/50 text-muted-foreground border-border/50">
            {project.frontMatter.type}
          </span>
          {project.frontMatter.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-secondary/50 text-secondary-foreground border border-border/50"
            >
              {tag}
            </span>
          ))}
          {project.frontMatter.tags.length > 2 && (
            <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-secondary/50 text-secondary-foreground border border-border/50">
              +{project.frontMatter.tags.length - 2}
            </span>
          )}
        </div>

        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  )
}
