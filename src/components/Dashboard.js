import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h3 className='center'>Dashboard</h3>
        <ul className='dashboard-list'>
          {this.props.posts.map((post) => (
            <li key={post.id}>
              <div>POST ID: {post.id}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({posts}) {
  return {
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps)(Dashboard)
