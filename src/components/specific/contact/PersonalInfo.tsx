import { personalInfo } from '@/content/contact.ts'
import Icon from '@/components/common/Icon.tsx'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'

export default function PersonalInfo() {
  const { language } = useContext(Context)

  return (
    <div className="flex flex-col">
      {personalInfo.map((row, i) => (
        <div key={i} className="flex items-center gap-2">
          <Icon name={row.icon} />
          {row.icon === 'github' ? (
            <a href="https://github.com/code-zeen/code-zeen.github.io" target="_blank">{row.text[language]}</a>
          ) : (
            <p className="text-zinc-300">{row.text[language]}</p>
          )}
        </div>
      ))}
    </div>
  )
}