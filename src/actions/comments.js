import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

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

function updateComment (author, body, id, timestamp) {
  return {
    type: UPDATE_COMMENT,
    author,
    body,
    id,
    timestamp
  }
}

export function handleUpdateComment (author, body, id) {
  return (dispatch) => {
    const timestamp = Date.now()
    return Promise.all([
      ReadableAPI.updateComment(id, timestamp, author, body)
    ]).then(() => {
      dispatch(updateComment(author, body, id, timestamp))
    })
  }
}
