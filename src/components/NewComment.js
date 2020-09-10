import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewComment } from '../actions/shared'
import '../styles/NewComment.css';

class NewComment extends Component {
  state = {
    author: '',
    body: ''
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
    const { dispatch, pid } = this.props

    if (author !== '' && body !== '') {
      dispatch(handleNewComment(body, author, pid))
      .then(() => {
        this.setState(() => ({
          author: '',
          body: ''
        }))
      })
    } else {
      alert("Options cannot be blank and cannot be the same. Try again.")
    }
  }

  render() {
    const { author, body } = this.state

    return (
      <form className='new-comment' onSubmit={this.handleSubmit}>
        <p className='new-label'>Commenting as</p>
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
          Add Comment
        </button>
      </form>
    )
  }
}

export default connect()(NewComment)
