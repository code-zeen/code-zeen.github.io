import { Stack } from "../styled/Stack.ts";
import Icon from "../common/Icon.tsx";
import happyPeople0 from "../../assets/projects-1-happypeople-0.png"
import happyPeople1 from "../../assets/projects-1-happypeople-1.png"
import mosh0 from "../../assets/projects-2-mosh-0.png"
import mosh1 from "../../assets/projects-2-mosh-1.png"
import recipes0 from "../../assets/projects-3-recipes-0.png"
import recipes1 from "../../assets/projects-3-recipes-1.png"
import blackjack from "../../assets/projects-4-blackjack.png"
import password from "../../assets/projects-5-password.png"
import conversion from "../../assets/projects-6-conversion.png"
import travel from "../../assets/projects-7-travel.png"
import memes from "../../assets/projects-8-memes.png"
import tenzies from "../../assets/projects-9-tenzies.png"
import quizzical from "../../assets/projects-10-quizzical.png"
import movies from "../../assets/projects-11-movies.png"
import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";
import ImageSlide from "../styled/ImageSlide.tsx";
import Chip from '../styled/Chip.tsx'

enum Tab {
    Publishing = 'Publishing',
    JavaScript = 'JavaScript',
    React = 'React',
    Career = 'Career',
}

function Projects() {
    const [ currentTab, setCurrentTab ] = useState<keyof typeof Tab>(Tab.Career)
    const buttons = (Object.keys(Tab) as Array<keyof typeof Tab>).map(tab => tab)
    const content = [
        {
            type: Tab.Publishing,
            date: '2022 . 02',
            location: '그린컴퓨터아트학원',
            title: 'Float, Position 이용한 정적 레아이웃 -해피피플',
            contribution: 100,
            description: '첫 웹 리뉴얼 프로젝트 주제로 개선이 필요해 보이는 NGO 단체를 선정하였습니다. \n' +
                '빼곡하고 답답한 레이아웃을 여백과 아이콘을 사용하여 좀 더 여유롭고 효과적으로 정보가 눈에 들어올 수 있도록 디자인 하였습니다.',
            thumbnailOne: happyPeople0,
            thumbnailTwo: happyPeople1,
        },
        {
            type: Tab.Publishing,
            date: '2022 . 03',
            location: '그린컴퓨터아트학원',
            title: 'Flexbox를 이용한 반응형 레이아웃 -mosh!',
            contribution: 100,
            description: '적응형 웹사이트인 모쉬를 flexbox와 grid를 이용해 반응형으로 리뉴얼 하였습니다. \n' +
                '타사 보온/보냉 텀블러와 차별화된 성능과 디자인 요소를 메인페이지에 슬라이드로 추가하여 이 브랜드만의 장점을 살렸습니다.',
            thumbnailOne: mosh0,
            thumbnailTwo: mosh1,
        },
        {
            type: Tab.Publishing,
            date: '2022 . 04',
            location: '그린컴퓨터아트학원',
            title: 'JavaScript를 활용한 masonry 레이아웃 -만개의레시피',
            contribution: 100,
            description: '유저 컨텐츠에 의존하는 Pinterest의 masonry 레이아웃을 연구하여 적용해보았습니다. \n' +
                '적응형인 기존 웹사이트 또한 반응형으로 리뉴얼 하였습니다.',
            thumbnailOne: recipes0,
            thumbnailTwo: recipes1,
        },
        {
            type: Tab.JavaScript,
            date: '2022 . 08',
            location: 'Scrimba - Learn JavaScript',
            title: '카드 게임 : 블랙잭',
            contribution: 75,
            description: '블랙잭 카드게임에 필요한 다양한 로직들을 구현하였습니다.',
            thumbnailOne: blackjack,
            urlKr: 'https://zeen-blackjack-kr.netlify.app/',
            urlEn: 'https://zeen-blackjack-en.netlify.app/',
        },
        {
            type: Tab.JavaScript,
            date: '2022 . 08',
            location: 'Scrimba - Learn JavaScript',
            title: '랜덤 암호 만들기',
            contribution: 75,
            description: '영문 대문자, 소문자, 숫자, 그리고 특수기호가 포함된 15자 비밀번호를 생성할 수 있습니다. \n' +
                '생성된 비밀번호를 클릭하면 자동으로 클립보드에 저장됩니다.',
            thumbnailOne: password,
            urlKr: 'https://zeen-password-kr.netlify.app',
            urlEn: 'https://zeen-password-en.netlify.app',
        },
        {
            type: Tab.JavaScript,
            date: '2022 . 08',
            location: 'Scrimba - Learn JavaScript',
            title: '단위 변환기',
            contribution: 75,
            description: '미터법(Metric System)과 야드파운드법(Imperial System)의 변환을 빠르게 할 수 있습니다. \n' +
                '소수점 3자리까지 반올림하여 표시됩니다',
            thumbnailOne: conversion,
            urlKr: 'https://zeen-conversion-kr.netlify.app',
            urlEn: 'https://zeen-conversion-en.netlify.app',
        },
        {
            type: Tab.React,
            date: '2022 . 11',
            location: 'Scrimba - The Frontend Developer Career Path',
            title: '여행 일지',
            contribution: 75,
            description: '커스텀 컴포넌트, props, map을 사용하여 하나의 json 파일의 정보를 화면에 표현하는 정적 레이아웃을 제작했습니다.',
            thumbnailOne: travel,
            urlKr: 'https://zeen-travel-kr.netlify.app',
        },
        {
            type: Tab.React,
            date: '2022 . 12',
            location: 'Scrimba - The Frontend Developer Career Path',
            title: '밈(meme) 제작기',
            contribution: 75,
            description: 'Form을 통해 받는 유저의 input을 리액트가 제어할 수 있는 제어 컴포넌트로 만들었습니다. \n' +
                '사용자의 텍스트를 이미지 위에 렌더링을 하고, 밈 이미지는 버튼 클릭시 무작위 이미지를 useEffect를 이용하여 API 호출을합니다.',
            thumbnailOne: memes,
            urlEn: 'https://zeen-meme-en.netlify.app',
        },
        {
            type: Tab.React,
            date: '2023 . 01',
            location: 'Scrimba - The Frontend Developer Career Path',
            title: '주사위 게임',
            contribution: 75,
            description: '각각의 주사위를 오브젝트화 하여 데이터를 담았습니다. \n' +
                'Win-condition 충족시 (모든 주사위가 선택되었고, 모든 수가 같은 수일때) 게임을 이기고\n 자신의 최고기록이 남아 재도전할 수 있는 단순한 게임을 제작하였습니다.',
            thumbnailOne: tenzies,
            urlKr: 'https://zeen-tenzies-kr.netlify.app',
            urlEn: 'https://zeen-tenzies-en.netlify.app',
        },
        {
            type: Tab.React,
            date: '2023 . 01',
            location: 'Scrimba - The Frontend Developer Career Path',
            title: '상식 퀴즈 (English)',
            contribution: 75,
            description: '잡상식 질문 API를 객관식 퀴즈 UI로 표현하였습니다. \n' +
                'Check Answers 버튼으로 답을 확인 및 채점 할 수 있고, New Quiz 버튼을 눌러 새로운 질문들을 받아 올 수 있습니다.',
            thumbnailOne: quizzical,
            urlEn: 'https://zeen-quizzical-en.netlify.app',
        },
        {
            type: Tab.React,
            date: '2023 . 02',
            location: 'Scrimba - The Frontend Developer Career Path',
            title: '영화 검색',
            contribution: 75,
            description: 'React Router를 활용해 검색 페이지, 상세 페이지 (제작중), 그리고 마이 페이지로 조합된 싱글 페이지 어플(SPA)입니다. \n' +
                '오픈 무비(OMDb) API로 영화를 검색하여 북마크 버튼을 통해 개인페이지에 저장할 수 있습니다. \n' +
                '개인페이지 데이터는 sessionStorage로 브라우저창을 닫으면 데이터가 삭제됩니다. \n' +
                'Context API를 통해 글로벌 상태/데이터 관리를 하였고 "검색 페이지"가 언마운트 되어도 재빨리 마지막 검색기록으로 돌아갈 수 있습니다.',
            thumbnailOne: movies,
            urlEn: 'https://zeen-movies-en.netlify.app',
        },
        {
            type: Tab.Career,
            date: '2023 . 04 ~ 2023 . 12',
            location: '(주)케이비아이',
            title: 'BingoCVM 취약점 진단 솔루션 2.x',
            contribution: 40,
            stacks: ['Create-React-App', 'JavaScript', 'Redux Toolkit', 'ApexCharts'],
            description: '(주)케이비아이의 자사 프로그램인 BingoCVM은 기관의 디지털 자산의 취약점을 자동진단하여 한국인터넷진흥원 (KISA)의 최신 기준에 준수하여 디지털 침해사고 피해를 방지하는 CAASM 프로그램입니다.\n\n' +
                '프로그램의 유지보수 및 기능추가를 풀스택 개발자 2명과 함께 진행했습니다.\n\n' +
                '기본적은 CRUD 기능으로 로그인, 계정생성, 자산등록, 자산진단, 진단내역 조회, 취약항목 조회, 취약항목에 대한 조치 등록, 조치내역 조회, 자료실 파일 업로드/다운로드, 관리자 감사(로그) 조회, 물리적/관리적 취약점 수동 등록, 스크립트 관리, 시스템 설정페이지가 있습니다.\n\n' +
                'Create-React-App, JavaScript, Redux-Toolkit을 기반으로 빌드와 전역상태관리를 하였고 fetch를 사용한 RESTful API를 통해 백엔드와 통신을 했습니다.\n' +
                '고객에게 전달받은 의견을 개발팀 회의를 통해 의논하고 프로그램에 반영하여 고도화하였습니다',
        },
        {
            type: Tab.Career,
            date: '2023 . 07 ~ 2024 . 02',
            location: '(주)케이비아이',
            title: 'BingoCVM 취약점 진단 솔루션 3.x',
            contribution: 99,
            stacks: ['Vite', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'ApexCharts', 'Axios'],
            description: '기존 버전의 기술적 한계를 극복하기 위해 저희 개발팀은 새로운 버전을 만들기로 결정했습니다. \n' +
                '이 프로젝트의 프론트엔드는 제가 담당하여 총괄하게 되었고 나머지 2명의 개발자는 백엔드에 몰두하여 좋은 시너지를 발휘할 수 있었습니다.추후에 프론트엔드 개발자가 추가되었습니다. \n\n' +
                '더욱 효율적인 빌드툴 Vite를 선택했고, TypeScript를 엄격하게 사용했습니다.\n' +
                '전역으로 관리되어야 하는 요소들 (디자인 테마, 에러 핸들링, 토큰/권한 확인, 로딩 UI 등)을 시스테믹하게 설계해 수동으로 해야할 일을 줄이고, 에러 발생도 급격히 줄였습니다.' +
                'Redux-Toolkit을 더 파고들어 기존 버전의 코드보다 훨씬 단순하지만 확실한 방법으로 상태관리를 했습니다. RTK Query또한 연구하여 캐시 수명 관리, 동일한 데이터에 대한 중복 요청 방지, 로딩 상태 추적, 등의 API을 활용해 코드의 복잡성을 줄일 뿐만 아니라 더욱 부드럽고 직관적인 유저 경험을 제공했습니다.\n\n' +
                'Chart-js, ApexCharts 등 여러 데이터 시각화 라이브러리를 테스트 해보며 선택하여 사용자 대시보드를 기획하고 제작했습니다.'
        },
    ]

    const handleClick = (params: keyof typeof Tab) => {
        setCurrentTab(params)
    }

    return (
        <Stack>
            <Stack row alignItems="center">
                {buttons.map(b => (
                    <button onClick={() => handleClick(b)} className={b === currentTab ? b : undefined}>{b}</button>
                ))}
            </Stack>

            {content.map(c => c.type === currentTab && (
                <>
                    <Stack px={20} py={8} spacing={8}>
                        <Stack row spacing={12} alignItems="center">
                            <div className={c.type + ' circle-icon'}>
                                <Icon name={c.type} />
                            </div>
                            <span>{c.type}</span>
                            <span className="tertiary small">{c.date}</span>
                            <span className="tertiary small">{c.location}</span>
                        </Stack>
                        <Stack row alignItems="center" spacing={12}>
                            <p className="title">{c.title}</p>
                            <span className="contribution">기여도 {c.contribution}%</span>
                        </Stack>
                        <Stack row>
                            {c.stacks && c.stacks.map(stack => (
                                <Chip key={stack} text={stack} startIcon={<Icon name={stack} />}/>
                            ))}
                        </Stack>
                        <p className="secondary">{c.description}</p>
                        <Stack row spacing={12} alignItems="center">
                            <img src={c.thumbnailOne} className="thumbnail" />
                            {c.thumbnailTwo && (
                                <>
                                    <MdArrowRightAlt size="2em" />
                                    <img src={c.thumbnailTwo} className="thumbnail" />
                                </>
                            )}
                        </Stack>
                        <Stack row spacing={12}>
                            {c.urlEn && <a href={c.urlEn} target="_blank">영어 버전</a>}
                            {c.urlKr && <a href={c.urlKr} target="_blank">한국어 버전</a>}
                        </Stack>
                        {c.title === 'BingoCVM 취약점 진단 솔루션 3.x' && <ImageSlide />}
                    </Stack>
                    <hr style={{ width: "100%" }} />
                </>
            ))}

        </Stack>
    )
}

export default Projects