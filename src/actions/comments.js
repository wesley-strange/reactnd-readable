import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

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
