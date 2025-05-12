import { ReactNode } from 'react'

function Section({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-4 p-1 my-4">
        <h3 className="text-xl text-zinc-400 whitespace-nowrap">{title}</h3>
        <hr className="flex-grow border-t border-zinc-700" />
      </div>
      {children}
    </div>
  )
}

export default Section