import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Entries from '../containers/Entries'
import ProcessGuide from '../components/ProcessGuide'
import Walkthrough from '../components/Walkthrough'
import ToggleCreate from '../components/ToggleCreate'
import { Layout, Spin } from 'antd'
import style from './style.css'
const { Content } = Layout

//Generic display port for all data
class Dashboard extends Component { 
  render(){
    return (
      <Layout style={style}>
        <Content>
          <Switch>
    <Route path="/search/:entry" render={() => this.props.entriesDisplayed.length > 0 ? <Entries />: <Spin />} />
            <Route path="/entries" component={Entries} />
            <Route 
              path="/entry/process/:entry" 
              render={() => Object.values(this.props.contentDisplayed).length > 0 ? <ProcessGuide 
                style = {style}
                title={this.props.contentDisplayed.title}
                purpose={this.props.contentDisplayed.purpose}
                responsibleIndividuals={this.props.contentDisplayed.responsibleIndividuals}
                completionDescription={this.props.contentDisplayed.completionDescription}
                measures={this.props.contentDisplayed.measuresOfSuccess}
                team={this.props.contentDisplayed.team}
                relevantDocuments={this.props.contentDisplayed.relevantDocuments}/> : <Spin />}>
              {/* Need to render the rest of the fields here */}
            </Route>
            {/* { this.props.contentDisplayed === {} ? <Spin />: null } */}
            <Route 
              path="/entry/walkthrough/:entry" 
              render={() => Object.values(this.props.contentDisplayed).length > 0 ? <Walkthrough 
              style = {style}
              title={this.props.contentDisplayed.title}
              video={this.props.contentDisplayed.video}/>: <Spin />}>
              {/* Need to render the rest of the fields here */}
            </Route>
            <Route path="/add" component={ToggleCreate} />
          </Switch>
        </Content>
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