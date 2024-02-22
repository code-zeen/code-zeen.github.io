import styled from 'styled-components'
import { ReactNode } from 'react'

const StyledChip = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    border: 1px solid transparent;
    border-radius: 7px;
    gap: 4px;
    padding: 0 12px 0;
    white-space: nowrap;

    &:hover {
        background-color: #383838;
        border-color: #404040;
    }
`

function Chip({ text, startIcon }: { text: string, startIcon?: ReactNode }) {

    return (
        <StyledChip>
            {startIcon}
            {text}
        </StyledChip>
    )
}

export default Chip