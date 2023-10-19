'use client'

import { AppShell, Container, Stack } from '@mantine/core'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Projects, { ProjectItemProps } from '../../partials/Projects'

export default function Project({
  projectLists,
}: {
  projectLists: ProjectItemProps[]
}) {
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
          size={1920}
          px={{ base: '0rem', lg: '4rem', xl: '8rem' }}>
          <Stack>
            <Projects projectLists={projectLists} />
            <Footer />
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
