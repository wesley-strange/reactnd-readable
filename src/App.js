import React, { Component } from 'react';
import * as ReadableAPI from './utils/ReadableAPI'
import './App.css';

class App extends Component {
  state = {
    categories: []
  }

  updateCategories = () => {
    ReadableAPI.getPosts()
      .then((categories) => {
        console.log(categories)
        this.setState(() => ({
          categories: Object.keys(categories)
        }))
      })
  }

  componentDidMount() {
    this.updateCategories()
  }

  render () {
    const { categories } = this.state

    return (
      <div className="App">
        <h1>App Component</h1>
        {categories.map((category) => (
          <h2>{category}</h2>
        ))}
      </div>
    )
  }
}

export default App;
