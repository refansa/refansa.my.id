import { Button } from '@mantine/core'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface NavLinkProps {
  content: string
  href: string
  onClick?: MouseEventHandler<HTMLElement>
}

function NavLink({ content, href, onClick }: NavLinkProps) {
  return (
    <Button
      component={Link}
      variant='subtle'
      size='md'
      onClick={onClick}
      href={href}>
      {content}
    </Button>
  )
}

export default NavLink
