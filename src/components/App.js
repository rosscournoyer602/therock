import React, { Component } from 'react'
import TabList from '../containers/TabList'
import Dashboard from '../containers/Dashboard'
import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

export default class App extends Component {

  render() {
    return (
      <Layout style={{ height: '800px' }}>
        <Header className="Header">
          <div className="Logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
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
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <TabList />
          </Sider>
          <Layout style={{ padding: '24px 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Dashboard />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
