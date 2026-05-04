import { timelineEvents } from '@/content/timelineEvents.ts'
import Timeline from '@/components/specific/about-education/Timeline.tsx'

export default function AboutTimeline() {
  return (
    <div className="ml-4 p-4">
      {timelineEvents.map((event, i) => (
        <Timeline key={i} event={event} />
      ))}
    </div>
  )
}