export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

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
