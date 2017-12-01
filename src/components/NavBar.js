import React, { Component } from 'react'
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import Searchbar from '../containers/Searchbar'

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedKeys: []
    }

  }

  render() {
    const style = {
      margin: 'auto',
      position: 'fixed',
      lineHeight: '64px'
    }
    return (
      <Row align="middle" justify="end">
        <Col span={14}>
          <div> 
            <Link to="/"><img src={require("../therock.png")} alt="" /></Link>
          </div>
        </Col>
        <Col span={4}>
          <Menu selectable={false} theme="dark" mode="horizontal" style={style}>
            <Menu.Item>
              <Link to="/add">
              Create
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about">
                About
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={6}>
          <Searchbar />
        </Col>
      </Row>
    )
  }
}