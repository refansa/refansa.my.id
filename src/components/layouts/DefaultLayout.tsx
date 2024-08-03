import { ReactNode } from 'react'

import Header from '@/components/blocks/header/header'
import Footer from '@/components/blocks/footer/footer'

export interface Props {
  children: ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="max-w-screen-lg w-full mx-auto px-6">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
