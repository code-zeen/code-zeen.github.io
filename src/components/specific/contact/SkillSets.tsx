import { skillSets } from '@/content/contact.ts'
import Chip from '@/components/common/Chip.tsx'
import Icon from '@/components/common/Icon.tsx'

export default function SkillSets() {
  return (
    <div className="flex gap-1 flex-wrap">
      {skillSets.map((icon, i) => (
        <Chip key={i} text={icon} startIcon={<Icon name={icon} />} />
      ))}
    </div>
  )
}