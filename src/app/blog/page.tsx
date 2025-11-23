import { Metadata } from 'next'

import DefaultLayout from '@/components/layouts/default-layout'
import UnderConstruction from '@/components/blocks/error/under-construction'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog',
  description:
    'Read my thoughts on software development, web technologies, game development, and 3D modeling. Coming soon!',
  tags: ['Blog', 'Programming', 'Software Development', 'Web Development', 'Technology'],
  noIndex: true, // Since it's under construction
})

export default function Blog() {
  return (
    <DefaultLayout>
      <main className="flex justify-center items-center h-[85vh]">
        <UnderConstruction />
      </main>
    </DefaultLayout>
  )
}
