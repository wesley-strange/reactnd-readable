import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import '../styles/App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Details from './Details'

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render () {
    const { categories } = this.state

    return (
      <div className="App">
        <Details id="8xf0y6ziyjabvozdd253nd" />
      </div>
    )
  }
}

export default connect()(App)
