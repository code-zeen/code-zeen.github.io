import { Project } from '@/content/projects.type.ts'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'

export default function ProjectTitle({ project }: { project: Project }) {
  const { language } = useContext(Context)

  return (
    <h4 className="text-lg font-bold">{project.title.text[language]}</h4>
  )
}