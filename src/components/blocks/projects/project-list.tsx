'use client'

import { useState, useMemo } from 'react'
import { ProjectMetadata } from '@/lib/mdx'
import ProjectCard from './project-card'
import { Button } from '@/components/ui/button'

interface ProjectListProps {
  projects: ProjectMetadata[]
}

type FilterStatus = 'All' | 'Archived' | 'Maintained' | 'Abandoned' | 'Completed'
type SortOption = 'Newest' | 'Oldest'

export default function ProjectList({ projects }: ProjectListProps) {
  const [filter, setFilter] = useState<FilterStatus>('All')
  const [sort, setSort] = useState<SortOption>('Newest')

  const filteredProjects = useMemo(() => {
    let result = [...projects]

    if (filter !== 'All') {
      result = result.filter((project) => project.frontMatter.status === filter)
    }

    result.sort((a, b) => {
      const dateA = new Date(a.frontMatter.publishedOn).getTime()
      const dateB = new Date(b.frontMatter.publishedOn).getTime()

      return sort === 'Newest' ? dateB - dateA : dateA - dateB
    })

    return result
  }, [projects, filter, sort])

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {(['All', 'Maintained', 'Completed', 'Archived', 'Abandoned'] as const).map((status) => (
            <Button
              key={status}
              variant={filter === status ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(status)}
              className="rounded-full"
            >
              {status}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="bg-background border border-border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No projects found matching the selected filter.
        </div>
      )}
    </div>
  )
}
