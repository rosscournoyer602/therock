import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Entries from '../containers/Entries'
import ProcessGuide from '../components/ProcessGuide'
import { Layout } from 'antd'
const { Content } = Layout

//Generic display port for all data
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
                <Route 
                  path="/entry" 
                  render={() => <ProcessGuide title={this.props.contentDisplayed.title}/>}>
                  {/* Need to render the rest of the fields here */}
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
      entriesDisplayed: state.entriesDisplayed,
      contentDisplayed: state.contentDisplayed
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard))