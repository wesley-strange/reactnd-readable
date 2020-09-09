import React, { Component } from 'react'
// import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import '../styles/Nav.css'

class Nav extends Component {
  render() {
    const { categories } = this.props

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
        <select name='categories' id='categories'>
          {categories.map((category) => (
            <option value={category.name}>{category.name}</option>
          ))}
        </select>
      </nav>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories: Object.values(categories)
  }
}

export default connect(mapStateToProps)(Nav)
