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

export interface ProjectMetadata {
  slug: string
  frontMatter: ProjectFrontMatter
  content: string
}

export function getProject(slug: string): ProjectMetadata | null {
  try {
    const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    if (!data.isPublished) {
      return null
    }

    return {
      slug,
      frontMatter: data as ProjectFrontMatter,
      content,
    }
  } catch {
    return null
  }
}

export function getAllProjects(): ProjectMetadata[] {
  try {
    const files = fs.readdirSync(PROJECTS_PATH)

    const projects = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => getProject(file.replace('.mdx', '')))
      .filter((project): project is ProjectMetadata => project !== null)
      .sort((a, b) => {
        return (
          new Date(b.frontMatter.publishedOn).getTime() -
          new Date(a.frontMatter.publishedOn).getTime()
        )
      })

    return projects
  } catch {
    return []
  }
}
