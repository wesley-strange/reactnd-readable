import * as ReadableAPI from './utils/ReadableAPI'
import { receiveCategories } from '../actions/categories'
import { receivePosts } from '../actions/posts'

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      ReadableAPI.getCategories(),
      ReadableAPI.getPosts()
    ]).then(([ categories, posts ]) => {
      dispatch(receiveCategories(categories))
      dispatch(receivePosts(posts))
    })
  }
}
