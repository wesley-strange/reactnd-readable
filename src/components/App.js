import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../styles/App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Details from './Details'
import NewPost from './NewPost'
import Nav from './Nav'

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
      <Router>
        <div className='App'>
          <Nav />
          <div>
            <Route path='/' exact component={Dashboard} />
            <Route path='/details/:id' exact component={Details} />
            <Route path='/newpost' exact component={NewPost} />
          </div>
        </div>
      </Router>
    )
  }
}

export default connect()(App)
