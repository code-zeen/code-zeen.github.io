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
import { TbCircleLetterZFilled } from 'react-icons/tb'
import { IconType } from 'react-icons'
import { TabEnumValues } from '@/types/enums.ts'

export type IconName =
  'email'
  | 'location'
  | 'person'
  | 'personality'
  | 'phone'
  | 'github'
  | 'apexCharts'
  | 'axios'
  | 'claudeAi'
  | 'figma'
  | 'git'
  | 'mui'
  | 'next'
  | 'reduxToolkit'
  | 'rtkQuery'
  | 'styledComponents'
  | 'supabase'
  | 'tailwindcss'
  | 'typescript'
  | 'vite'
  | 'webstorm'
  | 'zustand'
  | TabEnumValues
  | 'chevronUp'
  | 'chevronDown'

const disabled = '#b4b4b4'

const iconMap: Record<IconName, { icon: IconType; color?: string }> = {
  email: { icon: MdOutlineMail, color: disabled },
  location: { icon: MdOutlineLocationOn, color: disabled },
  person: { icon: MdPerson2, color: disabled },
  personality: { icon: MdLocationSearching, color: disabled },
  phone: { icon: MdSmartphone, color: disabled },
  github: { icon: SiGithub },
  apexCharts: { icon: HiOutlineChartPie },
  axios: { icon: SiAxios },
  claudeAi: { icon: SiClaude },
  figma: { icon: SiFigma },
  git: { icon: SiGit },
  mui: { icon: SiMui },
  next: { icon: SiNextdotjs },
  react: { icon: SiReact },
  reduxToolkit: { icon: SiRedux },
  rtkQuery: { icon: SiRedux },
  styledComponents: { icon: SiStyledcomponents },
  supabase: { icon: SiSupabase },
  tailwindcss: { icon: SiTailwindcss },
  typescript: { icon: SiTypescript },
  vite: { icon: SiVite },
  webstorm: { icon: SiWebstorm },
  zustand: { icon: TbCircleLetterZFilled },
  publishing: { icon: SiHtml5 },
  javascript: { icon: SiJavascript },
  career: { icon: MdWork },
  toyProjects: { icon: MdOutlineSmartToy },
  chevronUp: { icon: HiChevronUp },
  chevronDown: { icon: HiChevronDown },
}

function Icon({ name }: { name: IconName }) {
  const entry = iconMap[name as IconName]
  if (!entry) return <SlQuestion />
  const { icon: IconComponent, color } = entry
  return <IconComponent color={color} />
}

export default Icon