import { useDisclosure } from '@mantine/hooks'
import { Box, Burger, Drawer, Stack } from '@mantine/core'
import NavLink from './NavLink'

export default function NavMobile() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Box hiddenFrom='sm'>
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}
        position='right'
        size='xs'>
        <Stack>
          <NavLink
            content='About'
            href='/#about'
            onClick={close}
          />
          <NavLink
            content='Projects'
            href='/projects'
          />
        </Stack>
      </Drawer>
      <Burger
        opened={opened}
        onClick={open}
        aria-label='Toggle navigation'
      />
    </Box>
  )
}
