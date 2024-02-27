import Chip from '../styled/Chip.tsx'
import Icon from '../common/Icon.tsx'
import { Stack } from '../styled/Stack.ts'

function Contact() {
    return (
        <Stack spacing={16} className="contact bgcolor dark" style={{ padding: '20px 10px 20px' }}>
            <Stack row alignItems="flex-end" spacing={16}>
                <img className="img round" src="https://avatars.githubusercontent.com/u/77660676?v=4"
                     alt="profile-picture" />
                <Stack>
                    <h2>김애진</h2>
                    <code>frontend-developer</code>
                </Stack>
            </Stack>
            <Stack alignItems="flex-start">
                <Stack row alignItems="center">
                    <Icon name="person" />
                    <p>1996, 여</p>
                </Stack>
                <Stack row alignItems="center">
                    <Icon name="email" />
                    <p>aezeen_kim@naver.com</p>
                </Stack>
                <Stack row alignItems="center">
                    <Icon name="location" />
                    <p>대전광역시, 유성구</p>
                </Stack>
            </Stack>
            <Stack row>
                <Chip text="TypSecript" startIcon={<Icon name="typescript" />} />
                <Chip text="React" startIcon={<Icon name="react" />} />
                <Chip text="Redux Toolkit" startIcon={<Icon name="redux" />} />
                <Chip text="Material UI" startIcon={<Icon name="mui" />} />
                <Chip text="Vite" startIcon={<Icon name="vite" />} />
                <Chip text="WebStorm" startIcon={<Icon name="webstorm" />} />
            </Stack>
        </Stack>
    )
}

export default Contact