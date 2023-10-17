import { Box, Button, Flex, Group, Text, Title } from '@mantine/core'
import { IconBrandGithub, IconMail } from '@tabler/icons-react'
import classes from './Introduction.module.css'
import SlideUpWhenVisible from '../hooks/slideUpWhenVisible'

function Introduction() {
  return (
    <SlideUpWhenVisible>
      <Box
        mt='xl'
        mah='100vh'
        h='100vh'
        className={classes.background}>
        <Flex
          align='center'
          gap='md'>
          <Box className={classes.line} />
          <Text
            fz='display-lg'
            fw='bold'
            c='coffee.6'>
            Hi There!
          </Text>
        </Flex>
        <Title
          variant='shadow'
          fz='display-xl'
          fw='bold'
          lh={1.2}>
          I'm Refansa.
        </Title>
        <Text
          fz='display-lg'
          fw='bold'
          lh='xs'>
          A Passionate, self-taught Software Developer{' '}
          <Text
            component='span'
            display='block'
            inherit
            c='dark.1'>
            A supporter of Open Source Software.
          </Text>
        </Text>
        <Group mt={'xl'}>
          <Button
            component='a'
            href='https://github.com/Refansa'
            target='_blank'
            leftSection={<IconBrandGithub />}
            size='lg'
            variant='light'>
            Github
          </Button>
          <Button
            component='a'
            href='mailto:m.refansa.am@gmail.com'
            leftSection={<IconMail />}
            size='lg'
            variant='light'>
            Email
          </Button>
        </Group>
      </Box>
    </SlideUpWhenVisible>
  )
}

export default Introduction
