import { skillSets } from '@/content/contact.ts'
import Chip from '@/components/common/Chip.tsx'
import Icon from '@/components/common/Icon.tsx'
import { useContext, useState } from 'react'
import { TextButton } from '@/components/common/Button.tsx'
import { Context } from '@/Context.tsx'
import { expandButtonText } from '@/content/miscellaneous.ts'

export default function SkillSets() {
  const { language } = useContext(Context)
  const [showAll, setShowAll] = useState(true)

  const handleClick = () => {
    setShowAll(prev => !prev)
  }

  return (
    <div className="flex gap-1 flex-wrap">
      {skillSets.map((icon, i) => (
        showAll ?
          <Chip key={i} text={icon} startIcon={<Icon name={icon} />} /> :
          (i < 5 && <Chip key={i} text={icon} startIcon={<Icon name={icon} />} />)
      ))}
      <TextButton
        onClick={handleClick}>{showAll ?
        <>
          <Icon name="chevronUp" />
          <span>{expandButtonText.collapse[language]}</span>
        </> :
        `+ ${skillSets.length - 5} ${expandButtonText.expand[language]}`}</TextButton>
    </div>
  )
}