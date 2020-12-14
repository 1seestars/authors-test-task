import styled from 'styled-components'

export const Image = styled.img`
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '20px')};
  margin-right: 20px;
`
