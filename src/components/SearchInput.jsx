import React from 'react'
import { findString } from '../store/posts/actions'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Input = styled.input`
  border: none;
  width: 80%;
  background: transparent;
  outline: none;
  font-size: 14px;
  transition: 0.2s;
  &:focus {
    font-size: 18px;
    padding-left: 10px;
  }
  &::placeholder {
    font-weight: 700;
    opacity: 0.5;
  }
`

const SearchInput = ({ findString }) => (
  <Input
    placeholder={'Поиск авторов по имени'}
    onChange={(e) => findString(e.target.value.trim())}
  />
)

const mapDispatchToProps = {
  findString
}

export default connect(null, mapDispatchToProps)(SearchInput)
