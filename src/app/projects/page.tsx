import { Metadata } from 'next'

import Header from '@/components/blocks/header/header'
import Footer from '@/components/blocks/footer/footer'
import UnderConstruction from '@/components/blocks/error/under-construction'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  return (
    <div className="max-w-screen-lg w-full mx-auto px-6">
      <Header />
      <main className="flex justify-center items-center h-[85vh]">
        <UnderConstruction />
      </main>
      <Footer />
    </div>
  )
}
