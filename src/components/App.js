import React, { Component } from 'react'
import TabList from '../containers/TabList'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import Searchbar from '../containers/Searchbar'
import { Layout, Input } from 'antd';
const { Header, Content, Sider } = Layout;

export default class App extends Component {

  render() {
    return (
      <Layout style={{ height: '800px' }}>
        <Header className="Header" style={{padding:0}}>
          <Navbar/>
        </Header>
        <Layout>
          <Sider width={224} style={{ background: '#fff' }}>
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
