import { RECEIVE_POSTS, INCREMENT_COUNTER, ADD_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        ...action.posts
      }
    case INCREMENT_COUNTER :
      const { id } = action
      return {
        ...state,
        [id]: {
          ...state[id],
          commentCount: state[id].commentCount + 1
        }
      }
    case ADD_POST :
      const { post } = action

      return {
        ...state,
        [post.id]: post
      }
    default :
      return state
  }
}
