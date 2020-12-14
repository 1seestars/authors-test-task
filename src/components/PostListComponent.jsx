import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { PostContainer } from '../styled/PostContainer'
import Post from './Post'

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PostListComponent = ({ posts, postsOnPage, currentPage }) => (
  <PostList>
    {posts.length ? (
      posts.map((post, index) => {
        if (
          index + 1 > postsOnPage * (currentPage - 1) &&
          index + 1 <= postsOnPage * currentPage
        ) {
          return <Post key={index} post={post} index={index} />
        }
        return null
      })
    ) : (
      <PostContainer>Авторов не найдено...</PostContainer>
    )}
  </PostList>
)

const mapStateToProps = ({ posts }) => ({
  posts: posts.shownPosts,
  postsOnPage: posts.postsOnPage,
  currentPage: posts.currentPage
})

export default connect(mapStateToProps, null)(PostListComponent)
