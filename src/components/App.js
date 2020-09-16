import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Details from './Details'
import NewPost from './NewPost'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <div>
            <Route path='/' exact component={Dashboard} />
            <Route path='/:category' exact component={Dashboard} />
            <Route path='/:category/:id' exact component={Details} />
            <Route path='/post/post/new' exact component={NewPost} />
          </div>
        </div>
      </Router>
    )
  }
}

export default connect()(App)
