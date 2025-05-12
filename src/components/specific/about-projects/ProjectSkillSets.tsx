import Chip from '@/components/styled/Chip.tsx'
import Icon from '@/components/common/Icon.tsx'
import { Project } from '@/content/projects.type.ts'

export default function ProjectSkillSets({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap mt-1 gap-1">
      {project.stacks && project.stacks.map(stack => (
        <Chip key={stack} text={stack} startIcon={<Icon name={stack} />} />
      ))}
    </div>
  )
}