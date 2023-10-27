import { Metadata } from 'next'
import Project from './project'

export const metadata: Metadata = {
  title: 'Projects',
}

async function getProjectLists() {
  const baseURL = process.env.APP_URL ?? 'https://refansa.vercel.app'
  const res = await fetch(`${baseURL}/api/projects`)

  if (!res.ok) throw new Error('Failed to fetch project lists.')

  return res.json()
}

export default async function Projects() {
  const projectLists = await getProjectLists()

  return <Project projectLists={projectLists} />
}
