import { useEffect, useRef, useState } from 'react'
import { Project } from '@/content/projects.type.ts'
import Icon from '@/components/common/Icon.tsx'
import { TextButton } from '@/components/common/Button.tsx'

export default function ProjectDescription({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState<string | number>('auto')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const fullHeight = contentRef.current.scrollHeight
      setHeight(expanded ? fullHeight : 104)
    }
  }, [expanded, project.description])

  return (
    <div className="flex flex-col py-2">
      <div
        ref={contentRef}
        style={{
          height,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        <p className={`text-zinc-300 font-light  ${expanded ? '' : 'line-clamp-4'}`} dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
      <TextButton onClick={() => setExpanded(prev => !prev)}>
        {expanded ? '접기' : '펼치기'}
        <Icon name={expanded ? 'chevronUp' : 'chevronDown'} />
      </TextButton>
    </div>
  )
}
