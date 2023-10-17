'use client'

import { AppShell, Container, Stack, rem } from '@mantine/core'
import Introduction from '../partials/Introduction'
import About from '../partials/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Experiences from '../partials/Experiences'

export default function HomePage() {
  return (
    <AppShell
      withBorder={false}
      padding={'xl'}
      header={{ height: 72 }}
      className={'shell-root'}>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Container
          size={rem(1920)}
          px={{ base: '0rem', lg: '4rem', xl: '8rem' }}>
          <Stack>
            <Introduction />
            <About />
            <Experiences />
            <Footer />
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
