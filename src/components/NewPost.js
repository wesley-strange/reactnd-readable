import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/NewPost.css';
import { connect } from 'react-redux'
import { handleNewPost } from '../actions/posts'

class NewPost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: '',
    toHome: false
  }

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    e.target.tagName === 'SELECT'
      ? (
        this.setState(() => ({
          category: value
        }))
      )
      : (
        this.setState(() => ({
          [name]: value
        }))
      )
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
          toHome: true
        }))
      })
    } else {
      console.log(title)
      alert("Inputs cannot be blank.")
    }
  }

  render() {
    const { title, body, author, category, toHome } = this.state
    const { categories } = this.props

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <form className='new-post' onSubmit={this.handleSubmit}>
        <div className='new-post-header'>Create New Post</div>
        <div className='new-post-author'>
          <p className='text-label'>Username</p>
          <input
            name='author'
            type='text'
            className=''
            placeholder='Enter username'
            value={author}
            onChange={this.handleChange}
          />
        </div>
        <div className='new-post-category'>
          <p className='text-label'>Category</p>
          <select name='categories' id='categories' value={category} onChange={this.handleChange}>
            <option value="" disabled>Select...</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className='new-post-title'>
          <p className='text-label'>Title</p>
          <input
            name='title'
            type='text'
            className=''
            placeholder='Enter title'
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <textarea
          name='body'
          className='new-post-body'
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

function mapStateToProps ({categories}) {
  return {
    categories: Object.values(categories)
  }
}

export default connect(mapStateToProps)(NewPost)
