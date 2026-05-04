import Section from '@/components/common/Section.tsx'
import AboutMe from '@/components/specific/about-me/AboutMe.tsx'
import AboutTimeline from '@/components/specific/about-education/AboutTimeline.tsx'
import AboutProjects from '@/components/specific/about-projects/AboutProjects.tsx'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'
import { interests, sectionTitle } from '@/content/miscellaneous.ts'
import { aboutSkills } from '@/content/aboutSkills.ts'
import List from '@/components/common/List.tsx'

export default function HomePage() {
  const { language } = useContext(Context)

  return (
    <div className="flex flex-col items-stretch p-1">
      <div className="flex flex-col gap-10">
        <Section title={sectionTitle.about[language]}>
          <AboutMe />
        </Section>
        <Section title={sectionTitle.timeline[language]}>
          <AboutTimeline />
        </Section>
        <Section title={sectionTitle.projects[language]}>
          <AboutProjects />
        </Section>
        <Section title={sectionTitle.react[language]}>
          <List textList={aboutSkills.react} />
        </Section>
        <Section title={sectionTitle.git[language]}>
          <List textList={aboutSkills.git} />
        </Section>
        <Section title={sectionTitle.misc[language]}>
          <List textList={aboutSkills.misc} />
        </Section>

        <Section title={sectionTitle.interests[language]}>
          {interests.text[language]}
          <List textList={aboutSkills.interests} />
        </Section>
        <Section title={sectionTitle.goal[language]}>
          <List textList={aboutSkills.goal} />
        </Section>
      </div>
    </div>
  )
}