import { Project } from '@/content/projects.type.ts'
import { getContributionColor } from '@/content/getContributionColor.ts'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'
import { contribution } from '@/content/miscellaneous.ts'

export default function ProjectTitle({ project }: { project: Project }) {
  const { language } = useContext(Context)

  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-lg font-bold">{project.title.text[language]}</h4>
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
    </div>
  )
}