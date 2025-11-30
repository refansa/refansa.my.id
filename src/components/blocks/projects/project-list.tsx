'use client'

import { useState, useMemo } from 'react'
import { ProjectMetadata } from '@/lib/mdx'
import ProjectCard from './project-card'
import { Button } from '@/components/ui/button'

interface ProjectListProps {
  projects: ProjectMetadata[]
}

type FilterStatus = 'All' | 'Archived' | 'Maintained' | 'Abandoned' | 'Completed'
type FilterType = 'All' | 'Personal' | 'Contribution'
type SortOption = 'Newest' | 'Oldest'

export default function ProjectList({ projects }: ProjectListProps) {
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('All')
  const [typeFilter, setTypeFilter] = useState<FilterType>('All')
  const [sort, setSort] = useState<SortOption>('Newest')

  const filteredProjects = useMemo(() => {
    let result = [...projects]

    if (statusFilter !== 'All') {
      result = result.filter((project) => project.frontMatter.status === statusFilter)
    }

    if (typeFilter !== 'All') {
      result = result.filter((project) => project.frontMatter.type === typeFilter)
    }

    result.sort((a, b) => {
      const dateA = new Date(a.frontMatter.publishedOn).getTime()
      const dateB = new Date(b.frontMatter.publishedOn).getTime()

      return sort === 'Newest' ? dateB - dateA : dateA - dateB
    })

    return result
  }, [projects, statusFilter, typeFilter, sort])

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16 shrink-0">
              Status
            </span>
            <div className="flex flex-wrap gap-2">
              {(['All', 'Maintained', 'Completed', 'Archived', 'Abandoned'] as const).map(
                (status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter(status)}
                    className="rounded-full h-7 text-xs"
                  >
                    {status}
                  </Button>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16 shrink-0">
              Type
            </span>
            <div className="flex flex-wrap gap-2">
              {(['All', 'Personal', 'Contribution'] as const).map((type) => (
                <Button
                  key={type}
                  variant={typeFilter === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTypeFilter(type)}
                  className="rounded-full h-7 text-xs"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:self-start">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
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
          No projects found matching the selected filters.
        </div>
      )}
    </div>
  )
}
