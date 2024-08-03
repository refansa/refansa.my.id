import { Metadata } from 'next'

import DefaultLayout from '@/components/layouts/DefaultLayout'
import PageNotFound from '@/components/blocks/error/page-not-found'

export const metadata: Metadata = {
  title: 'You seem to be lost...',
}

export default function NotFound() {
  return (
    <DefaultLayout>
      <main className="flex justify-center items-center h-[85vh]">
        <PageNotFound />
      </main>
    </DefaultLayout>
  )
}
