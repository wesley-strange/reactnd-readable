import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import '../styles/CommentList.css';

class CommentList extends Component {
  render () {
    return (
      <div className='comment-list'>
        {this.props.comments.map((comment) => (
          <Comment key={comment.id} id={comment.id} />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({comments}, {pid}) {
  comments = Object.values(comments).filter((comment) => (
    comment.parentId === pid
  ))
  comments = comments.filter((comment) => (
    comment.deleted === false
  )).sort((a, b) => b.timestamp - a.timestamp)
  return {
    comments
  }
}

export default connect(mapStateToProps)(CommentList)
