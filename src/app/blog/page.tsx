import { Metadata } from 'next'

import DefaultLayout from '@/components/layouts/default-layout'
import UnderConstruction from '@/components/blocks/error/under-construction'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function Blog() {
  return (
    <DefaultLayout>
      <main className="flex justify-center items-center h-[85vh]">
        <UnderConstruction />
      </main>
    </DefaultLayout>
  )
}
