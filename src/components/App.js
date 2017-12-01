import React, { Component } from 'react'
import TabList from '../containers/TabList'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

class App extends Component {

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

export default withRouter(App)