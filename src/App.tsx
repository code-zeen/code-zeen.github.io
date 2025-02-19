import Contact from './components/specific/Contact.tsx'
import Section from './components/common/Section.tsx'
import { Container } from './components/styled/Container.ts'
import { Stack } from './components/styled/Stack.ts'
import AboutMe from "./components/specific/AboutMe.tsx";
import Projects from "./components/specific/Projects.tsx";

function App() {
    return (
        <Container>
            <Contact />
            <Stack p={20} alignItems="stretch">
                <Stack alignItems="flex-start" spacing={48}>
                    <Section title="소개">
                        <AboutMe />
                    </Section>
                    <Section title="프로젝트">
                        <Projects />
                    </Section>
                    <Section title="React">
                        <ul>
                            <li>
                                React의 꽃인 <em>재사용성</em>을 중요시 여깁니다. UI와 로직을 분리 시키기 위해 <em>컴포넌트 계층</em>를 철저히 고려합니다.
                            </li>
                            <li>
                                <em>로컬 instance</em> vs <em>singleton</em>상태, prop vs 전역상태 접근을 통한 <em>데이터의 흐름</em>을 고민합니다. 비즈니스 로직과 특히 재사용되는 로직은 <em>커스텀 Hook</em> 또는 <em>helper 함수</em>를 통해 간결성과 코드 품질을 유지합니다. 복잡한 어플리케이션일수록 <em>모듈성</em>을 지향하지만 아직까지 모듈러 아키텍쳐까지는 구축해보지 않았습니다.
                            </li>
                            <li>
                                <em>React Developer Tools</em>를 사용해 렌더링/리렌더링 프로세스, 상태변화 감지, hook 사용여부, 등을 분석합니다. <em>최적화</em> 작업과 <em>디버깅</em> 할 때 사용합니다.
                            </li>
                        </ul>
                    </Section>
                    <Section title="Git">
                        <ul>
                            <li>
                                <em>Git</em>으로 형상관리를 하며 변경 사항을 내용별로 토막내어 정확하게 요약하여 관련 이슈 넘버를 태그합니다.
                            </li>
                            <li>
                                <em>GitHub Desktop</em>의 힘을 빌려 <em>amend</em>, <em>undo</em>, <em>squash</em>, <em>stash</em>, 등으로 팀원들의 <em>DevEx</em>를 고려한 깔끔한 커밋 히스토리를 유지합니다.
                            </li>
                            <li>
                                프론트엔드 리드 역할로 GitHub 이슈사항 <em>관리와 분배</em>, <em>브랜치 관리</em>, <em>풀 리퀘스트 검토</em>, <em>병합</em>, 그리고 <em>코드리뷰 진행</em>을 한 경험이 있습니다.
                            </li>
                            <li>
                                프론트엔드 팀원 역할로 이슈사항 <em>셀프 배정</em>, <em>브랜치 관리</em>, <em>풀 리퀘스트 생성</em>, 그리고 <em>코드리뷰 참여</em>을 한 경험이 있습니다.
                            </li>
                            <li>
                                <em>GitHub Pages</em>와 <em>Netlify</em>를 사용한 간단한 배포 자동화 경험이 있습니다.
                            </li>
                        </ul>
                    </Section>

                    <Section title="기타">
                        <ul>
                            <li>
                                <em>FTP</em> 또는 <em>CLI</em>를 사용해 리눅스 서버에 접속하여 빌드를 업데이트 한 경험이 있습니다.
                            </li>
                            <li>
                                팀원과 소통할 때 이슈의 정확한 <em>장소/경로</em>, 이슈를 <em>재현</em>할 수 있는 단계, 이슈의 <em>원인</em>에 대한 추측, 등을 상황에 맞게 전달하여 효율적인 정보 전달을 위해 적극적으로 노력합니다.
                            </li>
                        </ul>
                    </Section>

                    <Section title="현재 적용 중인 것">
                        <ul>
                            <li>클린 코드 유지</li>
                            <li>유지보수성 고려한 설계</li>
                            <li>적극적인 커뮤니케이션과 아이디어 공유</li>
                        </ul>
                    </Section>
                    <Section title="더 배우고 싶은 것">
                        <ul>
                            <li>디자인 패턴</li>
                            <li>유닛 테스트</li>
                            <li>Docker <s>내 PC에선 잘 되던데</s></li>
                            <li>반응형 UI, 모바일 앱, React Native, Flutter</li>
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
