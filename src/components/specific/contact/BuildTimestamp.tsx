export default function BuildTimestamp() {
  return (
    <p className="text-zinc-500">Last updated: {BUILD_TIMESTAMP.slice(0, 10)}</p>
  )
}