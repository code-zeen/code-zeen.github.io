import { createContext, ReactNode, useState } from 'react'
import { LanguageEnum } from '@/types/enums.ts'

type ContextType = {
  language: LanguageEnum
  changeLanguage: (language: LanguageEnum) => void
}

const Context = createContext<ContextType>({
  language: LanguageEnum.ENGLISH,
  changeLanguage: () => {
  },
})

function ContextProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(LanguageEnum.ENGLISH)

  const changeLanguage = (language: LanguageEnum) => {
    setLanguage(language)
  }

  return (
    <Context.Provider value={{
      language,
      changeLanguage,
    }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }