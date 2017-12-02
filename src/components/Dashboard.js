import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Entries from '../containers/Entries'
import ProcessGuide from '../containers/ProcessGuide'
import { Layout } from 'antd'
import tabSelected from '../reducers/tabSelected';
const { Header, Content } = Layout

class Dashboard extends Component { 
  render(){
    const style = {
      background: 'white'
    }
    return (
        <Layout>
          <Layout style={style}>
            <Content>
              <Switch>
                <Route path="/search/:entry" component={Entries} />
                <Route path="/entries" component={Entries} />
                <Route path="/entry" component={ProcessGuide} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
      tabSelected: state.tabSelected
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard))