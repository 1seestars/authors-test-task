export const SET_POSTS = 'SET_POSTS'
export const FIND_STRING = 'FIND_STRING'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_BY_PAGEVIEWS = 'SORT_BY_PAGEVIEWS'
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

export const sortByName = () => ({
  type: SORT_BY_NAME
})

export const sortByPageviews = () => ({
  type: SORT_BY_PAGEVIEWS
})

export const previousPage = () => ({
  type: PREVIOUS_PAGE
})

export const nextPage = () => ({
  type: NEXT_PAGE
})

export const getPostsFromServer = () => async (dispatch) => {
  // let's imagine, we received a response from the server
  const res =
    '[{"name":"Ярослав Елисеев","count_pub":4,"pageviews":991201},{"name":"Сергей Сафонов","count_pub":4,"pageviews":981435},{"name":"Николай Исаков","count_pub":3,"pageviews":971027},{"name":"Валерий Игнатьев","count_pub":4,"pageviews":960660},{"name":"Людмила Андреева","count_pub":10,"pageviews":950950},{"name":"Андрей Смирнов","count_pub":4,"pageviews":941118},{"name":"Иван Сергеев","count_pub":6,"pageviews":931536},{"name":"Валерия Комарова","count_pub":1,"pageviews":922087},{"name":"Никита Евдокимов","count_pub":10,"pageviews":910525},{"name":"Вадим Кошелев","count_pub":6,"pageviews":902019},{"name":"Петр Кузнецов","count_pub":1,"pageviews":890520},{"name":"Яков Семенов","count_pub":6,"pageviews":880766},{"name":"Борис Нестеров","count_pub":5,"pageviews":871408},{"name":"Валерий Шилов","count_pub":7,"pageviews":861594},{"name":"Станислав Смирнов","count_pub":10,"pageviews":851992},{"name":"Лев Макаров","count_pub":7,"pageviews":841681},{"name":"Георгий Краевский","count_pub":8,"pageviews":831467},{"name":"Петр Головцын","count_pub":1,"pageviews":822211},{"name":"Сергей Юмашев","count_pub":3,"pageviews":812242},{"name":"Вячеслав Сунбулов","count_pub":1,"pageviews":801407},{"name":"Иван Жаба","count_pub":10,"pageviews":791240},{"name":"Леонид Богоявленский","count_pub":1,"pageviews":782219},{"name":"Николай Могучий","count_pub":9,"pageviews":771624},{"name":"Руслан Стрекалов","count_pub":2,"pageviews":761255},{"name":"Ярослав Елагин","count_pub":2,"pageviews":751219},{"name":"Антон Ружинский","count_pub":4,"pageviews":741103},{"name":"Валерий Чемоданов","count_pub":8,"pageviews":730624},{"name":"Алексей Жемайлов","count_pub":10,"pageviews":721620},{"name":"Дмитрий Коцарев","count_pub":2,"pageviews":712136},{"name":"Евгений Жеманов","count_pub":6,"pageviews":700822},{"name":"Богдан Ганеев","count_pub":9,"pageviews":691847},{"name":"Семен Тутчев","count_pub":11,"pageviews":681208},{"name":"Евгений Ларин","count_pub":5,"pageviews":670587},{"name":"Андрей Шевчук","count_pub":1,"pageviews":661914},{"name":"Юрий Самойлов","count_pub":8,"pageviews":651719}]'
  const posts = JSON.parse(res).sort((a, b) => b.pageviews - a.pageviews)

  if (posts[0]) posts[0].reward = 'gold'
  if (posts[1]) posts[1].reward = 'silver'
  if (posts[2]) posts[2].reward = 'bronze'

  dispatch(setPosts(posts))
}
