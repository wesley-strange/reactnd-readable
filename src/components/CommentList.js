import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Comment from './Comment'

class CommentList extends Component {
  render () {
    return (
      <ul className='dashboard-list'>
        {this.props.comments.map((comment) => (
          comment
            ? (
              <li key={comment.id}>
                <div>Comment ID: {comment.id}</div>
              </li>
            )
            : (
              <li>no comment</li>
            )
        ))}
      </ul>
    )
  }
}

function mapStateToProps ({comments}, {pid}) {
  return {
    comments: Object.values(comments).filter((comment) => (
      comment.parentId === pid
    )).sort((a, b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(CommentList)