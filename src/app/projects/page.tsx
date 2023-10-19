import { Metadata } from 'next'
import Project from './project'

export const metadata: Metadata = {
  title: 'Projects',
}

const projectLists = [
  {
    title: 'AmanaTax',
    description: 'A video course website to learn about taxes.',
    imgSrc: '/assets/project-1.png',
    alt: 'AmanaTax Homepage',
    tags: ['internship project', 'laravel', 'completed'],
  },
  {
    title: 'Koperasi',
    description: 'Cooperatives website that accept online transactions.',
    codeSrc: 'https://github.com/Refansa/koperasi',
    imgSrc: '/assets/project-2.png',
    alt: 'Koperasi Homepage',
    tags: ['school project', 'vue.js', 'completed'],
  },
  {
    title: 'RMBG',
    description:
      'Easily remove background from an image with one simple click.',
    codeSrc: 'https://github.com/Refansa/rmbg',
    imgSrc: '/assets/project-3.png',
    alt: 'RMBG Website',
    tags: ['personal project', 'react.js', 'completed'],
  },
  {
    title: 'This Portfolio',
    description: 'My own portfolio!',
    codeSrc: 'https://github.com/Refansa/portfolio',
    imgSrc: '/assets/project-4.png',
    alt: 'Portfolio Homepage',
    tags: ['personal project', 'react', 'in progress'],
  },
]

export default function ProjectLists() {
  return <Project projectLists={projectLists} />
}
