import {
  Anchor,
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import classes from './About.module.css'
import SlideUpWhenVisible from '../hooks/slideUpWhenVisible'

function About() {
  return (
    <SlideUpWhenVisible>
      <Box
        id='about'
        className={classes.anchor}
        my='xl'>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: 'sm', md: 'md', lg: 'lg' }}>
          <Stack>
            <Title>A bit About Me</Title>
            <Stack gap='md'>
              <Text>
                Hello 👋 Refansa here. Muhammad Refansa Ali Muzky is my full
                name. I'm an 18 years old software developer, just came fresh
                out of the oven. Constantly seeking new open source projects to
                contribute to and enjoy working with others to make a meaningful
                contribution.
              </Text>
              <Text>
                I thrive on challenging coding projects and love nothing more
                than diving into complex software development tasks. As a lover
                of open source, I believe that sharing knowledge and
                collaborating on projects is essential for the advancement of
                the tech industry.
              </Text>
              <Text
                mt='lg'
                c='dark.1'
                fs='italic'>
                I use Archlinux btw.
              </Text>
              <Text
                mt='xl'
                fw='bold'>
                Peace from Indonesia 🇮🇩
              </Text>
            </Stack>
          </Stack>
          <Container visibleFrom='sm'>
            <Stack
              justify='center'
              w={360}>
              <Image
                className={classes.grayscale}
                src='/assets/hand-coding.svg'
                alt='Coding Illustration'
                width={360}
                height='auto'
              />
              <Anchor
                ta='center'
                fs='italic'
                fz='xs'
                href='https://storyset.com/work'>
                Work illustrations by Storyset
              </Anchor>
            </Stack>
          </Container>
        </SimpleGrid>
      </Box>
    </SlideUpWhenVisible>
  )
}

export default About
