import Icon from '@/components/common/Icon.tsx'

export default function Profile() {
  return (
    <div className="flex items-center gap-4">
      <img className="img round" src="https://avatars.githubusercontent.com/u/77660676?v=4"
           alt="profile-picture" />
      <div className="flex flex-col">
        <h2 className="text-xl">김애진</h2>
        <code>frontend-developer</code>
        <a className="flex items-center gap-1" href="https://www.github.com/code-zeen" target="_blank">
          <Icon name="github" />
          <span>Git Hub</span>
        </a>
      </div>
    </div>
  )
}