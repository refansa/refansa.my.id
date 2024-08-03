import { Metadata } from 'next'

import DefaultLayout from '@/components/layouts/DefaultLayout'
import UnderConstruction from '@/components/blocks/error/under-construction'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  return (
    <DefaultLayout>
      <main className="flex justify-center items-center h-[85vh]">
        <UnderConstruction />
      </main>
    </DefaultLayout>
  )
}
