import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comment extends Component {
  render () {
    const { comment } = this.props

    return (
      comment
        ? (
          <li key={comment.id}>
            <div>COMMENT ID: {comment.id}</div>
          </li>
        )
        : (
          <li>hi</li>
        )
    )
  }
}

function mapStateToProps ({comments}, {id}) {
  return {
    comment: comments[id]
  }
}

export default connect(mapStateToProps)(Comment)
