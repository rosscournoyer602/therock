import React, { Component } from 'react';
import TabList from './TabList';
import Dashboard from './Dashboard';
import { Route, withRouter } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Flexbox from 'flexbox-react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllContent from '../actions/getAllContent';
import unauthUser from '../actions/unauthUser';
// const style = './style.css';
const { Header, Content, Sider } = Layout;

class App extends Component {

  componentDidMount(){
    this.props.getAllContent(this.props.tabs);
  }

  render() {
    return (
      <Layout className="mainLayout" style={{ "minHeight": "800px", height: "auto"}}>
        <Header className="Header" style={{padding:0}}>
          <Navbar logout={this.props.unauthUser}/>
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
    );
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabs };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { getAllContent, unauthUser }, dispatch);
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));