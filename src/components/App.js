import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import '../styles/App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

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
        <h1>App Component</h1>
      </div>
    )
  }
}

export default connect()(App)
