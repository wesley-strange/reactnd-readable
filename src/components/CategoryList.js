import React, { Component } from 'react'
import { connect } from 'react-redux'
import Category from './Category'

class CategoryList extends Component {
  render () {
    const { categories } = this.props

    return (
      <select name='categories' id='categories'>
        <option value="" disabled>Category...</option>
        {categories.map((category) => (
          <Category name={category.name} />
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
