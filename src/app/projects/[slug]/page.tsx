import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

import DefaultLayout from '@/components/layouts/default-layout'
import { siteConfig } from '@/config/site'
import { generateMetadata as generateSEOMetadata, generateProjectSchema } from '@/lib/seo'
import { getAllProjects, getProject } from '@/lib/mdx'
import { components } from '@/components/mdx-components'
import ProjectDetail from '@/components/blocks/projects/project-detail'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = getAllProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return generateSEOMetadata({
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    })
  }

  // Default to English for metadata
  const meta = project.translations['en'] || Object.values(project.translations)[0]

  return generateSEOMetadata({
    title: meta.frontMatter.title,
    description: meta.frontMatter.description,
    tags: meta.frontMatter.tags,
  })
}

export default async function Project({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  // Prepare translations with rendered MDX
  const translations: Record<string, any> = {}

  for (const [locale, meta] of Object.entries(project.translations)) {
    translations[locale] = {
      frontMatter: meta.frontMatter,
      content: <MDXRemote source={meta.content} components={components} />,
    }
  }

  // Default to English for schema
  const meta = project.translations['en'] || Object.values(project.translations)[0]

  const projectSchema = generateProjectSchema({
    title: meta.frontMatter.title,
    description: meta.frontMatter.description,
    url: `${siteConfig.url}/projects/${slug}`,
    datePublished: meta.frontMatter.publishedOn,
    dateModified: meta.frontMatter.updatedOn,
    repoUrl: meta.frontMatter.repoUrl,
    demoUrl: meta.frontMatter.demoUrl,
    keywords: meta.frontMatter.tags,
  })

  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectDetail translations={translations} />
    </DefaultLayout>
  )
}
