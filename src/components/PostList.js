import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import '../styles/PostList.css';

class PostList extends Component {
  render () {
    return (
      <div className='post-list'>
        {this.props.posts.map((post) => (
          <Post id={post.id} />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({posts}) {
  return {
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps)(PostList)
