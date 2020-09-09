import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUpdatePost } from '../actions/posts'

class Post extends Component {
  state = {
    category: this.props.post ? this.props.post.category : '',
    author: this.props.post ? this.props.post.author : '',
    title: this.props.post ? this.props.post.title : '',
    body: this.props.post ? this.props.post.body : '',
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

    const { category, author, title, body } = this.state
    const { dispatch, post } = this.props

    if (category !== '' && author !== '' && title !== '' && body !== '') {
      dispatch(handleUpdatePost(category, author, title, body, post.id))
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
    const { category, author, title, body, edit } = this.state
    const { post } = this.props

    return (
      post
        ? (
          edit
          ? (
            <li key={post.id}>
              <form className='update-post' onSubmit={this.handleSubmit}>
                <div className='update-post-title'>Update post</div>
                <input
                  name='category'
                  type='text'
                  className='update-post-category'
                  placeholder='Enter category'
                  value={category}
                  onChange={this.handleChange}
                />
                <input
                  name='author'
                  type='text'
                  className='update-post-author'
                  placeholder='Enter username'
                  value={author}
                  onChange={this.handleChange}
                />
                <input
                  name='title'
                  type='text'
                  className='update-post-title'
                  placeholder='Enter title'
                  value={title}
                  onChange={this.handleChange}
                />
                <textarea
                  name='body'
                  className='update-body'
                  placeholder='Enter post details...'
                  value={body}
                  onChange={this.handleChange}
                ></textarea>
                <button
                  className="update-post-submit"
                  type='submit'
                  align="center"
                >
                  Update Post
                </button>
              </form>
            </li>
          )
          : (
            <li key={post.id} onClick={this.handleOnClick}>
              <div>POST ID: {post.id}</div>
            </li>
          )
        )
        : (
          <li></li>
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
