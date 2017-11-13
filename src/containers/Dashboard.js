import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Entries from './Entries'
import ProcessGuide from './ProcessGuide'
import { Layout } from 'antd'
import { withRouter } from 'react-router'
const { Header, Content } = Layout

class Dashboard extends Component { 
  render(){
    return (
        <Layout>
          <Layout style={{background: 'white'}}>
            <Header style={{background: 'white', margin: 'auto'}}>
              <h1>{this.props.tabSelected}</h1>
            </Header>
          </Layout>
          <Layout style={{background: 'white'}}>
            <Content style={{ margin: 'auto'}}>
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

function mapStateToProps(state) {
  return {
      contentDisplayed: state.contentDisplayed,
      tabSelected: state.tabSelected
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard))