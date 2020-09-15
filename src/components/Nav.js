import React, { Component } from 'react'
// import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Nav.css'
import CategoryList from './CategoryList'

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <div>
            Readable
        </div>
        <div>
            Home
        </div>
        <div>
            New Post
        </div>
      </nav>
    )
  }
}

export default connect()(Nav)
