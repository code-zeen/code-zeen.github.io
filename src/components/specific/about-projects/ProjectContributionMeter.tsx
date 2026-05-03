import { getContributionColor } from '@/content/getContributionColor.ts'
import { contribution } from '@/content/miscellaneous.ts'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'
import { Project } from '@/content/projects.type.ts'

function ProjectContributionMeter({ project }: { project: Project }) {
  const { language } = useContext(Context)
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-zinc-400">{contribution.text[language]}</span>
      <div className="w-32 h-2.5 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${getContributionColor(project.contribution)} transition-all`}
          style={{ width: `${Math.round(project.contribution / 10) * 10}%` }}
        />
      </div>
      <span className="text-sm text-zinc-400">{project.contribution}%</span>
    </div>
  )
}

export default ProjectContributionMeter