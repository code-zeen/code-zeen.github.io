import { Stack } from '../styled/Stack.ts'
import { useState } from 'react'

function AboutThisPage() {
    const [ hide, setHide ] = useState(false)
    const handleClick = () => {
        setHide(true)
    }
    return (
        <Stack style={{ display: hide ? 'none' : 'flex' }}>
            <p>이 페이지는 최소한의 외부 라이브러리만 사용하여 직접 제작하였습니다.</p>
            <code style={{ fontSize: '1rem', whiteSpace: 'pre-wrap', backgroundColor: '#111', padding: '16px', width: '100%', borderRadius: '9px' }}>
                {
                    `"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "styled-components": "^6.1.8"
 },`
                }
            </code>
            <button onClick={handleClick}>그렇군요!</button>
        </Stack>
    )
}

export default AboutThisPage