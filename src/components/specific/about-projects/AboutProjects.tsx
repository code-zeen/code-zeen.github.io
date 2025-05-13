import { MdArrowRightAlt } from 'react-icons/md'
import { useRef, useState } from 'react'
import { projects } from '@/content/projects.ts'
import { TabEnum } from '@/types/enums.ts'
import ProjectMetaData from '@/components/specific/about-projects/ProjectMetaData.tsx'
import ProjectTitle from '@/components/specific/about-projects/ProjectTitle.tsx'
import ProjectSkillSets from '@/components/specific/about-projects/ProjectSkillSets.tsx'
import ProjectDescription from '@/components/specific/about-projects/ProjectDescription.tsx'
import ProjectImageSlide from '@/components/specific/about-projects/ProjectImageSlide.tsx'
import ProjectTabs from '@/components/specific/about-projects/ProjectTabs.tsx'

function AboutProjects() {
  const [currentTab, setCurrentTab] = useState<TabEnum>(TabEnum.CAREER)
  const [orderBy, setOrderBy] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const orderedProjects = orderBy ? [...projects].reverse() : projects

  const handleClick = (params: TabEnum) => {
    setCurrentTab(params)
    if (scrollRef.current) {
      const offsetTop = scrollRef.current.offsetTop
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      })
    }
  }

  const handleOrderBy = () => {
    setOrderBy(prev => !prev)
  }

  return (
    <div ref={scrollRef} className="flex flex-col gap-2">
      <div className="sticky top-0 z-10 p-1 rounded-xl border border-zinc-800 bg-zinc-900">
        <ProjectTabs currentTab={currentTab} handleClick={handleClick} orderBy={orderBy} handleOrderBy={handleOrderBy} />
      </div>

      {orderedProjects.map(project => project.type === currentTab && (
        <div className="flex flex-col gap-2 px-2 py-3 rounded-lg border border-zinc-800 bg-zinc-900">
          <ProjectMetaData project={project} />
          <ProjectTitle project={project} />
          {project.imageSlide && <ProjectImageSlide project={project} />}
          <ProjectDescription project={project} />
          <ProjectSkillSets project={project} />

          {project.thumbnailOne && (
            <div className="flex flex-col items-center gap-3">
              <img src={project.thumbnailOne} className="thumbnail" />
              {project.thumbnailTwo && (
                <>
                  <MdArrowRightAlt size="2em" />
                  <img src={project.thumbnailTwo} className="thumbnail" />
                </>
              )}
            </div>
          )}
          {(project.urlEn || project.urlKr) && (
            <div className="flex gap-3">
              {project.urlEn && <a href={project.urlEn} target="_blank">영어 버전</a>}
              {project.urlKr && <a href={project.urlKr} target="_blank">한국어 버전</a>}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AboutProjects