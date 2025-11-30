import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const ROOT_PATH = process.cwd()
const PROJECTS_PATH = path.join(ROOT_PATH, 'src', 'contents', 'projects')

export interface ProjectFrontMatter {
  title: string
  description: string
  publishedOn: string
  updatedOn?: string
  isPublished: boolean
  tags: string[]
  repoUrl?: string
  demoUrl?: string
  status: 'Archived' | 'Maintained' | 'Abandoned' | 'Completed'
  type: 'Personal' | 'Contribution'
}

export interface ProjectFrontMatter {
  title: string
  description: string
  publishedOn: string
  updatedOn?: string
  isPublished: boolean
  tags: string[]
  repoUrl?: string
  demoUrl?: string
  status: 'Archived' | 'Maintained' | 'Abandoned' | 'Completed'
  type: 'Personal' | 'Contribution'
}

export interface ProjectMetadata {
  slug: string
  locale: string
  frontMatter: ProjectFrontMatter
  content: string
}

export interface Project {
  slug: string
  translations: Record<string, ProjectMetadata>
}

export function getAllProjects(): Project[] {
  try {
    const files = fs.readdirSync(PROJECTS_PATH)
    const projectsMap = new Map<string, Project>()

    files
      .filter((file) => file.endsWith('.mdx'))
      .forEach((file) => {
        // Expected format: slug.locale.mdx
        const parts = file.split('.')
        if (parts.length < 3) return // Skip invalid files

        const locale = parts[parts.length - 2]
        const slug = parts.slice(0, parts.length - 2).join('.')

        const filePath = path.join(PROJECTS_PATH, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(fileContent)

        if (!data.isPublished) return

        if (!projectsMap.has(slug)) {
          projectsMap.set(slug, {
            slug,
            translations: {},
          })
        }

        const project = projectsMap.get(slug)!
        project.translations[locale] = {
          slug,
          locale,
          frontMatter: data as ProjectFrontMatter,
          content,
        }
      })

    return Array.from(projectsMap.values()).sort((a, b) => {
      // Sort by published date of the 'en' translation (fallback to first available)
      const getDate = (p: Project) => {
        const meta = p.translations['en'] || Object.values(p.translations)[0]
        return meta ? new Date(meta.frontMatter.publishedOn).getTime() : 0
      }
      return getDate(b) - getDate(a)
    })
  } catch {
    return []
  }
}

export function getProject(slug: string): Project | null {
  const projects = getAllProjects()
  return projects.find((p) => p.slug === slug) || null
}
