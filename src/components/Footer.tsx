import { Anchor, Container, Text } from '@mantine/core'

export default function Footer() {
  return (
    <Container>
      <Text
        fw='bold'
        ta='center'>
        Created with ❤️ by{' '}
        <Anchor
          fw='bold'
          href='https://github.com/Refansa'>
          Refansa
        </Anchor>
      </Text>
    </Container>
  )
}
