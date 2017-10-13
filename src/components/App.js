import React, { Component } from 'react'
import NavBar from './NavBar'
import TabList from '../containers/TabList'
import { Row, Col } from 'antd'
import Dashboard from '../containers/Dashboard'

export default class App extends Component {

  render() {
    return (
      <div>
        <Row>
            <NavBar fixedTop="true" fluid="true" />
        </Row>
        <Row gutter={25}>
          <Col span={4}>
            <TabList />
          </Col>
          <Col span={18}>
            <Dashboard />
          </Col>
        </Row>
      </div>
    )
  }
}
