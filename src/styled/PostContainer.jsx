import styled from 'styled-components'

export const PostContainer = styled.li`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  background: #fff;
  &:nth-child(2n) {
    background: #ebeef4;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`
