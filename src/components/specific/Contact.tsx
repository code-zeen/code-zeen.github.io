import Chip from '../styled/Chip.tsx'
import Icon from '../common/Icon.tsx'
import { Stack } from '../styled/Stack.ts'

function Contact() {
    const personalInfo = [
        { icon: 'person', text: '1996, 여' },
        { icon: 'email', text: 'aezeen_kim@naver.com' },
        { icon: 'location', text: '대전광역시, 유성구' },
        { icon: 'personality', text: 'INTP' },
    ]
    const skillSet = [
        { icon: 'React' },
        { icon: 'Redux Toolkit' },
        { icon: 'Typescript' },
        { icon: 'Mui' },
        { icon: 'Vite' },
        { icon: 'Figma' },
        { icon: 'Webstorm' },
        { icon: 'Git' },
    ]

    return (
        <Stack spacing={16} className="contact bgcolor dark" style={{ padding: '20px 32px' }}>
            <Stack row alignItems="center" spacing={16} style={{ padding: '20px 0' }}>
                <img className="img round" src="https://avatars.githubusercontent.com/u/77660676?v=4"
                     alt="profile-picture" />
                <Stack>
                    <h2>김애진</h2>
                    <code>frontend-developer</code>
                    <a href="https://www.github.com/code-zeen" target='_blank'>
                        <Icon name="github" />
                        <span> Git Hub</span>
                    </a>
                </Stack>
            </Stack>
            <Stack alignItems="flex-start">
                {personalInfo.map((row, i) => (
                    <Stack key={i} row alignItems="center">
                        <Icon name={row.icon} />
                        <p className="secondary">{row.text}</p>
                    </Stack>
                ))}
            </Stack>
            <Stack>
                <p className="tertiary">Last updated: {BUILD_TIMESTAMP.slice(0,10)}</p>
            </Stack>
        </Stack>
    )
      <div className="flex gap-1">
        {skillSet.map((row, i) => (
          <Chip key={i} text={row.text} startIcon={<Icon name={row.icon} />} />
        ))}
      </div>
}

export default Contact