import { Metadata } from 'next'

import DefaultLayout from '@/components/layouts/default-layout'
import UnderConstruction from '@/components/blocks/error/under-construction'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Projects',
  description:
    'Explore my portfolio of software development projects, including web applications, open source contributions, and more. Coming soon!',
  tags: ['Projects', 'Portfolio', 'Open Source', 'Web Development', 'Software Projects'],
  noIndex: true, // Since it's under construction
})

export default function Projects() {
  return (
    <DefaultLayout>
      <main className="flex justify-center items-center h-[85vh]">
        <UnderConstruction />
      </main>
    </DefaultLayout>
  )
}
