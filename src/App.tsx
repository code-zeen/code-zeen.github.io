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
                <Stack alignItems="flex-start" spacing={32}>
                    <Section title="소개">
                        lorem ipsum
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
