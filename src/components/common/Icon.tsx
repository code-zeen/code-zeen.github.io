import {
  SiAxios,
  SiClaude,
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
import { MdLocationSearching, MdOutlineLocationOn, MdOutlineMail, MdOutlineSmartToy, MdPerson2, MdSmartphone, MdWork } from 'react-icons/md'
import { HiChevronDown, HiChevronUp, HiOutlineChartPie } from 'react-icons/hi'
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
  | 'email'
  | 'figma'
  | 'git'
  | 'github'
  | 'location'
  | 'mathJax'
  | 'mathQuill'
  | 'mui'
  | 'next'
  | 'person'
  | 'personality'
  | 'phone'
  | 'reactQuery'
  | 'reduxToolkit'
  | 'rtkQuery'
  | 'styledComponents'
  | 'supabase'
  | 'tailwindcss'
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
  email: { icon: MdOutlineMail, color: disabled },
  figma: { icon: SiFigma },
  git: { icon: SiGit },
  github: { icon: SiGithub },
  javascript: { icon: SiJavascript },
  location: { icon: MdOutlineLocationOn, color: disabled },
  mathJax: { icon: TbMath },
  mathQuill: { icon: GiQuill },
  mui: { icon: SiMui },
  next: { icon: SiNextdotjs },
  person: { icon: MdPerson2, color: disabled },
  personality: { icon: MdLocationSearching, color: disabled },
  phone: { icon: MdSmartphone, color: disabled },
  publishing: { icon: SiHtml5 },
  react: { icon: SiReact },
  reactQuery: { icon: SiReactquery },
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