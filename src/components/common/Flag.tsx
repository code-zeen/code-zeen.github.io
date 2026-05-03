import { LanguageEnum } from '@/types/enums.ts'
import ko from '@/assets/flags/ko.svg'
import en from '@/assets/flags/en.svg'
import de from '@/assets/flags/de.svg'

function Flag({ language }: { language: LanguageEnum }) {
  const flags = { ko, en, de }
  return (
    <div className="rounded-full overflow-hidden w-5 h-5 border">
      <img src={flags[language]} alt={language || 'language'} />
    </div>
  )
}

export default Flag