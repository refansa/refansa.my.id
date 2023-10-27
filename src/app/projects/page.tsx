import { Metadata } from 'next'
import Project from './project'
import data from '../../data/projectList.json'

export const metadata: Metadata = {
  title: 'Projects',
}

async function getProjectLists() {
  return data
}

export default async function Projects() {
  const projectLists = await getProjectLists()

  return <Project projectLists={projectLists} />
}
