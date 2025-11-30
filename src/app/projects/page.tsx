import { Metadata } from 'next'

import DefaultLayout from '@/components/layouts/default-layout'
import { getAllProjects } from '@/lib/mdx'
import { Heading } from '@/components/ui/heading'
import ProjectList from '@/components/blocks/projects/project-list'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my projects and experiments.',
}

export default function Projects() {
  const projects = getAllProjects()

  return (
    <DefaultLayout>
      <main className="flex flex-col gap-8 mb-24">
        <section className="flex flex-col gap-4">
          <Heading level={1}>Projects</Heading>
          <p className="text-muted-foreground text-lg">
            A collection of my projects and experiments.
          </p>
        </section>

        <ProjectList projects={projects} />
      </main>
    </DefaultLayout>
  )
}
