import { Metadata } from 'next'

import Header from '@/components/blocks/header/header'
import PageNotFound from '@/components/blocks/error/page-not-found'

export const metadata: Metadata = {
  title: 'You seem to be lost...',
}

export default function NotFound() {
  return (
    <div className="max-w-screen-lg w-full mx-auto px-6">
      <Header />
      <main className="flex justify-center items-center h-[85vh]">
        <PageNotFound />
      </main>
    </div>
  )
}
