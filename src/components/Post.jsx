import React from 'react'
import firstPlaceMedal from '../images/medals/1st.png'
import secondPlaceMedal from '../images/medals/2nd.png'
import thirdPlaceMedal from '../images/medals/3rd.png'
import styled from 'styled-components'
import { Image } from '../styled/Image'
import { PostContainer } from '../styled/PostContainer'
import { BRONZE, GOLD, SILVER } from '../store/posts/reducer'

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const OrderNumber = styled.span`
  font-size: 12px;
  color: #999;
  font-weight: 600;
  align-self: center;
`

const AuthorAvatar = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background: ${({ background }) => background && background};
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 0 5px #999;
  align-self: center;
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
  opacity: ${({ opacity }) => opacity && opacity};
`

const Pageviews = styled.div`
  font-weight: 700;
`

const Post = ({ post, index }) => (
  <PostContainer>
    <AuthorContainer>
      <OrderNumber>{index + 1}</OrderNumber>
      <AuthorAvatar background={post.background}>{post.name[0]}</AuthorAvatar>
      <AuthorInfoContainer>
        <AuthorName>{post.name}</AuthorName>
        <CountPub opacity={post.count_pub ? '1' : '0.5'}>
          {post.count_pub} публ.
        </CountPub>
      </AuthorInfoContainer>
    </AuthorContainer>
    <div>
      {post.reward === GOLD && (
        <Image
          src={firstPlaceMedal}
          alt={GOLD}
          title={GOLD}
          maxHeight={'50px'}
        />
      )}
      {post.reward === SILVER && (
        <Image
          src={secondPlaceMedal}
          alt={SILVER}
          title={SILVER}
          maxHeight={'50px'}
        />
      )}
      {post.reward === BRONZE && (
        <Image
          src={thirdPlaceMedal}
          alt={BRONZE}
          title={BRONZE}
          maxHeight={'50px'}
        />
      )}
    </div>

    <Pageviews>{post.pageviews}</Pageviews>
  </PostContainer>
)

export default Post
