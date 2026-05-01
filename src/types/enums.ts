export enum TabEnum {
  PUBLISHING = 'publishing',
  JAVASCRIPT = 'javascript',
  REACT = 'react',
  CAREER = 'career',
  TOYPROJECTS = 'toyProjects',
}

export enum LanguageEnum {
  KOREAN = 'ko',
  ENGLISH = 'en',
  GERMAN = 'de',
}

export interface TranslatedText {
  text: {
    [key in LanguageEnum]: string
  }
}

export type TabEnumValues = `${TabEnum}`