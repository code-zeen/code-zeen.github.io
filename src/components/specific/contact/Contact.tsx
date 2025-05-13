import Profile from '@/components/specific/contact/Profile.tsx'
import PersonalInfo from '@/components/specific/contact/PersonalInfo.tsx'
import SkillSets from '@/components/specific/contact/SkillSets.tsx'
import BuildTimestamp from '@/components/specific/contact/BuildTimestamp.tsx'

function Contact() {

  return (
    <div className="flex flex-col gap-4 p-4 border border-zinc-800 bg-zinc-900 border-b border-b-zinc-800">
      <Profile />
      <PersonalInfo />
      <SkillSets />
      <BuildTimestamp />
    </div>
  )
}

export default Contact