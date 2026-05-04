import { TimelineEvent } from '@/content/timelineEvents.ts'
import { useContext } from 'react'
import { Context } from '@/Context.tsx'

export default function Timeline({ event }: { event: TimelineEvent }) {
  const { language } = useContext(Context)
  const textColor = event.isNewYear ? 'text-zinc-300' : 'text-zinc-700'

  return (
    <div className="flex gap-4">
      <div className="flex justify-end flex-shrink-0 py-3 gap-2 text-sm text-zinc-300 font-mono w-24">
        <span className={textColor}>{event.date.start}</span>
        <span>{event.date.start && '-'}</span>
        <span className={textColor}>{event.date.end}</span>
      </div>
      <div
        className="flex items-start gap-6 py-3 border-l-2 border-zinc-700 pl-6 relative group hover:border-zinc-500 transition-colors">
        <div
          className="absolute -left-[7px] top-4 w-3 h-3 bg-zinc-700 rounded-full group-hover:bg-zinc-500 transition-colors" />

        <div className="text-zinc-300">
          {event.text[language]}
        </div>
      </div>
    </div>
  )
}