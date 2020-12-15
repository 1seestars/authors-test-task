import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { nextPage, previousPage } from '../store/posts/actions'

const PageButtonBlock = styled.div`
  padding-top: 30px;
  text-align: center;
  color: #fff;
  font-weight: 700;
`

const PageButton = styled.button`
  color: #fff;
  border: none;
  font-weight: 700;
  background: transparent;
  transition: 0.3s transform;
  opacity: 0.7;
  outline: none;
  visibility: ${({ visibility }) => visibility && visibility};
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: ${({ translate }) => translate && translate};
  }
`

const ChangePageButtons = ({
  posts,
  postsOnPage,
  currentPage,
  previousPage,
  nextPage
}) => {
  const start = postsOnPage * (currentPage - 1) + 1
  const end =
    postsOnPage * currentPage < posts.length
      ? postsOnPage * currentPage
      : posts.length

  return (
    <PageButtonBlock>
      <PageButton
        onClick={previousPage}
        translate={'translate(-10px)'}
        visibility={postsOnPage * (currentPage - 1) < 1 ? 'hidden' : 'visible'}
      >
        ᐸ
      </PageButton>
      {start < end ? `${start} - ${end}` : `${end}`}
      <PageButton
        onClick={nextPage}
        translate={'translate(10px)'}
        visibility={
          postsOnPage * currentPage > posts.length ? 'hidden' : 'visible'
        }
      >
        ᐳ
      </PageButton>
    </PageButtonBlock>
  )
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.shownPosts,
  postsOnPage: posts.postsOnPage,
  currentPage: posts.currentPage
})

const mapDispatchToProps = {
  previousPage,
  nextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePageButtons)
