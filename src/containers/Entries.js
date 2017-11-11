import React, { Component } from 'react'
import { connect } from 'react-redux'
import EntryCard from '../components/EntryCard'
import style from './style.css'

class Entries extends Component {
  render(){
    const entries = this.props.contentDisplayed.map((item) => {
      return (
        <li style={style} key={item.title} onClick={() => this.props.getEntry(item.id)}>
          <EntryCard title={item.title} purpose={item.purpose} />
        </li>
      )
    })
    return (
      <ul>
        {entries}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
      contentDisplayed: state.contentDisplayed,
  }
}

export default connect(mapStateToProps)(Entries)