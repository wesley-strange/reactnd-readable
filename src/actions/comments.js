import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

export function handleLoadComments (id) {
  return (dispatch) => {
    return Promise.all([
      ReadableAPI.getCommentsId(id)
    ]).then((comments) => {
      dispatch(receiveComments(comments))
    })
  }
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}
