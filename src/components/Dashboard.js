import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h3 className='center'>Sort by will go here...</h3>
        <PostList />
      </div>
    )
  }
}

export default connect()(Dashboard)
