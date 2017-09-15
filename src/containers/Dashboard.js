import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import TabList from './TabList'
import { connect } from 'react-redux'

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
      tabSelected: state.tabSelected
  }
}

export default connect(mapStateToProps)(Dashboard)