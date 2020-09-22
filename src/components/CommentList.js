import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import { handleLoadComments } from '../actions/comments'
import '../styles/CommentList.css';

class CommentList extends Component {
  componentDidMount() {
    this.props.dispatch(handleLoadComments(this.props.pid))
  }

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
    comments,
    pid
  }
}

export default connect(mapStateToProps)(CommentList)
