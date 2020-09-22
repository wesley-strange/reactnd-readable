import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Nav.css'

class Nav extends Component {
  state = {
    category: '',
  }

  handleChange = (e) => {
    const value = e.target.value

    this.setState(() => ({
      category: value
    }))

    this.props.history.push(`/${value}`);
  }

  resetDropdown = (e) => {
    this.setState(() => ({
      category: ''
    }))
  }

  render() {
    const { category } = this.state
    const { categories } = this.props

    return (
      <nav className='nav'>
        <div className='nav-left'>
          <NavLink to='/' exact activeClassName='active' onClick={this.resetDropdown}>
              Readable
          </NavLink>
          <NavLink to='/' exact activeClassName='active' onClick={this.resetDropdown}>
              Home
          </NavLink>
          <NavLink  to='/post/post/new' exact activeClassName='active' onClick={this.resetDropdown}>
              New Post
          </NavLink>
        </div>
        <div className='nav-right'>
          <p className='text-label'>Category</p>
          <select className='pad' name='categories' id='categories' value={category} onChange={this.handleChange}>
            <option value="" disabled>Select...</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories: Object.values(categories)
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
