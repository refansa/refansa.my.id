import { Box, Group } from '@mantine/core'

import classes from './Navbar.module.css'
import NavIcon from './NavIcon'
import NavLink from './NavLink'
import NavMobile from './NavMobile'

function Navbar() {
  return (
    <Box
      component='nav'
      className={classes.navigation}>
      <NavIcon />
      <Group visibleFrom='sm'>
        <NavLink
          content='About'
          href='/#about'
        />
        <NavLink
          content='Projects'
          href='https://github.com/Refansa?tab=repositories'
        />
      </Group>
      <NavMobile />
    </Box>
  )
}

export default Navbar
