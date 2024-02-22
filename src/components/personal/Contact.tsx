import Chip from '../common/Chip.tsx'
import Stack from '../common/Stack.tsx'
import Icon from '../common/Icon.tsx'

function Contact() {
    return (
        <div className="contact bgcolor dark" style={{ padding: '20px 10px 20px' }}>
            <img className="img round" src="https://avatars.githubusercontent.com/u/77660676?v=4"
                 alt="profile-picture" />
            <div style={{ textAlign: 'left' }}>
                <h2 style={{ margin: 0 }}>김애진</h2>
                <code style={{ margin: 0 }}>frontend-developer</code>
            </div>
            <div style={{ margin: '10px 0 20px' }}>
                <Stack>
                    <Icon name="test" />
                    <p>1996, 여</p>
                </Stack>
                <Stack>
                    <Icon name="email" />
                    <p>aezeen_kim@naver.com</p>
                </Stack>
                <Stack>
                    <Icon name="location" />
                    <p>대전광역시 유성구</p>
                </Stack>
            </div>
            <Stack>
                <Chip text="TypeScript" startIcon={<Icon name="typescript" />} />
                <Chip text="React" startIcon={<Icon name="react" />} />
                <Chip text="Redux Toolkit" startIcon={<Icon name="redux" />} />
                <Chip text="Material UI" startIcon={<Icon name="mui" />} />
                <Chip text="Vite" startIcon={<Icon name="vite" />} />
            </Stack>
        </div>
    )
}

export default Contact