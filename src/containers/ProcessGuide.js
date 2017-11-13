import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ProcessGuide extends Component {
  render(){
    return (
      <div>
        <div className="processField">
          <h2 className="processFieldHeader">Title</h2>
          <p>Title</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Purpose</h2>
          <p>Purpose</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Responsible Individuals</h2>
          <p className="processText">Rse</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Handoffs</h2>
          <p className="processText">Handoffs</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Relevant Documents</h2>
          <p className="processText">Reevlsdgfl</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Completion Checklist</h2>
          <p className="processText">Completion</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Completion Description</h2>
          <p className="processText">Complet</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Measures of Success</h2>
          <p className="processText">MOS</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">FAQ</h2>
          <p className="processText">FAQ</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Team</h2>
          <p className="processText">Team</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      contentDisplayed: state.contentDisplayed
  }
}

export default connect(mapStateToProps)(ProcessGuide)