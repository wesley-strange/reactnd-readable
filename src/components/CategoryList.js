import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class CategoryList extends Component {
  render () {
    const { categories } = this.props

    return (
      <select name='categories' id='categories'>
        {categories.map((category) => (
          <option value={category.name}>{category.name}</option>
        ))}
      </select>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories: Object.values(categories)
  }
}

export default connect(mapStateToProps)(CategoryList)
