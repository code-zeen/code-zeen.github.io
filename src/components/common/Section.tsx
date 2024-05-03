import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 16px 0;
    gap: 8px;
`

function Section({ title, children }: { title: string, children: ReactNode }) {
    return (
        <StyledSection>
            <h3>{title}</h3>
            <hr />
            {children}
        </StyledSection>
    )
}

export default Section