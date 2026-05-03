import { myName } from '@/content/contact.ts'
import Icon from '@/components/common/Icon.tsx'
import { LanguageEnum } from '@/types/enums.ts'
import { useContext, useState } from 'react'
import Flag from '@/components/common/Flag.tsx'
import { Button } from '@/components/common/Button.tsx'
import { Context } from '@/Context.tsx'
import cloudsPng from '@/assets/clouds.png'

function Profile() {
  const { language, changeLanguage } = useContext(Context)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen)
  }

  const handleLanguageChange = (lang: LanguageEnum) => {
    changeLanguage(lang)
    document.documentElement.lang = lang
    setIsLanguageOpen(false)
  }

  return (
    <div className="profile-pic flex flex-col w-full">
      <div className="relative flex w-full h-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${cloudsPng})` }}>
        <Button className="absolute top-4 right-4" onClick={toggleLanguageMenu}>
          <div className="relative flex items-end">
            <Flag language={language} />
            <Icon name="chevronDown" />
            <div
              className={`absolute top-full right-0 my-3 bg-zinc-800 border border-zinc-600 rounded-lg z-10 ${isLanguageOpen ? 'block' : 'hidden'}`}>
              <ul className="language w-full">
                {Object.values(LanguageEnum).map(lang => (
                  <li key={lang}>
                    <Button className="flex justify-center items-center gap-3"
                            onClick={() => handleLanguageChange(lang)}>
                      <Flag language={lang} />
                      <span className="uppercase">{lang}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Button>

        <div className="profile-title absolute flex gap-8 mx-4 translate-y-1/2">
          <img className="img profile-pic"
               src="https://avatars.githubusercontent.com/u/77660676?v=4" alt="profile-picture" />
          <div className="flex flex-col">
            <h2 className="text-xl">{myName.text[language]}</h2>
            <code>frontend-developer</code>
          </div>
        </div>

      </div>
      <div className="flex w-full h-1/2 bg-zinc-900">

      </div>
    </div>
  )
}

export default Profile