import { Anchor, Badge, Box, SimpleGrid, Stack, Text } from '@mantine/core'
import pkg from '../../package.json'

const { version } = pkg

export default function Footer() {
  return (
    <Box mt='xl'>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        h={120}
        spacing={{ base: 'sm', md: 'md', lg: 'lg' }}>
        <Stack>
          <Text fw='bold'>
            Email:{' '}
            <Anchor href='mailto:m.refansa.am@gmail.com'>
              m.refansa.am@gmail.com
            </Anchor>
          </Text>
          <Text fw='bold'>
            Tel:{' '}
            <Anchor href='tel:+62-812-8543-3284'>(+62) 812-8543-3284</Anchor>
          </Text>
        </Stack>
        <Stack>{/* empty space */}</Stack>
      </SimpleGrid>
      <Stack align='center'>
        <Badge variant='outline'>V. {version}</Badge>
        <Text fw='bold'>
          Created with ❤️ by{' '}
          <Anchor
            fw='bold'
            href='https://github.com/Refansa'>
            Refansa
          </Anchor>
        </Text>
      </Stack>
    </Box>
  )
}
