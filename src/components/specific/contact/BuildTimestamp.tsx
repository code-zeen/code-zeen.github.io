import { useContext } from 'react'
import { Context } from '@/Context.tsx'
import { lastUpdated } from '@/content/miscellaneous.ts'
import { LanguageEnum } from '@/types/enums.ts'

export default function BuildTimestamp() {
  const { language } = useContext(Context)
  const time = BUILD_TIMESTAMP.slice(0, 10)

  return (
    <p
      className="text-zinc-500">{lastUpdated[language]}: {language === LanguageEnum.GERMAN ? time.split('-').reverse().join('.') : time}</p>
  )
}