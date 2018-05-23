import React, { Component } from 'react';
import App from './App'
import Signin from './auth/signin';
import Signup from './auth/signup';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from '../style/style.css';
const { Header, Content } = Layout;

class Landing extends Component {

  render() {
    console.log(this.props.auth)
    return (
        this.props.auth ? <App /> :
        <Layout className="mainLayout" style={{ "minHeight": "800px", height: "auto"}}>
          <Header className="Header" style={{padding:0}}>
            <img width="220px" src={require("../therock.png")} alt="" />
          </Header>
          <Layout style={{ padding: '24px 24px 24px' }}>
            <Content className="entryContent">
              <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Signin} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.authStatus };
}
export default withRouter(connect(mapStateToProps)(Landing));