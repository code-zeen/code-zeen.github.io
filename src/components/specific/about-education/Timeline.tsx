import { TimelineEvent } from '@/content/timelineEvents.ts'

export default function Timeline({ event }: { event: TimelineEvent }) {
  const textColor = event.isNewYear ? 'text-zinc-300' : 'text-zinc-700'

  return (
    <div className="flex items-start gap-6 py-3 border-l-2 border-zinc-700 pl-6 relative group hover:border-zinc-500 transition-colors">
      <div className="absolute -left-[7px] top-4 w-3 h-3 bg-zinc-700 rounded-full group-hover:bg-zinc-500 transition-colors" />

      <div className="flex gap-2 text-sm text-zinc-300 font-mono w-24 flex-shrink-0">
        <span className={textColor}>{event.date.year}년</span>
        <span>{event.date.month}월</span>
      </div>

      <div className="text-zinc-300">
        {event.content}
      </div>
    </div>
  )
}