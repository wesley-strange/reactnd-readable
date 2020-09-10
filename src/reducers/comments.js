import { RECEIVE_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, UPVOTE_COMMENT, DOWNVOTE_COMMENT, DELETE_COMMENT } from '../actions/comments'

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
    case UPVOTE_COMMENT :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + 1
        }
      }
    case DOWNVOTE_COMMENT :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore - 1
        }
      }
    case DELETE_COMMENT :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true
        }
      }
    default :
      return state
  }
}
