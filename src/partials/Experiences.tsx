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

const ItemGrid = ({ icon, text }: ItemGridProps) => {
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
            <ItemGrid
              icon={<IconBrandHtml5 />}
              text='HTML'
            />
            <ItemGrid
              icon={<IconBrandCss3 />}
              text='CSS'
            />
            <ItemGrid
              icon={<IconBrandJavascript />}
              text='Javascript'
            />
            <ItemGrid
              icon={<IconBrandPhp />}
              text='PHP'
            />
            <ItemGrid
              icon={<IconBrandPython />}
              text='Python'
            />
            <ItemGrid
              icon={<IconBrandMysql />}
              text='MySQL'
            />
            <ItemGrid
              icon={<IconBrandLaravel />}
              text='Laravel'
            />
            <ItemGrid
              icon={<IconBrandNodejs />}
              text='NodeJS'
            />
            <ItemGrid
              icon={<IconBrandReact />}
              text='React'
            />
            <ItemGrid
              icon={<IconBrandVue />}
              text='Vue'
            />
            <ItemGrid
              icon={<IconBrandTailwind />}
              text='Tailwind'
            />
            <ItemGrid
              icon={<IconBrandSass />}
              text='Sass'
            />
            <ItemGrid
              icon={<IconBrandMantine />}
              text='Mantine'
            />
            <ItemGrid
              icon={<IconBrandNextjs />}
              text='NextJS'
            />
            <ItemGrid
              icon={<IconBrandPrisma />}
              text='Prisma'
            />
            <ItemGrid
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
