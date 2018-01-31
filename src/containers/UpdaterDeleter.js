import React, { Component } from 'react'
import deleteEntry from '../actions/deleteEntry'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { Button } from 'antd'

class UpdaterDeleter extends Component {
  render() {
    return (
      <div>
        {/* <Button>Update</Button> */}
        <Link to=""><Button  onClick= {() => this.props.deleteEntry(this.props.contentDisplayed.id)}>Delete</Button></Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { contentDisplayed: state.contentDisplayed }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { deleteEntry }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdaterDeleter)