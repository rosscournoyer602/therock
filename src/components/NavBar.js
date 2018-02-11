import React, { Component } from 'react'
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import Searchbar from '../containers/Searchbar'
import style from './style.css'

//Top Navbar
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
      lineHeight: '64px'
    }
    return (
      <Row align="middle" justify="end">
        <Col span={10}>
          <div> 
            <Link to="/"><img height="47px" src={require("../logoWhite.png")} alt="" /></Link>
          </div>
        </Col>
        <Col span={8} push={4}>
          <Menu className="menuText" selectable={false} theme="dark" mode="horizontal" style={style}>
            <Menu.Item>
              <Link to="/add">
              Add Content
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