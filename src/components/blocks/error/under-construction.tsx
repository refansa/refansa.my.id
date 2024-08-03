import Link from 'next/link'

import { HomeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function UnderConstruction() {
  return (
    <div className="flex font-mono gap-4 flex-col items-center tracking-wide">
      <span className="text-7xl md:text-9xl">501</span>
      <i className="text-xl md:text-2xl">Not Implemented</i>
      <p className="text-center">Sorry! The page is currently under construction.</p>
      <Button className="font-sans font-bold" variant="secondary">
        <Link className="flex gap-2 items-center" href="/">
          <HomeIcon />
          Go Home
        </Link>
      </Button>
    </div>
  )
}
