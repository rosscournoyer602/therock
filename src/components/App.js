import React, { Component } from 'react'
import TabList from '../containers/TabList'
import Dashboard from '../containers/Dashboard'
import Navbar from './NavBar'
import { Layout } from 'antd';
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'
const { Header, Content, Sider } = Layout
const history = createHistory()

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Layout style={{ "minHeight": "800px", height: "auto"}}>
          <Header className="Header" style={{padding:0}}>
            <Navbar/>
          </Header>
          <Layout>
            <Sider width={160} style={{ background: '#fff' }}>
              <TabList />
            </Sider>
            <Layout style={{ padding: '24px 24px 24px' }}>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <Dashboard />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App