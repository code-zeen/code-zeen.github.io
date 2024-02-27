import styled from "styled-components";
import { ReactNode } from "react";

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    padding: 0 16px 0;
`

function Section({ title, children }: { title: string, children: ReactNode }) {
    return (
        <StyledSection>
            <h3>{title}</h3>
            <hr/>
            {children}
        </StyledSection>
    )
}

export default Section