import { TranslatedText } from '@/types/enums.ts'

export const aboutSkills: {
  react: TranslatedText[]
  git: TranslatedText[]
  misc: TranslatedText[]
  interests: TranslatedText[]
  goal: TranslatedText[]
} = {
  react: [
    {
      text: {
        ko: 'React의 꽃인 <em>재사용성</em>을 중요시 여깁니다. UI와 로직을 분리 시키기 위해 <em>컴포넌트 계층</em>를 고려합니다.',
        en: 'I value <em>reusability</em>, a core principle of React. I structure <em>component hierarchies</em> to clearly separate UI and logic.',
        de: 'Ich lege großen Wert auf <em>Wiederverwendbarkeit</em>, ein zentrales Prinzip von React. Ich strukturiere <em>Komponenten-Hierarchien</em>, um UI und Logik klar zu trennen.',
      },
    },
    {
      text: {
        ko: '<em>로컬 상태</em> vs <em>싱글턴 상태</em>, <em>prop</em> vs <em>전역상태</em> 접근을 통한 <em>데이터의 흐름</em>을 고민합니다.',
        en: 'I think carefully about <em>data flow</em>, including decisions between <em>local vs. shared (global) state</em>.',
        de: 'Ich denke sorgfältig über <em>Datenfluss</em> nach, insbesondere bei Entscheidungen zwischen <em>lokalem und gemeinsam genutztem (globalem) State</em>.',
      },
    },
    {
      text: {
        ko: '비즈니스 로직과 특히 재사용되는 로직은 <em>커스텀 Hook</em> 또는 util 함수를 통해 간결성과 코드 품질을 유지합니다. 복잡한 어플리케이션일수록 <em>모듈성</em>을 지향하지만 아직까지 모듈러 아키텍쳐까지는 구축해보지 않았습니다.',
        en: 'I keep reusable logic clean and maintainable by creating <em>custom hooks</em> or <em>utility functions</em>. As an application grows more complex, I aim for <em>modularity</em>.',
        de: 'Wiederverwendbare Logik halte ich durch <em>Custom Hooks</em> oder <em>Utility-Funktionen</em> sauber und wartbar. Mit zunehmender Komplexität einer Anwendung strebe ich nach mehr <em>Modularität</em>.',
      },
    },
    {
      text: {
        ko: '<em>React Developer Tools</em>를 사용해 렌더링/리렌더링 프로세스, 상태변화 감지, hook 사용여부, 등을 분석합니다. <em>최적화</em> 작업과 <em>디버깅</em> 할 때 사용합니다.',
        en: 'I use <em>React Developer Tools</em> to analyze rendering behavior and track state changes, for <em>optimization</em> and <em>debugging</em>.',
        de: 'Ich nutze <em>React Developer Tools</em>, um das Rendering-Verhalten zu analysieren und State-Änderungen zu verfolgen, insbesondere für <em>Optimierung</em> und <em>Debugging</em>.',
      },
    },
  ],
  git: [
    {
      text: {
        ko: '<em>Git</em>으로 버전관리를 하며 변경 사항을 <em>내용별로 토막내어</em> 정확하게 요약하여 작업 이력을 기록합니다.',
        en: 'I use <em>Git</em> for version control, breaking changes into small, meaningful <em>commits</em> with clear and accurate summaries.',
        de: 'Ich nutze <em>Git</em> für Versionskontrolle und teile Änderungen in kleine, sinnvolle <em>Commits</em> mit klaren und präzisen Beschreibungen auf.',
      },
    },
    {
      text: {
        ko: '<em>GitHub Desktop</em>의 힘을 빌려 <em>amend, undo, stash</em>, 등으로 팀원들의 <em>DevEx</em>를 고려한 깔끔한 커밋 히스토리를 유지합니다.',
        en: 'With the help of <em>GitHub Desktop</em>, I use features like <em>amend</em>, <em>undo</em>, and <em>stash</em> to maintain a clean <em>commit history</em> and improve team <em>DevEx</em>.',
        de: 'Mit <em>GitHub Desktop</em> verwende ich Funktionen wie <em>amend</em>, <em>undo</em> und <em>stash</em>, um eine saubere <em>Commit-Historie</em> zu pflegen und die <em>DevEx</em> im Team zu verbessern.',
      },
    },
    {
      text: {
        ko: '프론트엔드 <em>리드</em> 역할로 GitHub Issues <em>관리와 분배</em>, <em>브랜치 관리</em>, <em>풀 리퀘스트 검토</em>, <em>병합</em>, 그리고 <em>코드리뷰 진행</em>을 한 경험이 있습니다.',
        en: 'As a <em>frontend lead</em>, I have experience managing and assigning <em>GitHub Issues</em>, handling <em>branch management</em>, reviewing and merging <em>pull requests</em>, and conducting <em>code reviews</em>.',
        de: 'Als <em>Frontend Lead</em> habe ich Erfahrung in der Verwaltung und Zuweisung von <em>GitHub Issues</em>, <em>Branch-Management</em>, dem Prüfen und Mergen von <em>Pull Requests</em> sowie in der Durchführung von <em>Code Reviews</em>.',
      },
    },
    {
      text: {
        ko: '프론트엔드 <em>팀원</em> 역할로 이슈사항 <em>셀프 배정</em>, <em>브랜치 관리</em>, <em>풀 리퀘스트 생성</em>, 그리고 <em>코드리뷰 참여</em>을 한 경험이 <있습니다 class=""></있습니다>',
        en: 'As a <em>frontend team member</em>, I have experience <em>self-assigning issues</em>, managing <em>branches</em>, creating <em>pull requests</em>, and participating in <em>code reviews</em>.',
        de: 'Als <em>Frontend-Teammitglied</em> habe ich Erfahrung mit der <em>Selbstzuweisung von Issues</em>, dem <em>Branch-Management</em>, dem Erstellen von <em>Pull Requests</em> und der Teilnahme an <em>Code Reviews</em>.',
      },
    },
    {
      text: {
        ko: '<em>GitHub Pages</em> 또는 <em>Netlify</em>를 사용한 간단한 배포 자동화 경험이 있습니다.',
        en: 'I have basic experience with <em>deployment automation</em> using <em>GitHub Pages</em> or <em>Netlify</em>.',
        de: 'Ich habe grundlegende Erfahrung mit <em>Deployment-Automatisierung</em> über <em>GitHub Pages</em> oder <em>Netlify</em>.',
      },
    },
  ],
  misc: [
    {
      text: {
        ko: '<em>FTP</em> 또는 <em>CLI</em>를 사용해 리눅스 서버에 접속하여 빌드를 업데이트 한 경험이 있습니다.',
        en: 'I have experience accessing <em>Linux servers</em> via <em>FTP</em> or <em>CLI</em> to update builds.',
        de: 'Ich habe Erfahrung damit, auf <em>Linux-Server</em> über <em>FTP</em> oder <em>CLI</em> zuzugreifen, um Builds zu aktualisieren.',
      },
    },
    {
      text: {
        ko: '팀원과 소통할 때 이슈의 정확한 <em>위치/경로</em>, 이슈를 <em>재현</em>할 수 있는 단계, 이슈의 <em>원인</em>에 대한 추측, 등을 상황에 맞게 전달하여 효율적인 정보 전달을 위해 적극적으로 노력합니다.',
        en: 'When communicating with teammates, I strive for efficient information sharing by clearly describing the issue’s <em>location/path</em>, steps to <em>reproduce</em> it, and possible <em>causes</em>.',
        de: 'Bei der Kommunikation mit Teammitgliedern achte ich auf eine effiziente Informationsweitergabe, indem ich den <em>Ort/Pfad</em> des Problems, Schritte zur <em>Reproduktion</em> und mögliche <em>Ursachen</em> klar beschreibe.',
      },
    },
    {
      text: {
        ko: '코드의 <em>가독성</em>과 <em>일관성</em>을 중요하게 생각하며, <em>클린 코드</em>를 유지하여 유지보수성과 확장성을 높혀 일의 효율성을 높히려 항상 노력합니다.',
        en: 'I prioritize <em>readability and consistency</em>, and always strive to maintain clean code.',
        de: 'Ich lege großen Wert auf <em>Lesbarkeit und Konsistenz</em> und bemühe mich stets, <em>clean Code</em> zu schreiben.',
      },
    },
  ],
  interests: [
    {
      text: {
        ko: '디자인 패턴',
        en: 'Design Patterns',
        de: 'Design Patterns',
      },
    },
    {
      text: {
        ko: '유닛 테스트',
        en: 'Unit Tests',
        de: 'Unit Tests',
      },
    },
    {
      text: {
        ko: 'Docker',
        en: 'Docker',
        de: 'Docker',
      },
    },
    {
      text: {
        ko: '모바일 어플: React Native, Flutter',
        en: 'Mobile Apps: React Native, Flutter',
        de: 'Mobile Apps: React Native, Flutter',
      },
    },
  ],
  goal: [
    {
      text: {
        ko: '컴포넌트 라이브러리 직접 설계 및 제작',
        en: 'Contribute to major component libraries',
        de: 'Beitrag zu großen Component-Libraries leisten',
      },
    },
    {
      text: {
        ko: '타입스크립 마스터',
        en: 'Become the master of TypeScript',
        de: 'TypeScript meistern',
      },
    },
    {
      text: {
        ko: '풀스택 개발',
        en: 'Become a full-stack developer',
        de: 'Full-Stack-Entwickler werden',
      },
    },
  ],
}