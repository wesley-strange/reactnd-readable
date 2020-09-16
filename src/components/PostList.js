import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import '../styles/PostList.css';

class PostList extends Component {
  render () {
    return (
      <div className='post-list'>
        {this.props.posts.map((post) => (
          <Post key={post.id} id={post.id} showLink={true} />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({posts}, {sortBy, category}) {
  sortBy === 'Date'
    ? (
      posts = Object.values(posts).filter(post => post.deleted === false).sort((a, b) => b.timestamp - a.timestamp)
    )
    : (
      posts = Object.values(posts).filter(post => post.deleted === false).sort((a, b) => b.voteScore - a.voteScore)
    )

  if (category) {
    posts = posts.filter(post => post.category === category)
  }

  return {
    posts
  }
}

export default connect(mapStateToProps)(PostList)
