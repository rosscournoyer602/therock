import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getEntries from '../actions/getEntries'
import EntryCard from '../components/EntryCard'

class Dashboard extends Component {
  render(){
    const entries = this.props.contentDisplayed.map((item) => {
      return (
        <li key={item.title}>
          <EntryCard title={item.title} purpose={item.purpose} />
        </li>
      )
    })
    return (
        <div>
          <h1>{this.props.tabSelected}</h1>
          <ul>
            {entries}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      tabSelected: state.tabSelected,
      contentDisplayed: state.contentDisplayed
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { getEntries }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)