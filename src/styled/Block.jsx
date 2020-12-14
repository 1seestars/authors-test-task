import styled from 'styled-components'

export const Block = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: center;
  background: #ebeef4;
  border-radius: ${(props) => props.borderRadius && props.borderRadius};
  height: ${(props) => (props.height ? props.height : '80px')};
`
