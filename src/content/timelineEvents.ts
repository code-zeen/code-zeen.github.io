import { TranslatedText } from '@/types/enums.ts'

export interface TimelineEvent extends TranslatedText {
  date: {
    start: string
    end: string
  }
  isNewYear?: boolean
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: { start: '2015', end: '2019' }, isNewYear: true, text: {
      ko: '대학',
      en: 'University (USA)',
      de: 'Universität (USA)',
    },
  }, {
    date: { start: '2021', end: '2022' }, isNewYear: true, text: {
      ko: '웹퍼블리셔 양성과정',
      en: 'Web Developer Course for HTML/CSS (South Korea)',
      de: 'Webentwicklungskurs für HTML/CSS (Südkorea)',
    },
  }, {
    date: { start: '', end: '2022' }, text: {
      ko: '웹디자인기능사 취득',
      en: 'Obtain Web Designer Certificate (South Korea)',
      de: 'Web-Designer Certifikat (Südkorea)',
    },
  }, {
    date: { start: '', end: '2022' }, text: {
      ko: 'JavaScript 독학',
      en: 'JavaScript Online-Course',
      de: 'JavaScript Online-Kurs',
    },
  }, {
    date: { start: '', end: '2022' }, text: {
      ko: 'TOEIC 990점 취득',
      en: 'Obtain TOEIC Score of 990/990',
      de: 'TOEIC Certifikat (990/990)',
    },
  }, {
    date: { start: '', end: '2022' }, text: {
      ko: 'React 독학',
      en: 'React Online-Course',
      de: 'React Online-Kurs',
    },
  }, {
    date: { start: '2023', end: '2024' }, isNewYear: true, text: {
      ko: '프론트엔드 정규직',
      en: 'Employed at KBI',
      de: 'Anstellung bei KBI (Südkorea)',
    },
  }, {
    date: { start: '', end: '2024' }, text: {
      ko: '프론트엔드 프리랜스',
      en: 'Freelanced at With Run',
      de: 'Freelance bei With Run (Südkorea)',
    },
  }, {
    date: { start: '2024', end: '2025' }, isNewYear: true, text: {
      ko: '프론트엔드 정규직',
      en: 'Employed at With Run',
      de: 'Anstellung bei With Run (Südkorea)',
    },
  },
  {
    date: { start: '', end: '2025' }, text: {
      ko: '독일 체류 시작',
      en: 'Move to Germany',
      de: 'Umzug nach Deutschland',
    },
  },
  {
    date: { start: '', end: '2026' }, isNewYear: true, text: {
      ko: '독일 어학원 (B1 진행중)',
      en: 'German Language School (Currently B1)',
      de: 'Sprachschule A2 bis B1(jetzt)',
    },
  },
]
