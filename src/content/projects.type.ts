import { TabEnum } from '../types/enums.ts'
import { IconName } from '@/components/common/Icon.tsx'

export interface Project {
  type: TabEnum
  date: string
  location: string
  title: string
  contribution: number
  stacks?: IconName[]
  description: string
  imageSlide?: ImageSlide[]

  thumbnailOne?: string
  thumbnailTwo?: string
  urlKr?: string
  urlEn?: string
}

interface ImageSlide {
  image: string
  caption: string
}