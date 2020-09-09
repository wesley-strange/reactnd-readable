import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewPost } from '../actions/posts'

class CreateEditPost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: '',
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

    const { title, body, author, category } = this.state
    const { dispatch } = this.props

    if (title !== '' && body !== '' && author !== '' && category !== '') {
      dispatch(handleNewPost(title, body, author, category))
      .then(() => {
        this.setState(() => ({
          title: '',
          body: '',
          author: '',
          category: '',
        }))
      })
    } else {
      alert("Options cannot be blank and cannot be the same. Try again.")
    }
  }

  render() {
    const { title, body, author, category } = this.state

    return (
      <form className='new-post' onSubmit={this.handleSubmit}>
        <div className='new-post-title'>Create new post...</div>
        <input
          name='category'
          type='text'
          className='new-post-category'
          placeholder='Enter category'
          value={category}
          onChange={this.handleChange}
        />
        <input
          name='author'
          type='text'
          className='new-post-author'
          placeholder='Enter username'
          value={author}
          onChange={this.handleChange}
        />
        <input
          name='title'
          type='text'
          className='new-post-title'
          placeholder='Enter title'
          value={title}
          onChange={this.handleChange}
        />
        <textarea
          name='body'
          className='new-body'
          placeholder='Enter post details...'
          value={body}
          onChange={this.handleChange}
        ></textarea>
        <button
          className="new-post-submit"
          type='submit'
          align="center"
        >
          Add New Post
        </button>
      </form>
    )
  }
}

export default connect()(CreateEditPost)
