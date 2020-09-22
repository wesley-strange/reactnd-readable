import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import NewComment from './NewComment'
import CommentList from './CommentList'
import NoMatchPage from './NoMatch'
import '../styles/Details.css';

class Details extends Component {
  render () {
    if (this.props.invalid) {
      return <NoMatchPage />
    } else {
      const { id } = this.props

      return (
        <div className='details'>
          <Post id={id} showLink={false} />
          <NewComment pid={id} />
          <CommentList pid={id} />
        </div>
      )
    }
  }
}

function mapStateToProps ({posts}, props) {
  const { id } = props.match.params
  let invalid = true

  if (posts[id] !== undefined) {
    invalid = false
  }

  return {
    id,
    invalid
  }
}

export default connect(mapStateToProps)(Details)
