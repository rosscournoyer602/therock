import { React, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ProcessGuide extends Component {
  render(){
    return (
      <div>
        <div className="processTitle">
          <h2>Title:</h2>
          <p>{props.fields.title}</p>
        </div>
        <div className="processPurpose">
          <h2>Purpose:</h2>
          <p>{props.fields.purpose}</p>
        </div>
        <div className="processResponsible">
          <h2>Handoffs:</h2>
          <p>{props.fields.handoffs}</p>
        </div>
        <div>
          Stuff
        </div>
      </div>
    )
  } 
}