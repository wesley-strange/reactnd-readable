import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import NewComment from './NewComment'

class Details extends Component {
  render () {
    console.log("hello")
    return (
      <div>
        <Post id="8xf0y6ziyjabvozdd253nd" />
        <NewComment pid="8xf0y6ziyjabvozdd253nd" />
      </div>
    )
  }
}

export default connect()(Details)
