import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectTab from '../actions/selectTab'

class TabList extends Component {
  constructor(props) {
    super(props)

    this.tabItems = Object.values(props.tabs).map((tab) => {
      return <li 
              key={tab} 
              className="list-group-item"
              onClick={() => this.props.selectTab(tab)}>
              {tab}
             </li>
    })

  }

    render() {
      // {() => this.props.selectTab(tab)}
      return (
        <ul className="Col-md-3 list-group">
          { this.tabItems }
        </ul>
      )
    }
}

function mapStateToProps(state) {
  return { tabs: state.tabs }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectTab }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabList)