import styled from 'styled-components'

const Stack = styled.div<{
    border?: boolean,
    row?: boolean,
    justifyContent?: string,
    alignItems?: string,
    width?: string,
    height?: string,
    spacing?: number,
    m?: number,
    p?: number,
}>`
    display: flex;
    flex-wrap: wrap;
    border: ${p => p.border && '1px solid red'};
    //border: 1px solid cornflowerblue;
    flex-direction: ${p => p.row ? 'row' : 'column'};
    justify-content: ${p => p.justifyContent || 'flex-start'};
    align-items: ${p => p.alignItems || 'flex-start'};
    width: ${p => p.width};
    height: ${p => p.height};
    margin: ${p => p.m || 0}px;
    padding: ${p => p.p || 0}px;
    gap: ${p => p.spacing || 2}px;
`

export { Stack }