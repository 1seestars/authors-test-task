import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SearchInput from './SearchInput'
import { getPostsFromServer } from '../store/posts/actions'
import styled from 'styled-components'
import SortButtons from './SortButtons'
import PostListComponent from './PostListComponent'
import ChangePageButtons from './ChangePageButtons'

const MainContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  border-radius: 10px;
`

const App = ({ getPostsFromServer }) => {
  useEffect(() => {
    getPostsFromServer()
  }, [getPostsFromServer])

  return (
    <MainContainer>
      <SearchInput />
      <SortButtons />
      <PostListComponent />
      <ChangePageButtons />
    </MainContainer>
  )
}

const mapDispatchToProps = {
  getPostsFromServer
}

export default connect(null, mapDispatchToProps)(App)
