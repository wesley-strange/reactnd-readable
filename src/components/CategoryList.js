import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Category from './Category'

class CategoryList extends Component {
  render () {
    const { categories } = this.props

    return (
      <select name='categories' id='categories'>
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