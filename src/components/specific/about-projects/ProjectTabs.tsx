import { projectColorMap } from '@/content/projectColorMap.ts'
import Icon from '@/components/common/Icon.tsx'
import { TabEnum } from '@/types/enums.ts'
import { Button, TextButton } from '@/components/common/Button.tsx'

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
          <Button onClick={() => handleClick(button)}
                  className={button === currentTab ? `${projectColorMap[currentTab]}` : 'bg-zinc-700'}>
            <Icon name={button} />
            {button === currentTab && button}
          </Button>
        ))}
      </div>
      <div className="flex">
        <TextButton onClick={handleOrderBy}>
          {orderBy ? '최신순' : '과거순'}
          <Icon name={orderBy ? 'chevronDown' : 'chevronUp'} />
        </TextButton>
      </div>
    </div>
  )
}