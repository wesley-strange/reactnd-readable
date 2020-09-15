import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUpdateComment, handleCommentVote, handleDeleteComment } from '../actions/comments'
import { formatDate } from '../utils/helpers'
import '../styles/Comment.css';

class Comment extends Component {
  state = {
    author: this.props.comment.author,
    body: this.props.comment.body,
    edit: false
  }

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    this.setState(() => ({
      [name]: value
    }))
  }

  editComment = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit
    }))
  }

  vote = (e) => {
    const { dispatch, comment } = this.props
    const name = e.target.getAttribute('name')

    dispatch(handleCommentVote(comment.id, name))
  }

  deleteComment = () => {
    const { dispatch, comment } = this.props

    dispatch(handleDeleteComment(comment.id))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { author, body } = this.state
    const { dispatch, comment } = this.props

    if (author !== '' && body !== '') {
      dispatch(handleUpdateComment(author, body, comment.id))
      .then(() => {
        this.setState(() => ({
          edit: false
        }))
      })
    } else {
      alert("Options cannot be blank and cannot be the same. Try again.")
    }
  }

  render () {
    const { comment } = this.props
    const { author, body, edit } = this.state

    return (
      comment
        ? (
          edit
            ? (
              <div>
                <form className='edit-comment' onSubmit={this.handleSubmit}>
                  <p className='edit-label'>Commenting as</p>
                  <input
                    name='author'
                    type='text'
                    className='edit-author'
                    placeholder='Enter username'
                    value={author}
                    onChange={this.handleChange}
                  />
                  <textarea
                    name='body'
                    className='edit-body'
                    placeholder='Enter comment...'
                    value={body}
                    onChange={this.handleChange}
                  ></textarea>
                  <button
                    className="edit-submit"
                    type='submit'
                    align="center"
                  >
                    Update Comment
                  </button>
                </form>
              </div>
            )
            : (
              <div key={comment.id} className='comment'>
                <div className='comment-author'>by {comment.author} on {formatDate(comment.timestamp)}</div>
                <div className="vote-comment comment-circle">
                  <div name="upVote" className="increment up-comment" onClick={this.vote}></div>
                  <div name="downVote" className="increment down-comment" onClick={this.vote}></div>
                  <div className="count-comment">{comment.voteScore}</div>
                </div>
                <div className='comment-body'>{comment.body}</div>
                <div className='comment-edit link' onClick={this.editComment}>Edit Comment</div>
                <div className='comment-delete link' onClick={this.deleteComment}>Delete Comment</div>
              </div>
            )
        )
        : (
          <div></div>
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
