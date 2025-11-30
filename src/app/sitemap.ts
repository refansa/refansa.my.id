import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { getAllProjects } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  const projects = getAllProjects()

  const projectUrls = projects.map((project) => {
    const meta = project.translations['en'] || Object.values(project.translations)[0]
    const lastModified = meta.frontMatter.updatedOn
      ? new Date(meta.frontMatter.updatedOn)
      : new Date(meta.frontMatter.publishedOn)

    return {
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  return [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...projectUrls,
  ]
}
