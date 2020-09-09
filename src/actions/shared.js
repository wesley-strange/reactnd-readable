import * as ReadableAPI from '../utils/ReadableAPI'
import { receiveCategories } from '../actions/categories'
import { receivePosts } from '../actions/posts'
import { receiveComments } from '../actions/comments'

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      ReadableAPI.getCategories(),
      ReadableAPI.getPosts(),
      ReadableAPI.getComments()
    ]).then(([ categories, posts, comments ]) => {
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

      const commentsObj = {};
      comments.forEach(comment => {
        commentsObj[comment.id] = comment;
      })
      dispatch(receiveComments(commentsObj))
    })
  }
}
