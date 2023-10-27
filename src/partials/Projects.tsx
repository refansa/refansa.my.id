import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'
import SlideUpWhenVisible from '../hooks/slideUpWhenVisible'
import NextImage from 'next/image'

export interface ProjectItemProps {
  alt: string
  codeSrc?: any
  description: string
  imgSrc?: any
  tags?: string[]
  title: string
}

const ProjectItem = ({
  alt,
  codeSrc,
  description,
  imgSrc,
  tags,
  title,
}: ProjectItemProps) => {
  return (
    <Card
      shadow='sm'
      padding='lg'
      withBorder>
      <Card.Section>
        <AspectRatio
          ratio={1366 / 609}
          mah={160}
          my='auto'>
          <Image
            component={NextImage}
            src={imgSrc}
            alt={alt}
            width={340}
            height={160}
          />
        </AspectRatio>
      </Card.Section>

      <Text
        fw='bold'
        size='lg'
        mt='md'>
        {title}
      </Text>
      {tags ? (
        <Group
          gap='xs'
          my='md'>
          {tags.map((tag) => {
            return (
              <Badge
                key={title}
                radius='xs'
                variant='light'>
                {tag}
              </Badge>
            )
          })}
        </Group>
      ) : null}
      <Text
        size='sm'
        c='dimmed'
        mb='md'>
        {description}
      </Text>
      <Group mt='auto'>
        {codeSrc ? (
          <Button
            component='a'
            href={codeSrc}
            target='_blank'
            leftSection={<IconBrandGithub />}
            variant='filled'>
            Source Code
          </Button>
        ) : null}
      </Group>
    </Card>
  )
}

export default function Projects({
  projectLists,
}: {
  projectLists: ProjectItemProps[]
}) {
  return (
    <SlideUpWhenVisible>
      <Box my='xl'>
        <Stack align='center'>
          <Title ta='center'>My Projects</Title>
          <SimpleGrid
            mt='xl'
            cols={{ base: 1, sm: 2, md: 3 }}>
            {projectLists.map((project) => {
              return (
                <ProjectItem
                  key={project.title}
                  {...project}
                />
              )
            })}
          </SimpleGrid>
        </Stack>
      </Box>
    </SlideUpWhenVisible>
  )
}
