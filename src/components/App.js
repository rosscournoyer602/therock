import React, { Component } from 'react'
import NavBar from './NavBar'
import Dashboard from './Dashboard'

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar fixedTop="true" fluid="true" />
        <Dashboard />
      </div>
    )
  }
}
