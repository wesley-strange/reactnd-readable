import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

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
    return (
      <div>
        <h4 className='center'>Sort by</h4>
        <select
          name='sortby'
          id='sortby'
          onChange={this.handleChange}
          value={this.state.sortBy}
        >
          <option value='Date'>Date</option>
          <option value='Score'>Score</option>
        </select>
        <PostList sortBy={this.state.sortBy} />
      </div>
    )
  }
}

export default connect()(Dashboard)
