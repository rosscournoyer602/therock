import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import TabList from './TabList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getEntries from '../actions/getEntries'

class Dashboard extends Component {
  render(){
    return (
        <div>
          <Grid>
            <Row>
              <Col md={3}>
                <TabList />
              </Col>
              <Col md={9}>
                <div>
                  <h1>{this.props.tabSelected}</h1>
                  <p>{JSON.stringify(this.props.contentDisplayed)}</p>
                  {/* Figure out how content will be displayed */}
                </div>
              </Col>
            </Row>
          </Grid>
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