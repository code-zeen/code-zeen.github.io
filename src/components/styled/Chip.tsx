import { ReactNode } from 'react'

function Chip({ text, startIcon }: { text: string, startIcon?: ReactNode }) {

  return (
    <div
      className="flex justify-center items-center gap-2 px-2 rounded  bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border hover:border-zinc-500">
      {startIcon}
      {text}
    </div>

  )
}

export default Chip