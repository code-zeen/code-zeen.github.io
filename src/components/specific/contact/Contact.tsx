import PersonalInfo from '@/components/specific/contact/PersonalInfo.tsx'
import SkillSets from '@/components/specific/contact/SkillSets.tsx'
import BuildTimestamp from '@/components/specific/contact/BuildTimestamp.tsx'
import Profile from '@/components/specific/contact/Profile.tsx'

function Contact() {

  return (
    <div className="flex flex-col">
      <Profile />
      <div className="flex flex-col gap-4 p-4 bg-zinc-900 border-b border-b-zinc-800">
        <PersonalInfo />
        <SkillSets />
        <BuildTimestamp />
      </div>
    </div>
  )
}

export default Contact