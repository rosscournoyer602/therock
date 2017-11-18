import React, { Component } from 'react'
import { Menu, Form, Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import Searchbar from '../containers/Searchbar'

export default class Navbar extends Component {
  render() {
    return (
      <Row align="middle">
        <Col span={6}>
          <div> 
            <img src={require("../therock.png")}/>
          </div>
        </Col>
        <Col span={6} offset={6}>
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', align: "left" }}>
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
        <Col span={6} pull={2}>
          <Searchbar />
        </Col>
      </Row>
    )
  }
}