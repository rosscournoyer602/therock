import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EntryCard from '../components/EntryCard'
import getEntry from '../actions/getEntry'
import style from './style.css'

//Generic list of EntryCard components, used to render entries by team or search results
class Entries extends Component {
  render(){
    const entries = this.props.entriesDisplayed.map((item) => {
      return (
        <li style={style} key={item.title} onClick={() => this.props.getEntry(item.id, item.type)}>
          <EntryCard 
            title={item.title} 
            description={item.description} 
            id={item.id}
            team={item.team} 
            type={item.type}/>
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
      entriesDisplayed: state.entriesDisplayed,
      tabSelected: state.tabSelected
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { getEntry }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries)