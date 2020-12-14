import {
  FIND_STRING,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_POSTS,
  SORT_BY_NAME,
  SORT_BY_PAGEVIEWS
} from './actions.js'

const initialState = {
  posts: [],
  shownPosts: [],
  sortedBy: 'default',
  postsOnPage: 10,
  currentPage: 1
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      const avatarColorGenerator = () => {
        const x = Math.floor(Math.random() * 256)
        const y = Math.floor(Math.random() * 256)
        const z = Math.floor(Math.random() * 256)
        const BgColor = 'rgba(' + x + ',' + y + ',' + z + ',0.7)'
        return BgColor
      }

      return {
        ...state,
        posts: action.payload.map((post) => {
          post.background = avatarColorGenerator()
          return post
        }),
        shownPosts: action.payload
      }
    case FIND_STRING:
      return {
        ...state,
        currentPage: 1,
        shownPosts: state.posts.filter((post) =>
          post.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      }
    case SORT_BY_NAME:
      if (state.sortedBy === 'nameDown') {
        return {
          ...state,
          shownPosts: [
            ...state.shownPosts.sort((a, b) => b.pageviews - a.pageviews)
          ],
          sortedBy: 'default'
        }
      } else if (state.sortedBy === 'nameUp') {
        return {
          ...state,
          shownPosts: [
            ...state.shownPosts.sort((a, b) => {
              if (a.name > b.name) return -1
              if (a.name < b.name) return 1
              return 0
            })
          ],
          sortedBy: 'nameDown'
        }
      } else {
        return {
          ...state,
          shownPosts: [
            ...state.shownPosts.sort((a, b) => {
              if (a.name > b.name) return 1
              if (a.name < b.name) return -1
              return 0
            })
          ],
          sortedBy: 'nameUp'
        }
      }
    case SORT_BY_PAGEVIEWS:
      if (state.sortedBy === 'pageviewsUp') {
        return {
          ...state,
          shownPosts: [
            ...state.shownPosts.sort((a, b) => b.pageviews - a.pageviews)
          ],
          sortedBy: 'default'
        }
      } else {
        return {
          ...state,
          shownPosts: [
            ...state.shownPosts.sort((a, b) => a.pageviews - b.pageviews)
          ],
          sortedBy: 'pageviewsUp'
        }
      }
    case PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1
      }
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    default:
      return state
  }
}
