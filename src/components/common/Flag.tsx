import { LanguageEnum } from '@/types/enums.ts'

function Flag({ language }: { language: LanguageEnum }) {
  return (
    <div className="rounded-full overflow-hidden w-5 h-5 border">
      <img src={`/src/assets/flags/${language}.svg`} alt={language || 'language'} />
    </div>
  )
}

export default Flag