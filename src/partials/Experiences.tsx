import { Box, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMantine,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandReact,
  IconBrandSass,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandVue,
} from '@tabler/icons-react'
import SlideUpWhenVisible from '../hooks/slideUpWhenVisible'

interface ItemGridProps {
  icon: React.ReactNode
  text: string
}

const Item = ({ icon, text }: ItemGridProps) => {
  return (
    <Paper
      w={100}
      h={100}>
      <Stack
        p='sm'
        w='inherit'
        h='inherit'
        align='center'
        justify='center'>
        {icon}
        <Text
          style={{ userSelect: 'none' }}
          fw='bold'
          fz='sm'>
          {text}
        </Text>
      </Stack>
    </Paper>
  )
}

export default function Experiences() {
  return (
    <SlideUpWhenVisible>
      <Box my='xl'>
        <Stack
          align='center'
          ta='center'>
          <Title>Experiences</Title>
          <Text
            fz='lg'
            ta='center'>
            I have worked and used these awesome technologies in my projects
          </Text>
          <SimpleGrid
            mt='xl'
            w={{ base: 240, sm: 480, md: 720, lg: 960 }}
            cols={{ base: 2, sm: 4, md: 6, lg: 8 }}>
            <Item
              icon={<IconBrandHtml5 />}
              text='HTML'
            />
            <Item
              icon={<IconBrandCss3 />}
              text='CSS'
            />
            <Item
              icon={<IconBrandJavascript />}
              text='Javascript'
            />
            <Item
              icon={<IconBrandPhp />}
              text='PHP'
            />
            <Item
              icon={<IconBrandPython />}
              text='Python'
            />
            <Item
              icon={<IconBrandMysql />}
              text='MySQL'
            />
            <Item
              icon={<IconBrandLaravel />}
              text='Laravel'
            />
            <Item
              icon={<IconBrandNodejs />}
              text='NodeJS'
            />
            <Item
              icon={<IconBrandReact />}
              text='React'
            />
            <Item
              icon={<IconBrandVue />}
              text='Vue'
            />
            <Item
              icon={<IconBrandTailwind />}
              text='Tailwind'
            />
            <Item
              icon={<IconBrandSass />}
              text='Sass'
            />
            <Item
              icon={<IconBrandMantine />}
              text='Mantine'
            />
            <Item
              icon={<IconBrandNextjs />}
              text='NextJS'
            />
            <Item
              icon={<IconBrandPrisma />}
              text='Prisma'
            />
            <Item
              icon={<IconBrandSupabase />}
              text='Supabase'
            />
          </SimpleGrid>
          <Text
            mt='xl'
            fs='italic'
            ta='center'>
            And probably many more...
          </Text>
        </Stack>
      </Box>
    </SlideUpWhenVisible>
  )
}
