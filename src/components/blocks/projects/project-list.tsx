'use client'

import { useState, useMemo } from 'react'
import { Project, ProjectMetadata } from '@/lib/mdx'
import ProjectCard from './project-card'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/components/providers/i18n-provider'
import { useTranslations } from 'next-intl'

interface ProjectListProps {
  projects: Project[]
}

type FilterStatus = 'All' | 'Archived' | 'Maintained' | 'Abandoned' | 'Completed'
type FilterType = 'All' | 'Personal' | 'Contribution'
type SortOption = 'Newest' | 'Oldest'

export default function ProjectList({ projects }: ProjectListProps) {
  const { locale } = useI18n()
  const t = useTranslations('projects')
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('All')
  const [typeFilter, setTypeFilter] = useState<FilterType>('All')
  const [sort, setSort] = useState<SortOption>('Newest')

  const filteredProjects = useMemo(() => {
    let result = [...projects]

    // Helper to get metadata for current locale or fallback
    const getMeta = (p: Project): ProjectMetadata => {
      return p.translations[locale] || p.translations['en'] || Object.values(p.translations)[0]
    }

    if (statusFilter !== 'All') {
      result = result.filter((project) => {
        const meta = getMeta(project)
        return meta?.frontMatter.status === statusFilter
      })
    }

    if (typeFilter !== 'All') {
      result = result.filter((project) => {
        const meta = getMeta(project)
        return meta?.frontMatter.type === typeFilter
      })
    }

    result.sort((a, b) => {
      const metaA = getMeta(a)
      const metaB = getMeta(b)
      if (!metaA || !metaB) return 0

      const dateA = new Date(metaA.frontMatter.publishedOn).getTime()
      const dateB = new Date(metaB.frontMatter.publishedOn).getTime()

      return sort === 'Newest' ? dateB - dateA : dateA - dateB
    })

    return result
  }, [projects, statusFilter, typeFilter, sort, locale])

  const getMeta = (p: Project): ProjectMetadata => {
    return p.translations[locale] || p.translations['en'] || Object.values(p.translations)[0]
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16 shrink-0">
              {t('status')}
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
                    {t(`filterStatus.${status.toLowerCase()}` as any)}
                  </Button>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16 shrink-0">
              {t('type')}
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
                  {t(`filterType.${type.toLowerCase()}` as any)}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:self-start">
          <span className="text-sm text-muted-foreground whitespace-nowrap">{t('sortBy')}</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="bg-background border border-border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Newest">{t('newest')}</option>
            <option value="Oldest">{t('oldest')}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const meta = getMeta(project)
          if (!meta) return null
          return <ProjectCard key={project.slug} project={meta} />
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">{t('noProjects')}</div>
      )}
    </div>
  )
}
