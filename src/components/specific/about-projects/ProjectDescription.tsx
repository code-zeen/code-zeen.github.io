import { Stack } from '@/components/styled/Stack.ts'
import { Project } from '@/content/projects.type.ts'

export default function ProjectDescription({ project }: { project: Project }) {
  return (
    <Stack py={8}>
      <p className="secondary" dangerouslySetInnerHTML={{ __html: project.description }} />
    </Stack>
  )
}