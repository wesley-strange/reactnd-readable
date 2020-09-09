import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  render () {
    const { post } = this.props

    return (
      post
        ? (
          <li key={post.id}>
            <div>POST ID: {post.id}</div>
          </li>
        )
        : (
          <li>hi</li>
        )
    )
  }
}

function mapStateToProps ({posts}, {id}) {
  return {
    post: posts[id]
  }
}

export default connect(mapStateToProps)(Post)
