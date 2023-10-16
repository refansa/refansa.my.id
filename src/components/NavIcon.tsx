import { Anchor, Title } from '@mantine/core'
import Link from 'next/link'

import classes from './NavIcon.module.css'

function NavIcon() {
  return (
    <Anchor
      component={Link}
      href='/'
      underline='never'>
      <Title ff='Fira Code'>
        <span className={classes.bracket}>{'{'}</span>
        <span>R</span>
        <span className={classes.bracket}>{'}'}</span>
      </Title>
    </Anchor>
  )
}

export default NavIcon
