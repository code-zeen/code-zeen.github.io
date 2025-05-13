import Icon from '@/components/common/Icon.tsx'
import { Project } from '@/content/projects.type.ts'
import { projectColorMap } from '@/content/projectColorMap.ts'

export default function ProjectMetaData({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`flex justify-center items-center h-7 w-7 shrink-0 rounded-full ${projectColorMap[project.type] || 'bg-gray-400'}`}>
        <Icon name={project.type} />
      </div>
      <div>
        <span className="capitalize">{project.location}</span>
        <span className="text-xs text-zinc-400 ml-2">{project.date}</span>
      </div>
    </div>
  )
}