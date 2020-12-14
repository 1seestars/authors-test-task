import React from 'react'
import { Block } from '../styled/Block'
import styled from 'styled-components'
import { sortByName, sortByPageviews } from '../store/posts/actions'
import { connect } from 'react-redux'

const SortButton = styled.button`
  border: none;
  border-radius: 100px;
  background: white;
  width: 30px;
  height: 30px;
  box-shadow: 0 0 3px #929292;
  padding-top: 0;
`

const SortButtons = ({ sortedBy, sortByName, sortByPageviews }) => {
  const nameSortBtn = {
    default: '↕',
    nameUp: '↑',
    nameDown: '↓',
    pageviewsUp: '↕'
  }

  const pageviewsSortBtn = {
    default: '↓',
    pageviewsUp: '↑',
    nameUp: '↓',
    nameDown: '↓'
  }

  return (
    <Block height={'40px'} justifyContent={'space-between'}>
      <SortButton onClick={sortByName}>{nameSortBtn[sortedBy]}</SortButton>
      <SortButton onClick={sortByPageviews}>
        {pageviewsSortBtn[sortedBy]}
      </SortButton>
    </Block>
  )
}

const mapStateToProps = ({ posts }) => ({
  sortedBy: posts.sortedBy
})

const mapDispatchToProps = {
  sortByName,
  sortByPageviews
}

export default connect(mapStateToProps, mapDispatchToProps)(SortButtons)
