import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUpdatePost } from '../actions/posts'
import '../styles/Post.css';

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
            <div key={post.id}>
              <form className='update-post' onSubmit={this.handleSubmit}>
                <div className='update-post-category-label label'>Category</div>
                <input
                  name='category'
                  type='text'
                  className='update-post-category'
                  placeholder='Enter category'
                  value={category}
                  onChange={this.handleChange}
                />
                <div className='update-post-author-label label'>Author</div>
                <input
                  name='author'
                  type='text'
                  className='update-post-author'
                  placeholder='Enter username'
                  value={author}
                  onChange={this.handleChange}
                />
                <div className='update-post-title-label label'>Title</div>
                <input
                  name='title'
                  type='text'
                  className='update-post-title'
                  placeholder='Enter title'
                  value={title}
                  onChange={this.handleChange}
                />
                <div className='update-post-body-label label'>Comment</div>
                <textarea
                  name='body'
                  className='update-post-body'
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
            </div>
          )
          : (
            <div className='post' key={post.id}>
              <div className='post-category'>CAT: {post.category}</div>
              <div className='post-author'>AUTHOR: {post.author}</div>
              <div className='post-timestamp'>TIME: {post.timestamp}</div>
              <div class="vote post-circle">
                <div class="increment up"></div>
                <div class="increment down"></div>

                <div class="count">{post.voteScore}</div>
              </div>
              <div className='post-title'>TITLE: {post.title}</div>
              <div className='post-body'>BODY: {post.body}</div>
              <div className='post-comments'>{post.commentCount} comments</div>
              <div className='post-details link'>View Details</div>
              <div className='post-edit link' onClick={this.handleOnClick}>Edit Post</div>
              <div className='post-delete link'>Delete Post</div>
            </div>
          )
        )
        : (
          <div></div>
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
