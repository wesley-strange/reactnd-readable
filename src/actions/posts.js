import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const ADD_POST = 'ADD_POST'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function incrementCounter (id) {
  return {
    type: INCREMENT_COUNTER,
    id,
  }
}

function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleNewPost (title, body, author, category) {
  return (dispatch) => {
    return ReadableAPI.postPost({
      title,
      body,
      author,
      category
    })
      .then((formattedPost) => {
        dispatch(addPost(formattedPost))
      })
  }
}
