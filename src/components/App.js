import React, { Component } from 'react'
import TabList from '../containers/TabList'
import Dashboard from '../containers/Dashboard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getAllContent from '../actions/getAllContent'
import { Route } from 'react-router-dom'
import Navbar from './NavBar'
import Flexbox from 'flexbox-react'
import { Layout } from 'antd'
import createHistory from 'history/createBrowserHistory'
const style = './style.css'
const { Header, Content, Sider } = Layout
const history = createHistory()

class App extends Component {

  componentDidMount() {
    this.props.getAllContent(this.props.tabs)
  }

  render() {
    return (
        <Layout className="mainLayout" style={{ "minHeight": "800px", height: "auto"}}>
          <Header className="Header" style={{padding:0}}>
            <Navbar/>
          </Header>
          <Layout>
            <Sider width={160} style={{ background: '#fff' }}>
              <TabList />
            </Sider>
            <Layout style={{ padding: '24px 24px 24px' }}>
              <Content className="entryContent">
                <Dashboard />
              </Content>
            </Layout>
          </Layout>
        </Layout>
    )
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabs, allContent: state.allContent}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { getAllContent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)