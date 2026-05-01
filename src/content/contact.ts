import { IconName } from '../components/common/Icon.tsx'
import { TranslatedText } from '@/types/enums.ts'

interface IconWithText extends TranslatedText {
  icon: IconName
}

export const myName: TranslatedText = {
  text: {
    ko: '김애진',
    en: 'Aejin Kim',
    de: 'Aejin Kim',
  },
}

export const personalInfo: IconWithText[] = [
  {
    icon: 'person',
    text: {
      ko: '1996 • ♀️여',
      en: '1996 • ♀️Female',
      de: '1996 • ♀️weiblich',
    },
  }, {
    icon: 'location',
    text: {
      ko: '바이에른, 독일',
      en: 'Erlangen-Höchstadt, Germany',
      de: 'Erlangen-Höchstadt, Deutschland',
    },
  }, {
    icon: 'personality',
    text: {
      ko: '느긋한 인팁 😉',
      en: 'A curious explorer 🧐',
      de: 'Immer neugierig 🫠',
    },
  },
]

export const skillSets: IconName[] = [
  'react',
  'typescript',
  'javascript',
  'HTML',
  'CSS',
  'next',
  'reduxToolkit',
  'rtkQuery',
  'reactQuery',
  'zustand',
  'tailwindcss',
  'styledComponents',
  'mui',
  'supabase',
  'axios',
  'vite',
  'git',
]