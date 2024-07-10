import Contact from './components/specific/Contact.tsx'
import Section from './components/common/Section.tsx'
import { Container } from './components/styled/Container.ts'
import { Stack } from './components/styled/Stack.ts'
import AboutThisPage from './components/specific/AboutThisPage.tsx'
import ImageSlide from "./components/styled/ImageSlide.tsx";

function App() {
    return (
        <Container>
            <Contact />
            <Stack p={20} alignItems="stretch">
                <AboutThisPage />
                <Stack alignItems="flex-start" spacing={48}>
                    <Section title="소개">
                        <p>
                            저는 미국 Illinois 주에서 물리학을 공부하는 도중 진로 고민을 위해 휴학을 계획했지만 <br />코로나 사태가 발생한 후 대학으로 돌아가지 않았습니다.
                        </p>
                        <p>
                            그 이후로 무엇을 해야할지 막막한 시간을 보내다 우연히 웹퍼블리싱 과정이 눈에 들어왔습니다.
                        </p>
                        <p>
                            평소에 피아노, 디지털 아트, 컴퓨터와 과학에 흥미를 가졌던 저는 <br />논리, 계산, 자동화, 그리고 심미적 요소까지 어우러진 퍼블리싱 (+코딩)을 배우며 새로운 열정을 찾을 수 있었습니다.
                        </p>
                        <p>
                            저의 목표는 언어에 구애받지 않는 최고의 프론트엔드 개발자가 되는것입니다.
                        </p>
                        <hr />
                        <p className="timeline">2015년 08 월 - 대학 입학</p>
                        <p className="timeline">2019년 06 월 - 휴학 및 귀국</p>
                        <p className="timeline">2021년 12 월 - 웹퍼블리셔 수강</p>
                        <p className="timeline">2022년 05 월 - 웹퍼블리셔 수료</p>
                        <p className="timeline"><span className="hidden">2022년</span> 06 월 - 웹디자인기능사 취득</p>
                        <p className="timeline"><span className="hidden">2022년</span> 07 월 - JavaScript 독학</p>
                        <p className="timeline"><span className="hidden">2022년</span> 10 월 - TOEIC 990점 취득</p>
                        <p className="timeline"><span className="hidden">2022년</span> 11 월 - React 독학</p>
                        <p className="timeline">2023년 03 월 - 프론트엔드 입사</p>
                        <p className="timeline">2024년 03 월 - 프론트엔드 퇴사</p>

                    </Section>
                    <Section title="프로젝트">
                        <Stack row alignItems="center" spacing={8}>
                            <h3>1. BingoCVM 2.x</h3>
                            <span className="opaque">2023.04 ~ 2023.12</span>
                        </Stack>
                        <p>
                            <a href="https://kbisys.com/" target="_blank">(주)케이비아이</a> (이하 KBI)의 자사 프로그램인 <a
                            href="http://bingocvm.com"
                            target="_blank">취약점 진단 솔루션 BingoCVM</a>의 유지보수와 기능추가를 풀스택 개발자 2명과 함께 진행했습니다.
                        </p>
                        <p>
                            Create-React-App, <a href="https://redux-toolkit.js.org/"
                                                 target="_blank">Redux-Toolkit</a>을 기반으로 빌드와 전역상태 관리를 하였고 fetch를 사용한 RESTful API를 통해 백엔드와 통신을 했습니다. 고객에게 전달받은 의견을 개발팀 회의를 통해 의논하고 프로그램에 반영하여 고도화하였고, 틈틈히 리눅스서버에 접속하는 방법을 익혀 빌드 파일을 수동으로 업데이트하는 작업도 했습니다.
                        </p>

                        <br />

                        <Stack row alignItems="center" spacing={8}>
                            <h3>2. BingoCVM 3.x</h3>
                            <span className="opaque">2023.07 ~ 2024.02</span>
                        </Stack>
                        <p>
                            기존 버전의 기술적 한계를 극복하기 위해 저희 개발팀은 새로운 버전을 만들기로 결정했습니다. 2023년 7월 쯤 부터 시작한 이 프로젝트의 프론트엔드는 제가 담당하여 총괄하게 되었고 나머지 2명의 개발자는 백엔드에 몰두할 수 있게 되어 좋은 시너지를 발휘할 수 있었습니다.
                        </p>
                        <p>
                            기초부터 튼튼하게 쌓아올리기 위해 더 효율적인 빌드 툴 <a href="https://vitejs.dev/"
                                                              target="_blank">Vite</a>를 선택했고 타입에러를 방지하기 위해 <a
                            href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>를 엄격하게 사용했습니다.
                        </p>
                        <p>
                            전역으로 관리되어야 하는 요소들 (디자인 테마, 에러 핸들링, 토큰/권한 확인, 로딩 UI 등)을 시스테믹하게 설계해서 사람이 수동으로 해야할 일도 줄이고, 에러가 발생할 확률도 급격히 줄였습니다.
                        </p>
                        <p>
                            <a href="https://redux-toolkit.js.org/"
                               target="_blank">Redux-Toolkit</a>을 더 파고들어 기존 버전의 코드보다 훨씬 단순하지만 확실한 방법으로 상태관리를 했습니다. <a
                            href="https://redux-toolkit.js.org/rtk-query/overview"
                            target="_blank">RTK Query</a>또한 연구하여 캐시 수명 관리, 동일한 데이터에 대한 중복 요청 방지, 로딩 상태 추적, 등의 기능들을 활용해 코드의 복잡성을 줄일 뿐만 아니라 더욱 부드럽고 직관적인 유저 경험을 제공했습니다.
                        </p>
                        <p>
                            <a href="https://www.chartjs.org/" target="_blank">Chart-js</a>, <a
                            href="https://apexcharts.com/"
                            target="_blank">ApexCharts</a> 등 여러 데이터 시각화 라이브러리를 테스트 해보며 선택하여 사용자 대시보드를 기획하고 제작했습니다.
                        </p>
                        <br />
                        <h3>화면 샘플</h3>
                        <ImageSlide>

                        </ImageSlide>
                    </Section>

                    <Section title="현재 적용 중인 것">
                        <ul>
                            <li>디자인 패턴</li>
                            <li>컴포넌트 모듈화</li>
                            <li>(리)렌더링 최적화</li>
                            <li>클린 코드 유지</li>
                            <li>유지보수성 고려한 설계</li>
                            <li>적극적인 커뮤니케이션과 아이디어 공유</li>
                        </ul>
                    </Section>
                    <Section title="앞으로 배우고 싶은 것">
                        <ul>
                            <li>유닛 테스트</li>
                            <li>Docker <s>내 PC에선 잘 되던데</s></li>
                            <li>반응형 (또는 모바일 앱, React Native, Flutter)</li>
                        </ul>
                    </Section>
                    <Section title="미래에 하고 싶은 것">
                        <ul>
                            <li>컴포넌트 라이브러리 직접 설계 및 제작</li>
                            <li>타입스크립 마스터</li>
                            <li>풀스택 개발</li>
                        </ul>
                    </Section>
                </Stack>
            </Stack>
        </Container>
    )
}

export default App
