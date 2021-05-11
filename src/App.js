import './App.css';

import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <Search />
        <List />
      </div>
    )
  }
}

