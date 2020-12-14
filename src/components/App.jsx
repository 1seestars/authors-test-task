import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SearchInput from './SearchInput'
import {
  getPostsFromServer,
  nextPage,
  previousPage,
  sortByName,
  sortByPageviews
} from '../store/posts/actions'
import styled from 'styled-components'
import searchIcon from '../images/search.png'

const MainContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  border-radius: 10px;
`

const Block = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: center;
  background: #ebeef4;
  border-radius: ${(props) => props.borderRadius && props.borderRadius};
  height: ${(props) => (props.height ? props.height : '80px')};
`

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PostContainer = styled.li`
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

const Image = styled.img`
  max-height: 20px;
  margin-right: 20px;
`

const SortButton = styled.button`
  border: none;
  border-radius: 100px;
  background: white;
  width: 30px;
  height: 30px;
  box-shadow: 0 0 3px #929292;
  padding-top: 0;
`

const OrederNumber = styled.span`
  font-size: 12px;
  color: #999;
  font-weight: 600;
  align-self: center;
`

const AuthorAvatar = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background: ${(props) => props.background && props.background};
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 0 5px #999;
  align-self: center;
`

const Pageviews = styled.div`
  font-weight: 700;
`

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
  visibility: ${(props) => props.visibility && props.visibility};
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: ${(props) => props.translate && props.translate};
  }
`

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const AuthorInfoContainer = styled.div`
  width: 30vw;
  overflow-wrap: break-word;
`

const AuthorName = styled.div`
  font-weight: 700;
`

const CountPub = styled.div`
  color: #999;
  opacity: ${(props) => props.opacity && props.opacity};
`

const App = ({
  posts,
  getPostsFromServer,
  sortByName,
  sortByPageviews,
  postsOnPage,
  currentPage,
  previousPage,
  nextPage,
  sortedBy
}) => {
  useEffect(() => {
    getPostsFromServer()
  }, [getPostsFromServer])

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

  const showPages = () => {
    const start = postsOnPage * (currentPage - 1) + 1
    const end =
      postsOnPage * currentPage < posts.length
        ? postsOnPage * currentPage
        : posts.length

    return start < end ? `${start} - ${end}` : `${end}`
  }

  return (
    <MainContainer>
      <Block borderRadius={'10px 10px 0 0'}>
        <Image src={searchIcon} alt={'Search'} title={'Search'} />
        <SearchInput />
      </Block>
      <Block height={'40px'} justifyContent={'space-between'}>
        <SortButton onClick={sortByName}>{nameSortBtn[sortedBy]}</SortButton>
        <SortButton onClick={sortByPageviews}>
          {pageviewsSortBtn[sortedBy]}
        </SortButton>
      </Block>
      <PostList>
        {posts.length ? (
          posts.map((post, index) => {
            if (
              index + 1 > postsOnPage * (currentPage - 1) &&
              index + 1 <= postsOnPage * currentPage
            ) {
              return (
                <PostContainer key={index}>
                  <AuthorContainer>
                    <OrederNumber>{index + 1}</OrederNumber>
                    <AuthorAvatar background={post.background}>
                      {post.name[0]}
                    </AuthorAvatar>
                    <AuthorInfoContainer>
                      <AuthorName>{post.name}</AuthorName>
                      <CountPub opacity={post.count_pub ? '1' : '0.5'}>
                        {post.count_pub} публ.
                      </CountPub>
                    </AuthorInfoContainer>
                  </AuthorContainer>
                  <div>{post.reward && post.reward}</div>
                  <Pageviews>{post.pageviews}</Pageviews>
                </PostContainer>
              )
            }
            return null
          })
        ) : (
          <PostContainer>Авторов не найдено...</PostContainer>
        )}
      </PostList>
      <PageButtonBlock>
        <PageButton
          onClick={previousPage}
          translate={'translate(-10px)'}
          visibility={
            postsOnPage * (currentPage - 1) < 1 ? 'hidden' : 'visible'
          }
        >
          ᐸ
        </PageButton>
        {showPages()}
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
    </MainContainer>
  )
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.shownPosts,
  sortedBy: posts.sortedBy,
  postsOnPage: posts.postsOnPage,
  currentPage: posts.currentPage
})

const mapDispatchToProps = {
  getPostsFromServer,
  sortByName,
  sortByPageviews,
  previousPage,
  nextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
