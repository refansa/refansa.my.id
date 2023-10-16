import { Button } from '@mantine/core'

interface NavLinkProps {
  content: string
  href: string
}

function NavLink({ content, href }: NavLinkProps) {
  return (
    <Button
      component={'a'}
      variant='subtle'
      size='md'
      href={href}>
      {content}
    </Button>
  )
}

export default NavLink
