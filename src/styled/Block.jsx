import styled from 'styled-components'

export const Block = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: center;
  background: #ebeef4;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  height: ${({ height }) => (height ? height : '80px')};
`
