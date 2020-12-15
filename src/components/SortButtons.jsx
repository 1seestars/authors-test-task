import React from 'react'
import { Block } from '../styled/Block'
import styled from 'styled-components'
import { sortColumn } from '../store/posts/actions'
import { connect } from 'react-redux'

const name = 'name'
const pageviews = 'pageviews'

const SortButton = styled.button`
  border: none;
  border-radius: 100px;
  background: white;
  width: 30px;
  height: 30px;
  box-shadow: 0 0 3px #929292;
  padding-top: 0;
`

const SortButtons = ({ sortedBy, sortOrder, sortColumn }) => {
  const sortBtnSign = (sorted, order, field) => {
    const sign = {
      '': '↕',
      asc: '↑',
      desc: '↓'
    }
    if (field === sorted) {
      return sign[order]
    }
    return '↕'
  }

  return (
    <Block height={'40px'} justifyContent={'space-between'}>
      <SortButton onClick={() => sortColumn(name)}>
        {sortBtnSign(sortedBy, sortOrder, name)}
      </SortButton>
      <SortButton onClick={() => sortColumn(pageviews)}>
        {sortBtnSign(sortedBy, sortOrder, pageviews)}
      </SortButton>
    </Block>
  )
}

const mapStateToProps = ({ posts }) => ({
  sortedBy: posts.sorting.sortedBy,
  sortOrder: posts.sorting.sortOrder
})

const mapDispatchToProps = {
  sortColumn
}

export default connect(mapStateToProps, mapDispatchToProps)(SortButtons)
