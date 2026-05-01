import Section from '@/components/common/Section.tsx'
import AboutMe from '@/components/specific/about-me/AboutMe.tsx'
import AboutEducation from '@/components/specific/about-education/AboutEducation.tsx'
import AboutProjects from '@/components/specific/about-projects/AboutProjects.tsx'
import AboutReact from '@/components/specific/AboutReact.tsx'
import AboutGit from '@/components/specific/AboutGit.tsx'
import AboutMiscellaneous from '@/components/specific/AboutMiscellaneous.tsx'
import AboutCurrentHabits from '@/components/specific/AboutCurrentHabits.tsx'
import AboutTopicsToLearn from '@/components/specific/AboutTopicsToLearn.tsx'
import AboutFuturePlans from '@/components/specific/AboutFuturePlans.tsx'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'
import { sectionTitle } from '@/content/miscellaneous.ts'

export default function HomePage() {
  const { language } = useContext(Context)

  return (
    <div className="flex flex-col items-stretch p-1">
      <div className="flex flex-col gap-10">
        <Section title={sectionTitle.about[language]}>
          <AboutMe />
        </Section>
        <Section title={sectionTitle.timeline[language]}>
          <AboutEducation />
        </Section>
        <Section title={sectionTitle.projects[language]}>
          <AboutProjects />
        </Section>
        <Section title={sectionTitle.react[language]}>
          <AboutReact />
        </Section>
        <Section title={sectionTitle.git[language]}>
          <AboutGit />
        </Section>
        <Section title={sectionTitle.misc[language]}>
          <AboutMiscellaneous />
        </Section>

        <Section title={sectionTitle.current[language]}>
          <AboutCurrentHabits />
        </Section>
        <Section title={sectionTitle.future[language]}>
          <AboutTopicsToLearn />
        </Section>
        <Section title={sectionTitle.farFuture[language]}>
          <AboutFuturePlans />
        </Section>
      </div>
    </div>
  )
}