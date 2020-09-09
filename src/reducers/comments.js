import { RECEIVE_COMMENTS, ADD_COMMENT, UPDATE_COMMENT } from '../actions/comments'

export default function comments (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        ...action.comments
      }
    case ADD_COMMENT :
      const { comment } = action

      return {
        ...state,
        [comment.id]: comment
      }
    case UPDATE_COMMENT :
      const { author, body, id, timestamp } = action

      return {
        ...state,
        [id]: {
          ...state[id],
          author,
          body,
          timestamp
        }
      }
    default :
      return state
  }
}
