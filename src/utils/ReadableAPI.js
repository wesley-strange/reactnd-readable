const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/*
GET /categories
  USAGE:
    Get all of the categories available for the app. List is found in categories.js. Feel free to extend this list as you desire.
*/
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

/*
GET /:category/posts
  USAGE:
    Get all of the posts for a particular category
*/
export const getPostsCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

/*
GET /posts
  USAGE:
    Get all of the posts. Useful for the main page when no category is selected.
*/
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

/*
POST /posts
  USAGE:
    Add a new post
  PARAMS:
    id - UUID should be fine, but any unique id will work
    timestamp - timestamp in whatever format you like, you can use Date.now() if you like
    title - String
    body - String
    author - String
    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
*/
export const postPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ post })
  }).then(res => res.json())

/*
GET /posts/:id
  USAGE:
    Get the details of a single post
*/
export const getPostsId = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())

/*
POST /posts/:id
  USAGE:
    Used for voting on a post
  PARAMS:
    option - String: Either "upVote" or "downVote"
*/
export const postPostId = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

/*
PUT /posts/:id
  USAGE:
    Edit the details of an existing post
  PARAMS:
    title - String
    body - String
*/
export const putPostId = (id, category, username, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ category, username, title, body })
  }).then(res => res.json())

/*
DELETE /posts/:id
  USAGE:
    Sets the deleted flag for a post to 'true'.
    Sets the parentDeleted flag for all child comments to 'true'.
*/

/*
GET /comments
  USAGE:
    Get all of the comments available for the app.
*/
export const getComments = () =>
  fetch(`${api}/comments`, { headers })
    .then(res => res.json())

/*
GET /posts/:id/comments
  USAGE:
    Get all the comments for a single post
*/
export const getCommentsId = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatComment (body, author, parentId) {
  return {
    id: generateUID(),
    parentId,
    timestamp: Date.now(),
    body,
    author,
    voteScore: 1,
    deleted: false,
    parentDeleted: false
  }
}

/*
POST /comments
  USAGE:
    Add a comment to a post

  PARAMS:
    id: Any unique ID. As with posts, UUID is probably the best here.
    timestamp: timestamp. Get this however you want.
    body: String
    author: String
    parentId: Should match a post id in the database.
*/
// export const postComment = (body, author, parentId) => {
//   const formattedComment = formatComment(body, author, parentId)
//
//   fetch(`${api}/comments`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ formattedComment })
//   }).then(res => res.json())
// }

export const postComment = (body, author, parentId) => {
  return new Promise((res, rej) => {
    const formattedComment = formatComment(body, author, parentId)

    fetch(`${api}/comments`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formattedComment })
    })

    res(formattedComment)
  })
}

/*
GET /comments/:id
  USAGE:
    Get the details for a single comment
*/
export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())

/*
POST /comments/:id
  USAGE:
    Used for voting on a comment.
  PARAMS:
    option - String: Either "upVote" or "downVote"
*/
export const postCommentId = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

/*
PUT /comments/:id
  USAGE:
    Edit the details of an existing comment

  PARAMS:
    timestamp: timestamp. Get this however you want.
    body: String
*/
export const putCommentId = (id, timestamp, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, body })
  }).then(res => res.json())

/*
DELETE /comments/:id
  USAGE:
    Sets a comment's deleted flag to 'true'
*/
