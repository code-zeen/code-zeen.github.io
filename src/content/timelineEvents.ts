export interface TimelineEvent {
  date: {
    year: string
    month: string
  }
  isNewYear?: boolean
  content: string
}

export const timelineEvents: TimelineEvent[] = [
  { date: { year: '2015', month: '08' }, isNewYear: true, content: '대학 입학' },
  { date: { year: '2019', month: '06' }, isNewYear: true, content: '휴학 및 귀국' },
  { date: { year: '2021', month: '12' }, isNewYear: true, content: '웹퍼블리셔 수강' },
  { date: { year: '2022', month: '05' }, isNewYear: true, content: '웹퍼블리셔 수료' },
  { date: { year: '2022', month: '06' }, content: '웹디자인기능사 취득' },
  { date: { year: '2022', month: '07' }, content: 'JavaScript 독학' },
  { date: { year: '2022', month: '10' }, content: 'TOEIC 990점 취득' },
  { date: { year: '2022', month: '11' }, content: 'React 독학' },
  { date: { year: '2023', month: '03' }, isNewYear: true, content: '프론트엔드 입사' },
  { date: { year: '2024', month: '03' }, isNewYear: true, content: '프론트엔드 퇴사' },
  { date: { year: '2024', month: '08' }, content: '프론트엔드 프리랜스' },
  { date: { year: '2024', month: '10' }, content: '프론트엔드 정규직 변환' },
]
