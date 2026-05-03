import happyPeople0 from '../assets/projects-1-happypeople-0.png'
import happyPeople1 from '../assets/projects-1-happypeople-1.png'
import mosh0 from '../assets/projects-2-mosh-0.png'
import mosh1 from '../assets/projects-2-mosh-1.png'
import recipes0 from '../assets/projects-3-recipes-0.png'
import recipes1 from '../assets/projects-3-recipes-1.png'
import blackjack from '../assets/projects-4-blackjack.png'
import password from '../assets/projects-5-password.png'
import conversion from '../assets/projects-6-conversion.png'
import travel from '../assets/projects-7-travel.png'
import memes from '../assets/projects-8-memes.png'
import tenzies from '../assets/projects-9-tenzies.png'
import quizzical from '../assets/projects-10-quizzical.png'
import movies from '../assets/projects-11-movies.png'
import { Project } from './projects.type.ts'
import { TabEnum } from '../types/enums.ts'
import oldBingo0 from '../assets/oldBingo0.png'
import oldBingo1 from '../assets/oldBingo1.png'
import oldBingo2 from '../assets/oldBingo2.png'
import oldBingo3 from '../assets/oldBingo3.png'
import newBingo0 from '../assets/newBingo0.png'
import newBingo1 from '../assets/newBingo1.png'
import newBingo2 from '../assets/newBingo2.png'
import newBingo3 from '../assets/newBingo3.png'
import wr1 from '../assets/wr1.png'
import wr2 from '../assets/wr2.png'
import wr3 from '../assets/wr3.png'
import wr4 from '../assets/wr4.png'
import wr5 from '../assets/wr5.png'
import wr6 from '../assets/wr6.png'
import wr7 from '../assets/wr7.png'
import wr8 from '../assets/wr8.gif'
import wr9 from '../assets/wr9.gif'
import wr10 from '../assets/wr10.gif'
import wr11 from '../assets/wr11.gif'
import ppbDitto from '../assets/ppb-ditto.gif'
import ppbGrumpig from '../assets/ppb-grumpig.gif'

export const projects: Project[] = [
  {
    type: TabEnum.PUBLISHING,
    date: '2022 . 02',
    location: {
      text: {
        ko: '그린컴퓨터아트학원',
        en: 'Green Computer Art Academy (Korea)',
        de: 'Green Computer Art Academy (Südkorea)',
      },
    },
    title: {
      text: {
        ko: 'Float, Position 이용한 정적 레아이웃 -해피피플',
        en: 'Creating Static Layouts using Float and Position',
        de: 'Creating Static Layouts using Float and Position',
      },
    },
    contribution: 100,
    description: {
      text: {
        ko: '첫 웹 리뉴얼 프로젝트 주제로 개선이 필요해 보이는 NGO 단체를 선정하였습니다. \n' +
          '빼곡하고 답답한 레이아웃을 여백과 아이콘을 사용하여 좀 더 여유롭고 효과적으로 정보가 눈에 들어올 수 있도록 디자인 하였습니다.',
        en: 'My first project was to find a website that could use some visual improvement, and to redesign their landing page. I chose an NGO website called "Happy People". \n' +
          'I redesigned the initially tight layout to be more spacious and breathable by utilizing whitespace and icons, which made the information more visually pleasing to the eye.',
        de: 'My first project was to find a website that could use some visual improvement, and to redesign their landing page. I chose an NGO website called "Happy People". \n' +
          'I redesigned the initially tight layout to be more spacious and breathable by utilizing whitespace and icons, which made the information more visually pleasing to the eye.',
      },
    },
    thumbnailOne: happyPeople0,
    thumbnailTwo: happyPeople1,
  },
  {
    type: TabEnum.PUBLISHING,
    date: '2022 . 03',
    location: {
      text: {
        ko: '그린컴퓨터아트학원',
        en: 'Green Computer Art Academy (Korea)',
        de: 'Green Computer Art Academy (Südkorea)',
      },
    },
    title: {
      text: {
        ko: 'Flexbox를 이용한 반응형 레이아웃 -mosh!',
        en: 'Creating Responsive Layouts with Flexbox',
        de: 'Creating Responsive Layouts with Flexbox',
      },
    },
    contribution: 100,
    description: {
      text: {
        ko: '적응형 웹사이트인 모쉬를 flexbox와 grid를 이용해 반응형으로 리뉴얼 하였습니다. \n' +
          '타사 보온/보냉 텀블러와 차별화된 성능과 디자인 요소를 메인페이지에 슬라이드로 추가하여 이 브랜드만의 장점을 살렸습니다.',
        en: 'My second project was to again find a website to redesign, but while engaging my newly acquired knowledge over flexbox and grids to create a responsive layout. I also had immense fun playing "Flexbox Froggy" and "Flexbox Ninja" during breaks 😄\n' +
          'I tried to create a slideable image carousel, which was challenging to implement to work smoothly both on desktop and mobile devices. Although I got it to work in the end, the size of the images were not stretching as much as I had wanted on desktop view.',
        de: 'My second project was to again find a website to redesign, but while engaging my newly acquired knowledge over flexbox and grids to create a responsive layout. I also had immense fun playing "Flexbox Froggy" and "Flexbox Ninja" during breaks 😄\n' +
          'I tried to create a slideable image carousel, which was challenging to implement to work smoothly both on desktop and mobile devices. Although I got it to work in the end, the size of the images were not stretching as much as I had wanted on desktop view.',
      },
    },
    thumbnailOne: mosh0,
    thumbnailTwo: mosh1,
  },
  {
    type: TabEnum.PUBLISHING,
    date: '2022 . 04',
    location: {
      text: {
        ko: '그린컴퓨터아트학원',
        en: 'Green Computer Art Academy (Korea)',
        de: 'Green Computer Art Academy (Südkorea)',
      },
    },
    title: {
      text: {
        ko: 'JavaScript를 활용한 masonry 레이아웃 -만개의레시피',
        en: 'Creating Masonry Layouts with JavaScript',
        de: 'Creating Masonry Layouts with JavaScript',
      },
    },
    contribution: 100,
    description: {
      text: {
        ko: '유저 컨텐츠에 의존하는 Pinterest의 masonry 레이아웃을 연구하여 적용해보았습니다. \n' +
          '적응형인 기존 웹사이트 또한 반응형으로 리뉴얼 하였습니다.',
        en: 'My final project was yet another mission to revamp. I was inspired to try implementing Pinterest\'s masonry layout, which fits this cooking website\'s infinitely generated user content. With barely any knowledge in JavaScript or jQuery, I managed to find a blogpost that had a step-by-step tutorial that allowed me to create the layout that I wanted.',
        de: 'My final project was yet another mission to revamp. I was inspired to try implementing Pinterest\'s masonry layout, which fits this cooking website\'s infinitely generated user content. With barely any knowledge in JavaScript or jQuery, I managed to find a blogpost that had a step-by-step tutorial that allowed me to create the layout that I wanted.',
      },
    },
    thumbnailOne: recipes0,
    thumbnailTwo: recipes1,
  },
  {
    type: TabEnum.JAVASCRIPT,
    date: '2022 . 08',
    location: {
      text: {
        ko: 'Scrimba - Learn JavaScript',
        en: 'Scrimba - Learn JavaScript',
        de: 'Scrimba - Learn JavaScript',
      },
    },
    title: {
      text: {
        ko: '카드 게임 : 블랙잭',
        en: 'Blackjack Card Game',
        de: 'Blackjack Card Game',
      },
    },
    contribution: 75,
    description: {
      text: {
        ko: '블랙잭 카드게임에 필요한 다양한 로직들을 구현하였습니다.',
        en: 'A course project for understanding the flow of programmatic logic and dealing with chains of if-else statements.',
        de: 'A course project for understanding the flow of programmatic logic and dealing with chains of if-else statements.',
      },
    },
    thumbnailOne: blackjack,
    urlKr: 'https://zeen-blackjack-kr.netlify.app/',
    urlEn: 'https://zeen-blackjack-en.netlify.app/',
  },
  {
    type: TabEnum.JAVASCRIPT,
    date: '2022 . 08',
    location: {
      text: {
        ko: 'Scrimba - Learn JavaScript',
        en: 'Scrimba - Learn JavaScript',
        de: 'Scrimba - Learn JavaScript',
      },
    },
    title: {
      text: {
        ko: '랜덤 암호 만들기',
        en: 'Random Password Generator',
        de: 'Random Password Generator',
      },
    },
    contribution: 75,
    description: {
      text: {
        ko: '영문 대문자, 소문자, 숫자, 그리고 특수기호가 포함된 15자 비밀번호를 생성할 수 있습니다. \n' +
          '생성된 비밀번호를 클릭하면 자동으로 클립보드에 저장됩니다.',
        en: 'A course project for learning about ASCI characters and randomization. It generates a 15-character password that includes uppercase letters, lowercase letters, numbers, and special characters.',
        de: 'A course project for learning about ASCI characters and randomization. It generates a 15-character password that includes uppercase letters, lowercase letters, numbers, and special characters.',
      },
    },
    thumbnailOne: password,
    urlKr: 'https://zeen-password-kr.netlify.app',
    urlEn: 'https://zeen-password-en.netlify.app',
  },
  {
    type: TabEnum.JAVASCRIPT,
    date: '2022 . 08',
    location: {
      text: {
        ko: 'Scrimba - Learn JavaScript',
        en: 'Scrimba - Learn JavaScript',
        de: 'Scrimba - Learn JavaScript',
      },
    },
    title: {
      text: {
        ko: '단위 변환기',
        en: 'Unit Converter',
        de: 'Einheitenkonverter',
      },
    },
    contribution: 75,
    description: {
      text: {
        ko: '미터법(Metric System)과 야드파운드법(Imperial System)의 변환을 빠르게 할 수 있습니다. \n' +
          '소수점 3자리까지 반올림하여 표시됩니다',
        en: 'A course project for learning how to take in user input, do basic calculations, and display the result.',
        de: 'A course project for learning how to take in user input, do basic calculations, and display the result.',
      },
    },
    thumbnailOne: conversion,
    urlKr: 'https://zeen-conversion-kr.netlify.app',
    urlEn: 'https://zeen-conversion-en.netlify.app',
  },
  {
    type: TabEnum.REACT,
    date: '2022 . 11',
    location: {
      text: {
        ko: 'Scrimba - The Frontend Developer Career Path',
        en: 'Scrimba - The Frontend Developer Career Path',
        de: 'Scrimba - The Frontend Developer Career Path',
      },
    },
    title: {
      text: {
        ko: '여행 일지',
        en: 'Travel Journal',
        de: 'Reisejournal',
      },
    },
    contribution: 75,
    description: {
      text: {
        ko: '<em>커스텀 컴포넌트, props, .map()</em>을 사용하여 하나의 json 파일의 정보를 화면에 표현하는 <em>정적 레이아웃</em>을 제작했습니다.',
        en: 'A project aimed at understanding how to use <em>custom components, props, and .map()</em> to create a static layout that displays information from a single json file.',
        de: 'A project aimed at understanding how to use <em>custom components, props, and .map()</em> to create a static layout that displays information from a single json file.',
      },
    },
    thumbnailOne: travel,
    urlKr: 'https://zeen-travel-kr.netlify.app',
  },
  {
    type: TabEnum.REACT,
    date: '2022 . 12',
    location: {
      text: {
        ko: 'Scrimba - The Frontend Developer Career Path',
        en: 'Scrimba - The Frontend Developer Career Path',
        de: 'Scrimba - The Frontend Developer Career Path',
      },
    },
    title: {
      text: {
        ko: '밈(meme) 제작기',
        en: 'Meme Generator',
        de: 'Meme Generator',
      },
    },
    contribution: 75,
    description: {
      text: {
        ko: '<em>Form</em>을 통해 받는 유저의 <em>input</em>을 리액트가 제어할 수 있는 <em>제어 컴포넌트</em>로 만들었습니다. \n' +
          '사용자의 텍스트를 이미지 위에 렌더링을 하고, 밈 이미지는 버튼 클릭시 무작위 이미지를 <em>useEffect를 이용하여 API 호출</em>을합니다.',
        en: 'A project dealing with <em>Form, input, and useEffect</em> to understand how <em>controlled inputs</em> allows the inputted text to be stored and handled by React State rather than the native input element. <em>useEffect</em> taught me how to fetch data via API call.',
        de: 'A project dealing with <em>Form, input, and useEffect</em> to understand how <em>controlled inputs</em> allows the inputted text to be stored and handled by React State rather than the native input element. <em>useEffect</em> taught me how to fetch data via API call.',
      },
    },
    thumbnailOne: memes,
    urlEn: 'https://zeen-meme-en.netlify.app',
  },
  {
    type: TabEnum.REACT,
    date: '2023 . 01',
    location: {
      text: {
        ko: 'Scrimba - The Frontend Developer Career Path',
        en: 'Scrimba - The Frontend Developer Career Path',
        de: 'Scrimba - The Frontend Developer Career Path',
      },
    },
    title: {
      text: {
        ko: '주사위 게임',
        en: 'Tenzies Dice Game',
        de: 'Tenzies Dice Game',
      },
    },
    contribution: 75,
    description: {
      text: {
        ko: '각각의 주사위를 오브젝트화 하여 데이터를 담았습니다. \n' +
          'Win-condition 충족시 (모든 주사위가 선택되었고, 모든 수가 같은 수일때) 게임을 이기고\n <em>자신의 최고기록이 sessionStorage에 남아</em> 재도전할 수 있는 단순한 게임을 제작하였습니다.',
        en: 'A simple dice game where each die is an object that stores data. \n' +
          'The game is won when the numbers on all the dice are the same. \n' +
          'I learned to use <em>sessionStorage</em> and <em>localStorage</em> to store and retrieve the player\'s high score.',
        de: 'A simple dice game where each die is an object that stores data. \n' +
          'The game is won when the numbers on all the dice are the same. \n' +
          'I learned to use <em>sessionStorage</em> and <em>localStorage</em> to store and retrieve the player\'s high score.',
      },
    },
    thumbnailOne: tenzies,
    urlKr: 'https://zeen-tenzies-kr.netlify.app',
    urlEn: 'https://zeen-tenzies-en.netlify.app',
  },
  {
    type: TabEnum.REACT,
    date: '2023 . 01',
    location: {
      text: {
        ko: 'Scrimba - The Frontend Developer Career Path',
        en: 'Scrimba - The Frontend Developer Career Path',
        de: 'Scrimba - The Frontend Developer Career Path',
      },
    },
    title: {
      text: {
        ko: '상식 퀴즈 (English)',
        en: 'Trivia Quiz',
        de: 'Trivia Quiz',
      },
    },
    contribution: 75,
    description: {
      text: {
        ko: '잡상식 질문 API를 <em>객관식 퀴즈</em> UI로 표현하였습니다. \n' +
          'Check Answers 버튼으로 <em>답을 확인 및 채점</em> 할 수 있고, <em>New Quiz</em> 버튼을 눌러 새로운 질문들을 받아 올 수 있습니다.',
        en: 'I created a trivia quiz using the Trivia API. \n' +
          'The user can click the "Check Answers" button to find out their score, and can receive new questions by clicking the "New Quiz" button, which fetches a new group of questions from the Trivia API.',
        de: 'I created a trivia quiz using the Trivia API. \n' +
          'The user can click the "Check Answers" button to find out their score, and can receive new questions by clicking the "New Quiz" button, which fetches a new group of questions from the Trivia API.',
      },
    },
    thumbnailOne: quizzical,
    urlEn: 'https://zeen-quizzical-en.netlify.app',
  },
  {
    type: TabEnum.REACT,
    date: '2023 . 02',
    location: {
      text: {
        ko: 'Scrimba - The Frontend Developer Career Path',
        en: 'Scrimba - The Frontend Developer Career Path',
        de: 'Scrimba - The Frontend Developer Career Path',
      },
    },
    title: {
      text: {
        ko: '영화 검색',
        en: 'Movie Search',
        de: 'Movie Search',
      },
    },
    contribution: 75,
    description: {
      text: {
        ko: '<em>React Router</em>를 활용해 <em>검색 페이지, 상세 페이지 (제작중단), 그리고 마이 페이지</em>로 조합된 싱글 페이지 어플(SPA)입니다. \n' +
          '<em>오픈 무비(OMDb) API</em>로 영화를 검색하여 <em>북마크 버튼</em>을 통해 개인페이지에 저장할 수 있습니다. \n' +
          '개인페이지 데이터는 sessionStorage로 브라우저창을 닫으면 데이터가 삭제됩니다. \n' +
          '<em>Context API</em>를 통해 글로벌 상태/데이터 관리를 하였고 "검색 페이지"가 언마운트 되어도 재빨리 마지막 검색기록으로 돌아갈 수 있습니다.',
        en: 'The final project of the course where I developed a <em>single-page application (SPA)</em> using <em>React Router</em> to create multiple "pages" such as search, movie detail, and user page. \n' +
          'I used the <em>Open Movie Database (OMDb) API</em> to search for movies and allowed users to bookmark movies into their user page, by storing the movie data in <em>sessionStorage</em>. \n' +
          'I learned the concept of <em>global state</em> using Context API, which ensures that data persists, even when components are unmounted.',
        de: 'The final project of the course where I developed a <em>single-page application (SPA)</em> using <em>React Router</em> to create multiple "pages" such as search, movie detail, and user page. \n' +
          'I used the <em>Open Movie Database (OMDb) API</em> to search for movies and allowed users to bookmark movies into their user page, by storing the movie data in <em>sessionStorage</em>. \n' +
          'I learned the concept of <em>global state</em> using Context API, which ensures that data persists, even when components are unmounted.',
      },
    },
    thumbnailOne: movies,
    urlEn: 'https://zeen-movies-en.netlify.app',
  },
  {
    type: TabEnum.CAREER,
    date: '2023 . 04 ~ 2023 . 12',
    location: {
      text: {
        ko: '(주)케이비아이',
        en: 'KBI',
        de: 'KBI',
      },
    },
    title: {
      text: {
        ko: 'BingoCVM 취약점 진단 솔루션 2.x',
        en: 'BingoCVM 2.x : Continuous Vulnerability Management',
        de: 'BingoCVM 2.x : Continuous Vulnerability Management',
      },
    },
    contribution: 40,
    stacks: ['react', 'javascript', 'reduxToolkit', 'mui', 'apexCharts'],
    description:
      {
        text: {
          ko: '<em>(주)케이비아이</em>의 자사 프로그램인 <em>BingoCVM</em>은 기관의 디지털 자산의 취약점을 자동진단하여 한국인터넷진흥원 (KISA)의 최신 기준에 준수하여 <em>디지털 침해사고 피해를 방지하는 CAASM 프로그램</em>입니다.<br/><br/>' +
            '프로그램의 유지보수 및 기능추가를 <em>풀스택 개발자 2명과 함께</em> <em>총 3명</em>이서 진행했습니다.<br/><br/>' +
            '<em>기본적인 CRUD</em> 기능으로 로그인, 계정생성, 자산등록, 자산진단, 진단내역 조회, 취약항목 조회, 취약항목에 대한 조치 등록, 조치내역 조회, 자료실 파일 업로드/다운로드, 관리자 감사(로그) 조회, 물리적/관리적 취약점 수동 등록, 스크립트 관리, 시스템 설정페이지가 있습니다.\n\n' +
            '<em>RESTful API</em>를 통해 백엔드와 통신을 했습니다.<br/>' +
            '코드베이스를 익혀가며 <em>컴포넌트 리팩토링</em> 작업도 진행하며, MUI를 사용한 신규 화면 <em>UI/UX 제작</em>도 하였습니다.<br/>' +
            '고객에게 전달받은 의견을 개발팀 회의를 통해 의논하고 프로그램에 반영하여 고도화하였습니다',
          en: '<em>KBI</em>\'s product <em>Bingo CVM</em> is a software that manages vulnerabilities for digital assets of organizations, ensuring compliance with the latest standards set by <em>Korea Internet &amp; Security Agency (KISA)</em> to prevent digital security incidents.<br/><br/>' +
            'I worked with 2 full-stack developers, who had migrated the legacy code into more modern frameworks.<br/><br/>' +
            'I learned tremendously from the experience by analyzing the existing codebase. I worked on developing <em>new features requested</em> by our clients using <em>Material UI</em> as well as <em>refactoring</em> the existing code to reduce errors occuring from redundancies. I battled day and night with <em>Redux Toolkit</em>, and the more I learned about its functionalities, the more my fear gave way into quiet reverence 😲.',
          de: '<em>KBI</em>\'s product <em>Bingo CVM</em> is a software that manages vulnerabilities for digital assets of organizations, ensuring compliance with the latest standards set by <em>Korea Internet &amp; Security Agency (KISA)</em> to prevent digital security incidents.<br/><br/>' +
            'I worked with 2 full-stack developers, who had migrated the legacy code into more modern frameworks.<br/><br/>' +
            'I learned tremendously from the experience by analyzing the existing codebase. I worked on developing <em>new features requested</em> by our clients using <em>Material UI</em> as well as <em>refactoring</em> the existing code to reduce errors occuring from redundancies. I battled day and night with <em>Redux Toolkit</em>, and the more I learned about its functionalities, the more my fear gave way into quiet reverence 😲.',
        },
      },
    imageSlide: [{
      image: oldBingo0, text: {
        ko: '랜딩화면',
        en: 'List of Server Assets',
        de: 'List of Server Assets',
      },
    }, {
      image: oldBingo1, text: {
        ko: '취약점 체크리스트 및 점수표',
        en: 'List of Vulnerability Checklists and Scores',
        de: 'List of Vulnerability Checklists and Scores',
      },
    }, {
      image: oldBingo2, text: {
        ko: '계정 목록 및 생성',
        en: 'Account List and Creation',
        de: 'Account List and Creation',
      },
    }, {
      image: oldBingo3, text: {
        ko: '자료실 및 파일 업로드',
        en: 'File Download and Upload',
        de: 'File Download and Upload',
      },
    }],
  },
  {
    type: TabEnum.CAREER,
    date: '2023 . 07 ~ 2024 . 02',
    location: {
      text: {
        ko: '(주)케이비아이',
        en: 'KBI',
        de: 'KBI',
      },
    },
    title: {
      text: {
        ko: 'BingoCVM 취약점 진단 솔루션 2.x',
        en: 'BingoCVM 3.x : Vulnerability Management',
        de: 'BingoCVM 3.x : Vulnerability Management',
      },
    },
    contribution: 99,
    stacks: ['react', 'typescript', 'reduxToolkit', 'rtkQuery', 'axios', 'mui', 'apexCharts'],
    description:
      {
        text: {
          ko: '기존 버전의 기술적 한계를 극복하기 위해 저희 개발팀은 새로운 버전을 만들기로 결정했습니다.<br/><br/>' +
            '이 프로젝트의 <em>프론트엔드는 제가 담당하여 총괄하게 되었고</em> 나머지 2명의 개발자는 백엔드에 몰두하여 좋은 시너지를 발휘할 수 있었습니다.<br/>추후에 프론트엔드 개발자가 추가되었습니다.<br/><br/>' +
            '더욱 효율적인 빌드툴 Vite를 선택했고, TypeScript를 엄격하게 사용하여 <em>개발환경과 코드 품질을 향상시켰습니다</em>.<br/>' +
            '<em>전역으로 관리되어야 하는 요소들</em> (디자인 테마, 에러 핸들링, 토큰/권한 확인, 로딩 UI 등)을 <em>middleware</em> 또는 <em>config</em>를 생성하여 <em>시스테믹하게 설계해</em> 유지보수와 개발 효율을 급격히 증가하였습니다.<br/>' +
            '<em>Redux-Toolkit</em>을 더 파고들어 로컬상태와 전역상태를 구분하여 <em>Store에 저장되는 데이터와 액션함수의 양을 30% 이상 줄일 수 있었습니다.</em> 기본적인 <em>reducers</em> 뿐만 아니라 <em>extraReducers</em>도 활용해 API 통신의 응답 상황에 따른 유동적인 처리도 추가하였습니다. 또한 <em>RTK Query</em>에 대해 알게되어 <em>캐싱</em>으로 동일한 쿼리에 대한 <em>중복 요청 방지</em>, <em>로딩 상태 추적</em>, 등의 API을 활용해 코드의 복잡성을 줄일 뿐만 아니라 <em>더욱 부드러운 유저 경험</em>을 제공했습니다.<br/><br/>' +
            'Chart-js, ApexCharts 등 여러 <em>데이터 시각화 라이브러리</em>를 테스트 해보며 선택하여 사용자 대시보드를 기획하고 제작했습니다.',
          en: 'We decided to migrate the existing program into the <em>next version</em>.<br/><br/>' +
            'My team was fully onboard with giving me full reign over the entire new Frontend codebase, so that they could focus solely on the backend.<br/><br/>' +
            'I proposed a lot of changes: replace <em>Create React App</em> with <em>Vite</em> to drastically improve compile and build times; use <em>Axios</em> to set global configurations to authenticate all requests; handle API responses and errors in a more centralized location using <em>Redux Toolkit\'s middleware</em>; use <em>RTK Query</em> to track every API request status; create a consistent design theme by implementing <em>MUI\'s customizable theme object</em>; set stricter rules for using global states only when necessary, thus reducing roughly 30% in lines of pure code; and so on.<br/><br/>' +
            'By the suggestion of my lead dev, I researched and introduced <em>TypeScript</em> to the project, though yet rudimentary. I also gained experience with <em>data visualization tools</em> such as <em>Chart-js</em> and <em>ApexCharts</em>',
          de: 'We decided to migrate the existing program into the <em>next version</em>.<br/><br/>' +
            'My team was fully onboard with giving me full reign over the entire new Frontend codebase, so that they could focus solely on the backend.<br/><br/>' +
            'I proposed a lot of changes: replace <em>Create React App</em> with <em>Vite</em> to drastically improve compile and build times; use <em>Axios</em> to set global configurations to authenticate all requests; handle API responses and errors in a more centralized location using <em>Redux Toolkit\'s middleware</em>; use <em>RTK Query</em> to track every API request status; create a consistent design theme by implementing <em>MUI\'s customizable theme object</em>; set stricter rules for using global states only when necessary, thus reducing roughly 30% in lines of pure code; and so on.<br/><br/>' +
            'By the suggestion of my lead dev, I researched and introduced <em>TypeScript</em> to the project, though yet rudimentary. I also gained experience with <em>data visualization tools</em> such as <em>Chart-js</em> and <em>ApexCharts</em>',
        },
      },
    imageSlide: [{
      image: newBingo0, text: {
        ko: '대시보드',
        en: 'Dashboard',
        de: 'Dashboard',
      },
    }, {
      image: newBingo1, text: {
        ko: '취약점 체크리스트 및 점수표',
        en: 'List of Vulnerability Checklists and Scores',
        de: 'List of Vulnerability Checklists and Scores',
      },
    }, {
      image: newBingo2, text: {
        ko: '계정 목록 및 생성',
        en: 'Account List and Creation',
        de: 'Account List and Creation',
      },
    }, {
      image: newBingo3, text: {
        ko: '자료실 및 파일 업로드',
        en: 'File Download and Upload',
        de: 'File Download and Upload',
      },
    }],
  },
  {
    type: TabEnum.CAREER,
    date: '2024 . 08 ~ 2024 . 12',
    location: {
      text: {
        ko: '위드런 (WithRun)',
        en: 'WithRun',
        de: 'WithRun',
      },
    },
    title: {
      text: {
        ko: '컴퓨터 기반 평가 문제은행: 프로토타입 구축',
        en: 'Digital Testing System: Prototype',
        de: 'Digital Testing System: Prototype',
      },
    },
    contribution: 50,
    stacks: ['react', 'javascript', 'supabase', 'styledComponents'],
    description:
      {
        text: {
          ko: '<em>위드런(WithRun)</em>의 <em>컴퓨터 기반 평가 문제은행</em>은 초등학생 선생님들이 문제 은행에서 과목, 단원, 문제유형과 난이도를 선택하여 문제를 만들고, 학생들에게 배포하여 풀게 할 수 있는 <em>디지털 교과서 서비스</em>입니다.<br/><br/>' +
            '<em>풀스택 시니어 개발자 1명</em>과 <em>프론트엔드 개발자 1명</em>과 함께 <em>총 3명</em>이서 진행했습니다. 빠른 시일 내에 프로토타입을 창출하기 위해 <em>백엔드 없이 supabase를 사용한 서버리스</em> 형식으로 개발하였습니다.<br/><br/>' +
            '초등학생이 대상인 특성상, 다양한 형태의 문제를 구현해야 했습니다. 고객이 요청한 끝없이 다양한 문제 레이아웃을 <em>데이터베이스만을 사용하여 구현하기 어려워</em>, 퍼블리싱 팀이 <em>커스텀으로 제작한 HTML 파일</em>을 읽어와 <em>html-react-parser</em>를 사용해 리액트 형식으로 파싱하여 기능구현 하는 작업을 맡았습니다. 그 중 가장 새로웠던 경험은 <em>canvas</em>를 이용한 <em>"점 연결하기"</em> 기능과 <em>react-dnd</em>를 사용한 <em>"끌어놓기"</em> 기능이었습니다. 그렇게 인터랙션을 구현한 뒤, 학생이 입력한 값을 DB와 맞는 형식으로 변환한 뒤 학생 입력값을 정답값과 비교하여 <em>자동채점</em> 기능까지 구현하였습니다.<br/><br/>' +
            '그 외의 작업은 보편적인 CRUD 기능이었지만, 백엔드 없이 직접 supabase를 호출하여 <em>데이터베이스 조회, 변경, 삭제</em>등 하였습니다. supabase API를 사용하여 자바스크립트만을 통해 여러 테이블들을 쿼리 하여 데이터를 직접 계산/가공하는 과정이 많았습니다.<br/><br/>' +
            '시니어 개발자의 주도 아래 <em>ChatGPT</em>, <em>Claude</em>, <em>Cursor</em>, <em>GitHub Copilot</em>, 등을 활용하여 처음으로 <em>다양한 AI 툴</em>들을 사용한 프로젝트였습니다.',
          en: '<em>With Run</em>\'s <em>digital testing application</em> allows grade school teachers to <em>generate tests</em> from an existing questions database, by selecting the class, subject, chapter, difficulty, and more.<br/><br/>' +
            'I worked with a senior full-stack developer and a frontend developer. In order to create the prototype as fast as possible, we used <em>supabase</em> to call APIs directly from JavaScript to query multiple tables, perform calculations, and process data. This allowed us to develop the application <em>without the need for a backend server</em>. ' +
            'To suit the visual needs of grade school students, we had to implement various layouts that were impossible to implement only with a database. To achieve this, we had a team of web designers who created thousands of custom HTML files. I parsed these HTML files into JSX using <em>html-react-parser</em>, so that I could add functionality to the interactable elements. One of the most challenging aspects of this project was implementing the <em>canvas</em>-based <em>"connect the dots"</em> feature and the <em>react-dnd</em>-based <em>"drag and drop"</em> feature.<br/><br/>' +
            'After implementing the interactions, we converted the student input into a format that matched the database and compared it to the correct answer to implement the <em>automatic grading</em> feature.',
          de: '<em>With Run</em>\'s <em>digital testing application</em> allows grade school teachers to <em>generate tests</em> from an existing questions database, by selecting the class, subject, chapter, difficulty, and more.<br/><br/>' +
            'I worked with a senior full-stack developer and a frontend developer. In order to create the prototype as fast as possible, we used <em>supabase</em> to call APIs directly from JavaScript to query multiple tables, perform calculations, and process data. This allowed us to develop the application <em>without the need for a backend server</em>. ' +
            'To suit the visual needs of grade school students, we had to implement various layouts that were impossible to implement only with a database. To achieve this, we had a team of web designers who created thousands of custom HTML files. I parsed these HTML files into JSX using <em>html-react-parser</em>, so that I could add functionality to the interactable elements. One of the most challenging aspects of this project was implementing the <em>canvas</em>-based <em>"connect the dots"</em> feature and the <em>react-dnd</em>-based <em>"drag and drop"</em> feature.<br/><br/>' +
            'After implementing the interactions, we converted the student input into a format that matched the database and compared it to the correct answer to implement the <em>automatic grading</em> feature.',
        },
      },
    imageSlide: [{
      image: wr1, text: {
        ko: '점 연결하기',
        en: 'Connect the Dots',
        de: 'Connect the Dots',
      },
    }, {
      image: wr2, text: {
        ko: '끌어넣기 (복수 가능, 중복 불가)',
        en: 'Drag & Drop',
        de: 'Drag & Drop',
      },
    }, {
      image: wr3, text: {
        ko: '끌어넣기 (복수 불가)',
        en: 'Drag & Drop',
        de: 'Drag & Drop',
      },
    }, {
      image: wr4, text: {
        ko: '선택하기',
        en: 'Select',
        de: 'Select',
      },
    }, {
      image: wr5, text: {
        ko: '라디오 버튼',
        en: 'Radio Buttons',
        de: 'Radio Buttons',
      },
    }, {
      image: wr6, text: {
        ko: '라디오 버튼',
        en: 'Radio Buttons',
        de: 'Radio Buttons',
      },
    }, {
      image: wr7, text: {
        ko: '라디오 버튼',
        en: 'Radio Buttons',
        de: 'Radio Buttons',
      },
    }],
  },
  {
    type: TabEnum.CAREER,
    date: '2024 . 11 ~ 2025 . 04',
    location: {
      text: {
        ko: '위드런 (WithRun)',
        en: 'WithRun',
        de: 'WithRun',
      },
    },
    title: {
      text: {
        ko: '컴퓨터 기반 평가 문제은행: NextJS 마이그레이션',
        en: 'Digital Testing System: NextJS Migration',
        de: 'Digital Testing System: NextJS Migration',
      },
    },
    contribution: 50,
    stacks: ['next', 'typescript', 'reactQuery', 'zustand', 'axios'],
    description:
      {
        text: {
          ko: '기존 React 프로젝트를 <em>NextJS로 마이그레이션</em> 작업을 진행했습니다.<br/><br/>' +
            '마이그레이션을 진행하게 된 가장 큰 이유는 클라이언트에 <em>이미지 업로드</em>를 하기 위해서지만 이 부분은 다른 팀원이 담당하였습니다.<br/><br/>' +
            'Next를 사용하게되며 <em>App Router</em>를 사용했고, 기존에 클라이언트에서 처리하던 supabase 요청을 NextJS 서버 API로 옮겨 작성한 후 적용했습니다. 이로 인해 <em>API key 노출 문제</em>도 해결이 되었습니다.<br/><br/>' +
            '사용자 수가 증가할 경우 supabase 비용 부담에 대한 우려로 백엔드 개발자가 충원이 되며 기존 supabse에서 제공해주던 <em>실시간(real-time) 기능</em>들을 백엔드와 협업하여 <em>Server-Sent Events(SSE)</em>로 구현해 실기간 트래픽을 자체 서버로 분산하였습니다.',
          en: 'Our team migrated the React-based prototype to <em>NextJS</em>. We also migrated all the supabase requests from the client to <em>NextJS server APIs</em>. This resolved the <em>API key exposure issue</em>.<br/><br/>' +
            'As the number of users (and thus requests) increased, the cost of supabase became unpredictable, so backend developers were added to our team to build and host our own server. We collaborated with the backend to implement <em>Server-Sent Events(SSE)</em> for real-time features for time-sensitive interactions during live exams.',
          de: 'Our team migrated the React-based prototype to <em>NextJS</em>. We also migrated all the supabase requests from the client to <em>NextJS server APIs</em>. This resolved the <em>API key exposure issue</em>.<br/><br/>' +
            'As the number of users (and thus requests) increased, the cost of supabase became unpredictable, so backend developers were added to our team to build and host our own server. We collaborated with the backend to implement <em>Server-Sent Events(SSE)</em> for real-time features for time-sensitive interactions during live exams.',
        },
      },
  },
  {
    type: TabEnum.CAREER,
    date: '2025 . 04 ~ 2025.05',
    location: {
      text: {
        ko: '위드런 (WithRun)',
        en: 'WithRun',
        de: 'WithRun',
      },
    },
    title: {
      text: {
        ko: '문제은행 에디터',
        en: 'Digital: Test Editor',
        de: 'Digital: Test Editor',
      },
    },
    contribution: 90,
    stacks: ['next', 'typescript', 'tinymceEditor', 'mathQuill', 'mathJax'],
    description:
      {
        text: {
          ko: '사용자가 직접 <em>문제은행 컨텐츠 제작</em>을 할 수 있는 <em>텍스트 에디터</em> 프로토타입을 개발 중입니다.<br/><br/>' +
            '퍼블리셔가 디자인한 수많은 템플릿 중에 사용자가 선택, 조합, 수정하는 기능과, 중고등학생 대상으로 필요한 <em>수식을 손쉽게 작성할 수 있는 편집기</em>를 구현하였습니다.<br/><br/>' +
            '<em>TinyMCE</em>의 무료 기능에 커스텀 기능을 추가하여 툴바에 제공을 하고, 입력은 <em>MathQuill</em>, 출력은 <em>MathJax</em>를 통해 svg 또는 png 이미지로 에디터와 미리보기 화면에 출력하여 사용자가 레이아웃을 자유롭게 수정할 수 있습니다.<br/><br/>',
          en: 'I was given the task of brainstorming and creating a <em>text-based editor</em> that allows teachers to <em>create their own content</em> to be saved into the questions database.<br/><br/>' +
            'I developed a feature where the user can choose from a selection of templates, and then modify the content and layout to fit their own needs, using the free version of an opensource editor called <em>Tiny MCE Editor</em>.<br/><br/>' +
            'Additionally, I designed and developed the prototype for a completely new feature requested by our clients - <em>the math editor</em>, designed for use in <em>middle school</em> and <em>high school</em>. The editor integrates <em>TinyMCE</em> with custom features for the toolbar, <em>MathQuill</em> for input, and <em>MathJax</em> for output, which renders the mathematical expression as either an svg or png image for both the editor and preview screen, allowing users to freely modify the size, position, and layout. I saved the user\'s input as a <em>MathQuill-format string</em> in the <em>alt content of the image</em>, so that the content of the math expression can always be recalled, in case the user wants to edit the svg or png image.<br/><br/>' +
            'I presented my ideas in meetings in the form of <em>functioning prototypes</em>, which made it easy and intuitive to understand for everyone involved, even those who had no background in coding. My ideas were well received, and with meaningful feedback, I led the implementation of the editor feature seen above.',
          de: 'I was given the task of brainstorming and creating a <em>text-based editor</em> that allows teachers to <em>create their own content</em> to be saved into the questions database.<br/><br/>' +
            'I developed a feature where the user can choose from a selection of templates, and then modify the content and layout to fit their own needs, using the free version of an opensource editor called <em>Tiny MCE Editor</em>.<br/><br/>' +
            'Additionally, I designed and developed the prototype for a completely new feature requested by our clients - <em>the math editor</em>, designed for use in <em>middle school</em> and <em>high school</em>. The editor integrates <em>TinyMCE</em> with custom features for the toolbar, <em>MathQuill</em> for input, and <em>MathJax</em> for output, which renders the mathematical expression as either an svg or png image for both the editor and preview screen, allowing users to freely modify the size, position, and layout. I saved the user\'s input as a <em>MathQuill-format string</em> in the <em>alt content of the image</em>, so that the content of the math expression can always be recalled, in case the user wants to edit the svg or png image.<br/><br/>' +
            'I presented my ideas in meetings in the form of <em>functioning prototypes</em>, which made it easy and intuitive to understand for everyone involved, even those who had no background in coding. My ideas were well received, and with meaningful feedback, I led the implementation of the editor feature seen above.',
        },
      },
    imageSlide: [{
      image: wr8, text: {
        ko: '중고등 수식 에디터',
        en: 'Feature: Middle- and Highschool Level Math Editor',
        de: 'Feature: Middle- and Highschool Level Math Editor',
      },
    }, {
      image: wr9, text: {
        ko: '타입1: 에디터 + 미리보기 분리',
        en: 'Type 1: Editor & Preview - Radio Buttons with Image',
        de: 'Type 1: Editor & Preview  - Radio Buttons with Image',
      },
    }, {
      image: wr10, text: {
        ko: '타입1: 에디터 + 미리보기 분리',
        en: 'Type 1: Editor & Preview - Audio File and Custom background',
        de: 'Type 1: Editor & Preview - Audio File and Custom background ',
      },
    }, {
      image: wr11, text: {
        ko: '타입2: 미리보기 내부에 inline 에디터',
        en: 'Type 2: WYSIWYG Editor - Poetry with Drag & Drop Input Type',
        de: 'Prototype 2: WYSIWYG Editor - Poetry with Drag & Drop Input Type',
      },
    }],
  },
  {
    type: TabEnum.TOYPROJECTS,
    date: '2024 . 12 ~ 2025.05',
    location: {
      text: {
        ko: '개인 프로젝트',
        en: 'Personal Project',
        de: 'Personal Project',
      },
    },
    title: {
      text: {
        ko: 'PokePlaybook',
        en: 'PokePlaybook',
        de: 'PokePlaybook',
      },
    },
    contribution: 100,
    stacks: ['react', 'typescript', 'reduxToolkit', 'rtkQuery', 'tailwindcss'],
    description:
      {
        text: {
          ko: '포켓몬카드를 모으는 취미로 시작하여 <em>포켓몬 정보를 볼 수 있는 사이트</em>를 만들어보았습니다.</br></br>' +
            '<em>TailwindCSS</em>를 사용하여 포켓몬카드 디자인을 제작하는게 제일 재밌었습니다. 시간날 때마다 틈틈히 개발 중인 개인 프로젝트입니다!',
          en: 'I made a Pokedex for fun, where I can look up Pokemon sprites and listen to their cries. I designed the entire site with Tailwind, and it was a lot of fun 😄',
          de: 'I made a Pokedex for fun, where I can look up Pokemon sprites and listen to their cries. I designed the entire site with Tailwind, and it was a lot of fun 😄',
        },
      },
    imageSlide: [{
      image: ppbDitto, text: {
        ko: '포켓몬 도감',
        en: 'Pokedex',
        de: 'Pokedex',
      },
    }, {
      image: ppbGrumpig, text: {
        ko: '포켓몬 카드 랜덤 뽑기',
        en: 'Designed solely with Tailwind',
        de: 'Designed solely with Tailwind',
      },
    }],
  },
]