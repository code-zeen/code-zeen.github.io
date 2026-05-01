import { aboutMe } from '@/content/aboutMe.ts'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'

function AboutMe() {
  const { language } = useContext(Context)

  return (
    <div className="flex flex-col gap-2 p-2" dangerouslySetInnerHTML={{ __html: aboutMe.text[language] }}>
    </div>
  )
}

export default AboutMe
