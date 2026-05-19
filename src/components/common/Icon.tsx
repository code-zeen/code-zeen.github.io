import {
  SiAxios,
  SiClaude,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebstorm,
} from 'react-icons/si'
import { SlQuestion } from 'react-icons/sl'
import { MdOutlineLocationOn, MdOutlineMail, MdOutlineSmartToy, MdPerson2, MdSmartphone, MdWork } from 'react-icons/md'
import { HiChevronDown, HiChevronUp, HiOutlineChartPie, HiOutlineChatAlt } from 'react-icons/hi'
import { TbCircleLetterZFilled, TbMath } from 'react-icons/tb'
import { IconType } from 'react-icons'
import { TabEnumValues } from '@/types/enums.ts'
import { LuTextCursorInput } from 'react-icons/lu'
import { GiQuill } from 'react-icons/gi'

export type IconName =
  | 'apexCharts'
  | 'axios'
  | 'chevronDown'
  | 'chevronUp'
  | 'claudeAi'
  | 'CSS'
  | 'email'
  | 'figma'
  | 'git'
  | 'github'
  | 'HTML'
  | 'javascript'
  | 'language'
  | 'location'
  | 'mathJax'
  | 'mathQuill'
  | 'mui'
  | 'next'
  | 'person'
  | 'phone'
  | 'reduxToolkit'
  | 'rtkQuery'
  | 'styledComponents'
  | 'supabase'
  | 'tailwindcss'
  | 'tanstackQuery'
  | 'tinymceEditor'
  | 'typescript'
  | 'vite'
  | 'webstorm'
  | 'zustand'
  | TabEnumValues

const disabled = '#b4b4b4'

const iconMap: Record<IconName, { icon: IconType; color?: string }> = {
  apexCharts: { icon: HiOutlineChartPie },
  axios: { icon: SiAxios },
  career: { icon: MdWork },
  chevronDown: { icon: HiChevronDown },
  chevronUp: { icon: HiChevronUp },
  claudeAi: { icon: SiClaude },
  CSS: { icon: SiCss3 },
  email: { icon: MdOutlineMail, color: disabled },
  figma: { icon: SiFigma },
  git: { icon: SiGit },
  github: { icon: SiGithub },
  HTML: { icon: SiHtml5 },
  javascript: { icon: SiJavascript },
  language: { icon: HiOutlineChatAlt },
  location: { icon: MdOutlineLocationOn, color: disabled },
  mathJax: { icon: TbMath },
  mathQuill: { icon: GiQuill },
  mui: { icon: SiMui },
  next: { icon: SiNextdotjs },
  person: { icon: MdPerson2, color: disabled },
  phone: { icon: MdSmartphone, color: disabled },
  publishing: { icon: SiHtml5 },
  react: { icon: SiReact },
  tanstackQuery: { icon: SiReactquery },
  reduxToolkit: { icon: SiRedux },
  rtkQuery: { icon: SiRedux },
  styledComponents: { icon: SiStyledcomponents },
  supabase: { icon: SiSupabase },
  tailwindcss: { icon: SiTailwindcss },
  tinymceEditor: { icon: LuTextCursorInput },
  toyProjects: { icon: MdOutlineSmartToy },
  typescript: { icon: SiTypescript },
  vite: { icon: SiVite },
  webstorm: { icon: SiWebstorm },
  zustand: { icon: TbCircleLetterZFilled },
}

function Icon({ name }: { name: IconName }) {
  const entry = iconMap[name as IconName]
  if (!entry) return <SlQuestion />
  const { icon: IconComponent, color } = entry
  return <IconComponent color={color} />
}

export default Icon