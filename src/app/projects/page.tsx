import { Metadata } from 'next'
import Project from './project'

export const metadata: Metadata = {
  title: 'Projects',
}

async function getProjectLists() {
  const res = await fetch('http://localhost:3000/api/projects')

  if (!res.ok) throw new Error('Failed to fetch project lists.')

  return res.json()
}

export default async function Projects() {
  const projectLists = await getProjectLists()

  return <Project projectLists={projectLists} />
}
