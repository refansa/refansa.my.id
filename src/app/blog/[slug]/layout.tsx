import { ReactNode } from 'react'

import DefaultLayout from '@/components/layouts/default-layout'

export interface PostLayoutProps {
  children: ReactNode
  params: {
    slug: string
  }
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <DefaultLayout>
      <main>
        <article className="flex flex-col gap-4 text-xs md:text-base my-6">{children}</article>
      </main>
    </DefaultLayout>
  )
}
