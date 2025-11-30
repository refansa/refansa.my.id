'use client'

import { useTranslations } from 'next-intl'
import { Heading } from '@/components/ui/heading'
import ProjectList from '@/components/blocks/projects/project-list'
import { Project } from '@/lib/mdx'

interface ProjectsClientProps {
  projects: Project[]
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const t = useTranslations('projects')

  return (
    <main className="flex flex-col gap-8 mb-24">
      <section className="flex flex-col gap-4">
        <Heading level={1}>{t('title')}</Heading>
        <p className="text-muted-foreground text-lg">{t('description')}</p>
      </section>

      <ProjectList projects={projects} />
    </main>
  )
}
