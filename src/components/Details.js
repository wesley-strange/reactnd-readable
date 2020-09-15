import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import NewComment from './NewComment'
import CommentList from './CommentList'
import '../styles/Details.css';

class Details extends Component {
  render () {
    const { id } = this.props

    return (
      <div className='details'>
        <Post id={id} />
        <NewComment pid={id} />
        <CommentList pid={id} />
      </div>
    )
  }
}

function mapStateToProps ({posts}, props) {
  const { id } = props.match.params

  return {
    id
  }
}

export default connect(mapStateToProps)(Details)
