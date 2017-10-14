import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getEntry from '../actions/getEntry'
import EntryCard from '../components/EntryCard'
import style from './style.css'

class Dashboard extends Component {
  render(){
    const entries = this.props.contentDisplayed.map((item) => {
      return (
        <li style={style} key={item.title} onClick={() => this.props.getEntry(item.id)}>
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
  return bindActionCreators( { getEntry }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)