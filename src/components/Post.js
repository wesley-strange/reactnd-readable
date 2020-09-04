import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  render () {
    const { post } = this.props

    return (
      <li key={post.id}>
        <div>POST ID: {post.id}</div>
      </li>
    )
  }
}

function mapStateToProps ({posts}, {id}) {
  console.log('posts')
  return {
    post: posts[id]
  }
}

export default connect(mapStateToProps)(Post)
