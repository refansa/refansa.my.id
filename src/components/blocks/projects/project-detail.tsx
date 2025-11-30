'use client'

import { ReactNode } from 'react'
import { Calendar, Github, ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/components/providers/i18n-provider'
import { ProjectFrontMatter } from '@/lib/mdx'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProjectDetailProps {
  translations: Record<
    string,
    {
      frontMatter: ProjectFrontMatter
      content: ReactNode
    }
  >
}

export default function ProjectDetail({ translations }: ProjectDetailProps) {
  const { locale } = useI18n()

  const currentData = translations[locale] || translations['en'] || Object.values(translations)[0]

  if (!currentData) return null

  const { frontMatter, content } = currentData

  return (
    <main className="flex flex-col gap-12 mb-24">
      {/* Hero Section */}
      <section className="flex flex-col gap-6 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="flex flex-col gap-4">
          <Heading level={1} className="text-5xl md:text-7xl font-extrabold tracking-tight">
            {frontMatter.title}
          </Heading>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            {frontMatter.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <span
            className={cn(
              'px-3 py-1 text-sm font-medium rounded-full border',
              frontMatter.status === 'Maintained' &&
                'bg-green-500/10 text-green-500 border-green-500/20',
              frontMatter.status === 'Completed' &&
                'bg-blue-500/10 text-blue-500 border-blue-500/20',
              frontMatter.status === 'Archived' &&
                'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
              frontMatter.status === 'Abandoned' && 'bg-red-500/10 text-red-500 border-red-500/20',
            )}
          >
            {frontMatter.status}
          </span>
          <span className="px-3 py-1 text-sm font-medium rounded-full border bg-muted/50 text-muted-foreground border-border/50">
            {frontMatter.type}
          </span>
          {frontMatter.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <hr className="border-border/50" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8 prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80">
          {content}
        </article>

        {/* Sidebar / Metadata */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground/80 uppercase tracking-wider text-sm">
                Project Links
              </h3>
              <div className="flex flex-col gap-3">
                {frontMatter.repoUrl && (
                  <Button asChild variant="outline" className="w-full justify-start h-12 text-base">
                    <a href={frontMatter.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      View Repository
                    </a>
                  </Button>
                )}
                {frontMatter.demoUrl && (
                  <Button asChild className="w-full justify-start h-12 text-base">
                    <a href={frontMatter.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-3" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground/80 uppercase tracking-wider text-sm">
                Published On
              </h3>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-5 h-5 mr-3" />
                <time dateTime={frontMatter.publishedOn}>
                  {new Date(frontMatter.publishedOn).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
