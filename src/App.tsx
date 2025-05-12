import Contact from './components/specific/contact/Contact.tsx'
import Section from './components/common/Section.tsx'
import { Container } from './components/styled/Container.ts'
import { Stack } from './components/styled/Stack.ts'
import AboutMe from './components/specific/AboutMe.tsx'
import Projects from './components/specific/Projects.tsx'
import AboutReact from './components/specific/AboutReact.tsx'
import AboutGit from './components/specific/AboutGit.tsx'
import AboutMiscellaneous from './components/specific/AboutMiscellaneous.tsx'
import AboutCurrentHabits from './components/specific/AboutCurrentHabits.tsx'
import AboutTopicsToLearn from './components/specific/AboutTopicsToLearn.tsx'
import AboutFuturePlans from './components/specific/AboutFuturePlans.tsx'

function App() {
  return (
    <Container>
      <Contact />
      <div className="flex flex-col items-stretch p-2">
        <Stack alignItems="flex-start" spacing={48}>
          <Section title="소개">
            <AboutMe />
          </Section>
          <Section title="프로젝트">
            <Projects />
          </Section>
          <Section title="React">
            <AboutReact />
          </Section>
          <Section title="Git">
            <AboutGit />
          </Section>
          <Section title="기타">
            <AboutMiscellaneous />
          </Section>

          <Section title="현재 적용 중인 것">
            <AboutCurrentHabits />
          </Section>
          <Section title="더 배우고 싶은 것">
            <AboutTopicsToLearn />
          </Section>
          <Section title="미래에 하고 싶은 것">
            <AboutFuturePlans />
          </Section>
        </Stack>
      </div>
    </Container>
  )
}

export default App
