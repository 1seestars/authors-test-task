import React from 'react'
import firstPlaceMedal from '../images/medals/1st.png'
import secondPlaceMedal from '../images/medals/2nd.png'
import thirdPlaceMedal from '../images/medals/3rd.png'
import styled from 'styled-components'
import { Image } from '../styled/Image'
import { PostContainer } from '../styled/PostContainer'

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
      {post.reward === 'gold' && (
        <Image
          src={firstPlaceMedal}
          alt={'Gold'}
          title={'Gold'}
          maxHeight={'50px'}
        />
      )}
      {post.reward === 'silver' && (
        <Image
          src={secondPlaceMedal}
          alt={'Silver'}
          title={'Silver'}
          maxHeight={'50px'}
        />
      )}
      {post.reward === 'bronze' && (
        <Image
          src={thirdPlaceMedal}
          alt={'Bronze'}
          title={'Bronze'}
          maxHeight={'50px'}
        />
      )}
    </div>

    <Pageviews>{post.pageviews}</Pageviews>
  </PostContainer>
)

export default Post
