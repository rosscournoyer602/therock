import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Entries from '../containers/Entries'
import ProcessGuide from '../containers/ProcessGuide'
import { Layout } from 'antd'
const { Header, Content } = Layout

class Dashboard extends Component { 
  render(){
    const style = {
      background: 'white'
    }
    return (
        <Layout>
          <Layout style={style}>
            <Header style={style}>
              <h1>{this.props.tabSelected}</h1>
            </Header>
          </Layout>
          <Layout style={style}>
            <Content>
              <Switch>
                <Route path="/entry" component={ProcessGuide} />
                <Route path="/entries" component={Entries} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
    )
  }
}

export default Dashboard