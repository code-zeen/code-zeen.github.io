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
        { icon: 'typescript', text: 'TypeScript' },
        { icon: 'react', text: 'React' },
        { icon: 'redux', text: 'Redux Toolkit' },
        { icon: 'mui', text: 'Material UI' },
        { icon: 'vite', text: 'Vite' },
        { icon: 'webstorm', text: 'WebStorm' },
    ]
    return (
        <Stack spacing={16} className="contact bgcolor dark" style={{ padding: '20px 32px' }}>
            <Stack row alignItems="center" spacing={16} style={{ padding: '20px 0' }}>
                <img className="img round" src="https://avatars.githubusercontent.com/u/77660676?v=4"
                     alt="profile-picture" />
                <Stack>
                    <h2>김애진</h2>
                    <code>frontend-developer</code>
                </Stack>
            </Stack>
            <Stack alignItems="flex-start">
                {personalInfo.map((row, i) => (
                    <Stack key={i} row alignItems="center">
                        <Icon name={row.icon} />
                        <p>{row.text}</p>
                    </Stack>
                ))}
            </Stack>
            <Stack row>
                {skillSet.map((row, i) => (
                    <Chip key={i} text={row.text} startIcon={<Icon name={row.icon} />} />
                ))}
            </Stack>
        </Stack>
    )
}

export default Contact