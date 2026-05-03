import { useContext } from 'react'
import { Context } from '@/Context.tsx'
import { TranslatedText } from '@/types/enums.ts'

function List({ textList }: { textList: TranslatedText[] }) {
  const { language } = useContext(Context)

  return (
    <ul>
      {textList.map((item, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: item.text[language] }} />
      ))}
    </ul>
  )
}

export default List