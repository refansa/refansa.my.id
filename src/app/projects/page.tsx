import { Metadata } from 'next'

import DefaultLayout from '@/components/layouts/default-layout'
import { getAllProjects } from '@/lib/mdx'
import ProjectsClient from '@/components/blocks/projects/projects-client'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my projects and experiments.',
}

export default function Projects() {
  const projects = getAllProjects()

  return (
    <DefaultLayout>
      <ProjectsClient projects={projects} />
    </DefaultLayout>
  )
}
