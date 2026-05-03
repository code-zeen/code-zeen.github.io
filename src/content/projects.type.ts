import { TabEnum, TranslatedText } from '../types/enums.ts'
import { IconName } from '@/components/common/Icon.tsx'

export interface Project {
  type: TabEnum
  date: string
  location: TranslatedText
  title: TranslatedText
  contribution: number
  stacks?: IconName[]
  description: TranslatedText
  imageSlide?: ImageSlide[]

  thumbnailOne?: string
  thumbnailTwo?: string
  urlKr?: string
  urlEn?: string
}

interface ImageSlide extends TranslatedText {
  image: string
}