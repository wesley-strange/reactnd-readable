import * as ReadableAPI from '../utils/ReadableAPI'
import { receiveCategories } from '../actions/categories'
import { receivePosts } from '../actions/posts'

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      ReadableAPI.getCategories(),
      ReadableAPI.getPosts()
    ]).then(([ categories, posts ]) => {
      const categoriesObj = {};
      categories.forEach(cat => {
        categoriesObj[cat.name] = cat;
      })
      dispatch(receiveCategories(categoriesObj))

      const postsObj = {};
      posts.forEach(post => {
        postsObj[post.id] = post;
      })
      dispatch(receivePosts(postsObj))
    })
  }
}
