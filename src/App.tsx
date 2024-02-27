import Contact from './components/specific/Contact.tsx'
import { Container } from './components/styled/Container.ts'
import { Stack } from './components/styled/Stack.ts'
import AboutThisPage from './components/specific/AboutThisPage.tsx'
import Section from "./components/common/Section.tsx";

function App() {
    return (
        <Container>
            <Contact/>
            <Stack p={12}>
                <AboutThisPage/>
                <Stack spacing={24}>
                    <Section title="소개 / About Me">
                        <p>lorem ipsum dolor asdfa jsdkfl jasldkfj qwlkejf lksadj flasjf dlkjadlw kfjaslkd fjalskdjf
                            d
                        </p>
                    </Section>
                    <Section title="Projects">
                        asdf
                    </Section>
                </Stack>
            </Stack>
        </Container>
    )
}

export default App
