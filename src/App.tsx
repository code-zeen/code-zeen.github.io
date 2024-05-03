import Contact from './components/specific/Contact.tsx'
import Section from './components/common/Section.tsx'
import { Container } from './components/styled/Container.ts'
import { Stack } from './components/styled/Stack.ts'
import AboutThisPage from './components/specific/AboutThisPage.tsx'

function App() {
    return (
        <Container>
            <Contact />
            <Stack p={12} alignItems="stretch">
                <AboutThisPage />
                <Stack alignItems="flex-start" spacing={48}>
                    <Section title="소개">
                        <p>
                            저는 미국 Illinois 주에서 물리학을 공부하는 도중 진로 고민을 하며 휴학을 계획했지만 코로나 사태가 발생한 후 대학으로 돌아가지 않았습니다.
                            그 이후로 무엇을 해야할지 막막한 나날들을 보내다가 우연히 웹퍼블리싱 과정이 눈에 들어왔습니다.
                        </p>

                        <p>
                            평소에 미술과 음악, 컴퓨터와 과학에 흥미를 가졌던 저는
                            논리, 계산, 자동화, 그리고 심미적 요소까지 어우러진 퍼블리싱 (+코딩)을 배우며 새로운 열정을 찾을 수 있었습니다.
                        </p>

                        <p>
                            저의 목표는 최고의 프론트엔드 개발자가 되는것입니다.
                        </p>
                        <hr />
                        <p className="timeline">2019년 06 월 - 휴학 및 귀국</p>
                        <p className="timeline">2022년 01 월 - 웹퍼블리셔 양성과정 수강</p>
                        <p className="timeline"><span className="hidden">2022년</span> 05 월 - 웹퍼블리셔 양성과정 수료</p>
                        <p className="timeline"><span className="hidden">2022년</span> 06 월 - 웹디자인기능사 자격증 취득</p>
                        <p className="timeline"><span className="hidden">2022년</span> 07 월 - JavaScript 독학</p>
                        <p className="timeline"><span className="hidden">2022년</span> 12 월 - React 독학</p>
                        <p className="timeline">2023년 03 월 - 프론트엔드 개발자 입사</p>
                        <p className="timeline">2024년 03 월 - 프론트엔드 개발자 퇴사</p>

                    </Section>
                    <Section title="프로젝트">
                        BingoCVM : 취약점 진단 솔루션
                    </Section>
                    <Section title="현재 적용 중인 것">
                        <ul>
                            <li>디자인 패턴</li>
                            <li>컴포넌트 모듈화</li>
                            <li>(리)렌더링 최적화</li>
                            <li>클린 코드 유지</li>
                            <li>유지보수성 고려한 설계</li>
                        </ul>
                    </Section>
                    <Section title="앞으로 배우고 싶은 것">
                        <ul>
                            <li>유닛 테스트</li>
                            <li>Docker <s>내 PC에선 잘 되던데</s></li>
                            <li>반응형 (또는 모바일 앱)</li>
                        </ul>
                    </Section>
                    <Section title="먼 미래에 하고 싶은 것">
                        <ul>
                            <li>컴포넌트 라이브러리 직접 설계 및 제작</li>
                            <li>타입스크립 마스터 되기</li>
                        </ul>
                    </Section>
                </Stack>
            </Stack>
        </Container>
    )
}

export default App
