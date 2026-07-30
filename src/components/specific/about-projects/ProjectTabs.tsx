import { projectColorMap } from '@/content/projectColorMap.ts'
import Icon from '@/components/common/Icon.tsx'
import { TabEnum } from '@/types/enums.ts'
import { Button, TextButton } from '@/components/common/Button.tsx'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'
import { sortBy } from '@/content/miscellaneous.ts'

interface ProjectTabProps {
  currentTab: TabEnum
  handleClick: (button: TabEnum) => void
  orderBy: boolean
  handleOrderBy: () => void
}

export default function ProjectTabs({ currentTab, handleClick, orderBy, handleOrderBy }: ProjectTabProps) {
  const { language } = useContext(Context)
  const buttons = Object.values(TabEnum).map(tab => tab)

  return (
    <div className="flex-col justify-between">
      <div className="flex items-center flex-wrap gap-1">
        {buttons.map(button => (
          <Button onClick={() => handleClick(button)}
                  className={button === currentTab ? `${projectColorMap[currentTab]}` : 'bg-zinc-700'}>
            <Icon name={button} />
            {button}
          </Button>
        ))}
      </div>
      <TextButton onClick={handleOrderBy}>
        {orderBy ? sortBy.newest.text[language] : sortBy.oldest.text[language]}
        <Icon name={orderBy ? 'chevronDown' : 'chevronUp'} />
      </TextButton>
    </div>
  )
}