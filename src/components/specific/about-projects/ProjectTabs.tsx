import { projectColorMap } from '@/content/projectColorMap.ts'
import Icon from '@/components/common/Icon.tsx'
import { TabEnum } from '@/types/enums.ts'

interface ProjectTabProps {
  currentTab: TabEnum
  handleClick: (button: TabEnum) => void
}

export default function ProjectTabs({ currentTab, handleClick }: ProjectTabProps) {
  const buttons = Object.values(TabEnum).map(tab => tab)

  return (
    <div className="flex items-center flex-wrap gap-1">
      {buttons.map(button => (
        <button onClick={() => handleClick(button)}
                className={`flex justify-center items-center gap-1 capitalize tab-button ${button === currentTab ? `${projectColorMap[currentTab]}` : 'bg-zinc-700'}`}>
          <Icon name={button} />
          {button === currentTab && button}
        </button>
      ))}
    </div>
  )
}