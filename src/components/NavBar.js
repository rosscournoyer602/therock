import React, { Component } from 'react'
import { Menu } from 'antd';
import 'antd/dist/antd.css'

export default class extends Component {
  render() {
    return (
      <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            The Rock
          </Menu.Item>
          <Menu.Item>
            Add New Knowledge
          </Menu.Item>
          <Menu.Item>
            About
          </Menu.Item>
      </Menu>
    )
  }
}