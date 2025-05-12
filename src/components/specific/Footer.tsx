export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-zinc-900 border-zinc-800 text-zinc-400 text-sm px-4 py-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} code-zeen. All rights reserved.</p>
      </div>
    </footer>
  )
}
