import { useContext, useEffect, useRef, useState } from 'react'
import { Project } from '@/content/projects.type.ts'
import Icon from '@/components/common/Icon.tsx'
import { TextButton } from '@/components/common/Button.tsx'
import { Context } from '@/Context.tsx'
import { expandButtonText } from '@/content/miscellaneous.ts'

export default function ProjectDescription({ project }: { project: Project }) {
  const { language } = useContext(Context)
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState<string | number>('auto')
  const [hasMoreText, setHasMoreText] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const fullHeight = contentRef.current.scrollHeight
      setHeight(expanded ? fullHeight : 104)
      if (fullHeight > 104) setHasMoreText(true)
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
        <p className={`text-zinc-300 font-light p-2 ${expanded ? '' : 'line-clamp-4'}`}
           dangerouslySetInnerHTML={{ __html: project.description.text[language] }} />
      </div>
      {hasMoreText &&
        <TextButton onClick={() => setExpanded(prev => !prev)}>
          {expanded ? expandButtonText.collapse[language] : expandButtonText.expand[language]}
          <Icon name={expanded ? 'chevronUp' : 'chevronDown'} />
        </TextButton>
      }
    </div>
  )
}
