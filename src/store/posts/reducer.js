import {
  FIND_STRING,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_POSTS,
  SORT_COLUMN
} from './actions.js'
import { avatarColorGenerator } from '../../utils/avatarBackgroundGenerator'
import { arraySorter } from '../../utils/arraySorter'

export const GOLD = 'GOLD'
export const SILVER = 'SILVER'
export const BRONZE = 'BRONZE'
export const NONE = 'NONE'

const asc = 'asc'
const desc = 'desc'

const initialState = {
  posts: [],
  shownPosts: [],
  sorting: {
    sortedBy: '',
    // possible values for sortOrder: asc / desc
    sortOrder: ''
  },
  postsOnPage: 10,
  currentPage: 1
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      const sortedArr = [...action.payload].sort(
        (a, b) => b.pageviews - a.pageviews
      )

      const freshPosts = action.payload.map((post) => {
        let reward = NONE
        if (post.pageviews === sortedArr[0].pageviews) {
          reward = GOLD
        } else if (post.pageviews === sortedArr[1].pageviews) {
          reward = SILVER
        } else if (post.pageviews === sortedArr[2].pageviews) {
          reward = BRONZE
        }

        return {
          ...post,
          background: avatarColorGenerator(),
          reward
        }
      })

      return {
        ...state,
        posts: freshPosts,
        shownPosts: freshPosts
      }
    case FIND_STRING:
      return {
        ...state,
        currentPage: 1,
        shownPosts: state.posts.filter((post) =>
          post.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      }
    case SORT_COLUMN:
      let order = asc
      if (action.payload === state.sorting.sortedBy) {
        if (state.sorting.sortOrder === asc) {
          order = desc
        }
      }

      return {
        ...state,
        sorting: {
          sortedBy: action.payload,
          sortOrder: order
        },
        shownPosts: arraySorter(action.payload, order, state.shownPosts)
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
