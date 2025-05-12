import { personalInfo } from '@/content/contact.ts'
import Icon from '@/components/common/Icon.tsx'

export default function PersonalInfo() {
  return (
    <div className="flex flex-col">
      {personalInfo.map((row, i) => (
        <div key={i} className="flex items-center gap-2">
          <Icon name={row.icon} />
          <p className="text-zinc-300">{row.text}</p>
        </div>
      ))}
    </div>
  )
}