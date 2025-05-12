import { IconName } from '../components/common/Icon.tsx'

interface IconWithText {
  icon: IconName
  text: string
}

export const personalInfo: IconWithText[] = [
  { icon: 'person', text: '1996, 여' },
  { icon: 'email', text: 'aezeen_kim@naver.com' },
  { icon: 'location', text: '대전광역시, 유성구' },
  { icon: 'personality', text: 'INTP' },
]

export const skillSets: IconWithText[] = [
  { icon: 'react', text: 'React' },
  { icon: 'reduxToolkit', text: 'Redux Toolkit' },
  { icon: 'typescript', text: 'TypeScript' },
  { icon: 'mui', text: 'MUI' },
  { icon: 'vite', text: 'Vite' },
  { icon: 'git', text: 'Git' },
]