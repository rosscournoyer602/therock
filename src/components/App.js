import React, { Component } from 'react'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import tabs from '../tabs'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tabs: tabs,
      selectedTab: tabs.Community
    }

  }

  chooseTab(tabName) {
    this.setState({
      selectedTab: tabName
    })
  }

  render() {
    return (
      <div>
        <NavBar fixedTop="true" fluid="true" />
        <Dashboard 
          tabs={this.state.tabs} 
          openTab={this.state.selectedTab}
          chooseTab={this.chooseTab.bind(this)} />
      </div>
    )
  }
}
