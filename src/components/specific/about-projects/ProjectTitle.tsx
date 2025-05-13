import { Project } from '@/content/projects.type.ts'
import { getContributionColor } from '@/content/getContributionColor.ts'

export default function ProjectTitle({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-lg font-bold">{project.title}</h4>
      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">기여도</span>
        <div className="w-32 h-2.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={`h-full ${getContributionColor(project.contribution)} transition-all`}
            style={{ width: `${Math.round(project.contribution / 10) * 10}%` }}
          />
        </div>
        <span className="text-sm text-zinc-400">{project.contribution}%</span>
      </div>
    </div>
  )
}