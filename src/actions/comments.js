import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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

function upVoteComment (id) {
  return {
    type: UPVOTE_COMMENT,
    id
  }
}

function downVoteComment (id) {
  return {
    type: DOWNVOTE_COMMENT,
    id
  }
}

function deleteComment (id) {
  return {
    type: DELETE_COMMENT,
    id
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

export function handleCommentVote (id, option) {
  return (dispatch) => {
    return Promise.all([
      ReadableAPI.voteComment(id, option)
    ]).then(() => {
      option === 'upVote'
        ? dispatch(upVoteComment(id))
        : dispatch(downVoteComment(id))
    })
  }
}

export function handleDeleteComment (id) {
  return (dispatch) => {
    return Promise.all([
      ReadableAPI.deleteComment(id)
    ]).then(() => {
      dispatch(deleteComment(id))
    })
  }
}
