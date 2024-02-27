import Contact from './components/specific/Contact.tsx'
import Section from './components/common/Section.tsx'
import { Container } from './components/styled/Container.ts'
import { Stack } from './components/styled/Stack.ts'
import AboutThisPage from './components/specific/AboutThisPage.tsx'

function App() {
    return (
        <Container>
            <Contact />
            <Stack p={12}>
                <AboutThisPage />
                <Stack alignItems="flex-start">
                    <Section title="소개 / About Me" />
                    <Section title="sample" />
                    <Section title="sample" />

                </Stack>
            </Stack>
        </Container>
    )
}

export default App
