import response from '../../backendData/data.json'
export const SET_POSTS = 'SET_POSTS'
export const FIND_STRING = 'FIND_STRING'
export const SORT_COLUMN = 'SORT_COLUMN'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'
export const NEXT_PAGE = 'NEXT_PAGE'

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts
})

export const findString = (string) => ({
  type: FIND_STRING,
  payload: string
})

export const sortColumn = (field) => ({
  type: SORT_COLUMN,
  payload: field
})

export const previousPage = () => ({
  type: PREVIOUS_PAGE
})

export const nextPage = () => ({
  type: NEXT_PAGE
})

export const getPostsFromServer = () => async (dispatch) => {
  // let's imagine, we received a response from the server
  dispatch(setPosts(response))
}
