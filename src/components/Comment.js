import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUpdateComment } from '../actions/comments'

class Comment extends Component {
  state = {
    author: this.props.comment.author,
    body: this.props.comment.body,
    edit: false
  }

  handleOnClick = (e) => {
    this.setState((prevState) => ({
      edit: !prevState.edit
    }))
  }

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    this.setState(() => ({
      [name]: value
    }))
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
              <li>
                <form className='new-comment' onSubmit={this.handleSubmit}>
                  <input
                    name='author'
                    type='text'
                    className='new-author'
                    placeholder='Enter username'
                    value={author}
                    onChange={this.handleChange}
                  />
                  <textarea
                    name='body'
                    className='new-body'
                    placeholder='Enter comment...'
                    value={body}
                    onChange={this.handleChange}
                  ></textarea>
                  <button
                    className="new-submit"
                    type='submit'
                    align="center"
                  >
                    Update Comment
                  </button>
                </form>
              </li>
            )
            : (
              <li key={comment.id} onClick={this.handleOnClick}>
                <div>COMMENT ID: {comment.id}</div>
                <div>USER: {comment.author}</div>
                <div>BODY: {comment.body}</div>
              </li>
            )
        )
        : (
          <li></li>
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
