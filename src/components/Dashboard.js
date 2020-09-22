import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'
import '../styles/Dashboard.css'

class Dashboard extends Component {
  state = {
    sortBy: 'Date'
  }

  handleChange = (e) => {
    const value = e.target.value

    this.setState(() => ({
      sortBy: value
    }))
  }

  render () {
    const { category } = this.props

    return (
      <div className='dashboard'>
        <div className='sortby'>
          <h4>Sort by</h4>
          <select
            name='sortby'
            id='sortby'
            onChange={this.handleChange}
            value={this.state.sortBy}
          >
            <option value='Date'>Date</option>
            <option value='Score'>Score</option>
          </select>
        </div>
        <PostList sortBy={this.state.sortBy} category={category}/>
      </div>
    )
  }
}

function mapStateToProps ({posts}, props) {
  const { category } = props.match.params

  return {
    category
  }
}

export default connect(mapStateToProps)(Dashboard)
