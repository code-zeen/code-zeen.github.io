import { TabEnum } from '@/types/enums.ts'

export const projectColorMap: Record<TabEnum, string> = {
  [TabEnum.PUBLISHING]: 'bg-orange-500',
  [TabEnum.JAVASCRIPT]: 'bg-yellow-400',
  [TabEnum.REACT]: 'bg-sky-400',
  [TabEnum.CAREER]: 'bg-purple-500',
  [TabEnum.TOYPROJECTS]: 'bg-rose-400',
}