import React, { Component } from 'react'
// import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import '../styles/Nav.css'
import CategoryList from './CategoryList'

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul className='nav-left'>
          <li>
              Home
          </li>
          <li>
              New Post
          </li>
        </ul>
        <CategoryList />
      </nav>
    )
  }
}

export default connect()(Nav)
