import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Nav.css'

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <NavLink to='/' exact activeClassName='active'>
            Readable
        </NavLink>
        <NavLink to='/' exact activeClassName='active'>
            Home
        </NavLink>
        <NavLink  to='/newpost' exact activeClassName='active'>
            New Post
        </NavLink>
      </nav>
    )
  }
}

export default connect()(Nav)
