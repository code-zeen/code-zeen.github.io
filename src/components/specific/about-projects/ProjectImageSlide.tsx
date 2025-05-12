import { Project } from '@/content/projects.type.ts'
import { useState } from 'react'

export default function ProjectImageSlide({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!project.imageSlide) return null

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % (project.imageSlide?.length || 0))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + (project.imageSlide?.length || 0)) % (project.imageSlide?.length || 0))
  }

  return (
    <div className="flex flex-col w-full mx-auto p-1 rounded-lg border border-zinc-800">
      <div className="overflow-hidden relative max-h-96"> {/* limit by height */}
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {project.imageSlide.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center max-h-96">
              <span className="text-zinc-300 mb-1">{slide.caption}</span>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="h-full max-h-80 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center p-1">
        <button onClick={prevSlide} className="bg-zinc-600 rounded-full shadow-md px-2 py-1 text-sm text-white">이전</button>
        <span className="text-zinc-300">{currentIndex + 1} / {project.imageSlide.length}</span>
        <button onClick={nextSlide} className="bg-zinc-600 rounded-full shadow-md px-2 py-1 text-sm text-white">다음</button>
      </div>
    </div>
  )
}