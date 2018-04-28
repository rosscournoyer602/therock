import React, { Component } from 'react'
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import Searchbar from '../containers/Searchbar'
import style from './style.css'
import Flexbox from 'flexbox-react'

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
      lineHeight: '64px',
      width: '100%'
    }
    return (
      <Flexbox 
        className="header" 
        flexDirection="row"
        justifyContent="space-between">
        <div> 
          <Link to="/"><img width="220px" src={require("../therock.png")} alt="" /></Link>
        </div>
        <div>
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
        </div>
        <div>
          <Searchbar />
        </div>
      </Flexbox>
    )
  }
}