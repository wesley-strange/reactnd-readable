import React, { Component } from 'react'
import { connect } from 'react-redux'

class Category extends Component {
  render () {
    const { category } = this.props

    return (
      <option value={category.name}>{category.name}</option>
    )
  }
}

function mapStateToProps ({categories}, {name}) {
  return {
    category: categories[name]
  }
}

export default connect(mapStateToProps)(Category)
