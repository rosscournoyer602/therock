import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getEntry from '../actions/getEntry'
import Entries from './Entries'
import { Layout } from 'antd'
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
                <Route path="/entries" component={Entries} />>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { getEntry }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)