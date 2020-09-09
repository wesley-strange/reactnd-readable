import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Details extends Component {
  render () {
    console.log(this.props.id)
    return (
      <Post id="8xf0y6ziyjabvozdd253nd" />
      // <Post id={this.props.id} />
    )
  }
}

export default connect()(Details)
