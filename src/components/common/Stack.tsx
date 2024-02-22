import styled from 'styled-components'
import { ReactNode } from 'react'

const StyledStack = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2px;
`

function Stack({ children }: { children: ReactNode }) {
    return (
        <StyledStack>
            {children}
        </StyledStack>
    )
}

export default Stack