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
  px?: number,
  py?: number,
}>`
    display: flex;
    flex-wrap: wrap;
    border: ${p => p.border && '1px solid red'};
    flex-direction: ${p => p.row ? 'row' : 'column'};
    justify-content: ${p => p.justifyContent || 'flex-start'};
    align-items: ${p => p.alignItems || 'flex-start'};
    width: ${p => p.width};
    height: ${p => p.height};
    margin: ${p => p.m || 0}px;
    padding: ${p => p.p || 0}px;
    padding-left: ${p => p.px || 0}px;
    padding-right: ${p => p.px || 0}px;
    padding-top: ${p => p.py || 0}px;
    padding-bottom: ${p => p.py || 0}px;
    gap: ${p => p.spacing || 2}px;
`

export { Stack }