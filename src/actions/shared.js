import * as ReadableAPI from '../utils/ReadableAPI'
import { receiveCategories } from '../actions/categories'
import { receivePosts, incrementCounter } from '../actions/posts'
import { receiveComments, addComment } from '../actions/comments'

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

export function handleNewComment (body, author, parentId) {
  return (dispatch) => {
    return Promise.all([
      ReadableAPI.postComment(body, author, parentId)
    ]).then((comment) => {
      dispatch(addComment(comment[0]))
      dispatch(incrementCounter(comment[0].parentId))
    })
  }
}
