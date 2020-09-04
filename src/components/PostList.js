import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class PostList extends Component {
  render () {
    return (
      <ul className='dashboard-list'>
        {this.props.posts.map((post) => (
          <Post id={post.id} />
        ))}
      </ul>
    )
  }
}

function mapStateToProps ({posts}) {
  return {
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps)(PostList)
