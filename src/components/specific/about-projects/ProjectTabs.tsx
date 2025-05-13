import { projectColorMap } from '@/content/projectColorMap.ts'
import Icon from '@/components/common/Icon.tsx'
import { TabEnum } from '@/types/enums.ts'

interface ProjectTabProps {
  currentTab: TabEnum
  handleClick: (button: TabEnum) => void
  orderBy: boolean
  handleOrderBy: () => void
}

export default function ProjectTabs({ currentTab, handleClick, orderBy, handleOrderBy }: ProjectTabProps) {
  const buttons = Object.values(TabEnum).map(tab => tab)

  return (
    <div className="flex justify-between">
      <div className="flex items-center flex-wrap gap-1">
        {buttons.map(button => (
          <button onClick={() => handleClick(button)}
                  className={`flex justify-center items-center gap-1 capitalize tab-button ${button === currentTab ? `${projectColorMap[currentTab]}` : 'bg-zinc-700'}`}>
            <Icon name={button} />
            {button === currentTab && button}
          </button>
        ))}
      </div>
      <div className="flex">
        <p
          className="flex items-center text-sm text-indigo-400 p-0"
          onClick={handleOrderBy}
        >
          {orderBy ? '최신순' : '과거순'}
          <Icon name={orderBy ? 'chevronDown' : 'chevronUp'} />
        </p>
      </div>
    </div>
  )
}