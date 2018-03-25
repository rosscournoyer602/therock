import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Redirect } from 'react-router-dom'
import App from '../components/App'
import NoResults from '../components/NoResults'
import Landing from '../components/Landing'
import Entries from '../containers/Entries'
import ProcessGuide from '../components/ProcessGuide'
import Walkthrough from '../components/Walkthrough'
import ToggleCreate from '../components/ToggleCreate'
import getEntries from '../actions/getEntries'
import getEntry from '../actions/getEntry'
import Login from '../containers/Login'
import About from '../components/about'
import { Layout, Spin } from 'antd'
import style from './style.css'
const { Content } = Layout

//Generic display port for all data
class Dashboard extends Component {

  componentDidMount() {
    if (this.props.location.pathname.indexOf('/entries/') !== -1) {
      console.log('ENTRIES')
      let tab = this.props.location.pathname.split('/')[2]
      let key
      this.props.location.pathname.split('/')[3] == 'process' ? key = 1 : key = 2
      this.props.getEntries(tab, key)

    }
    if (this.props.location.pathname.indexOf('/entry/') !== -1) {
      console.log('ENTRY')
      let entryID = this.props.location.pathname.split('/')[3]
      let contentType = this.props.location.pathname.split('/')[2]
      this.props.getEntry(entryID, contentType)
    }
  }

  render(){
    return (
      this.props.authStatus === false ? <Login /> :
      <Layout style={style}>
        <Content style = {{ backgroundColor: "white " }}>
          <Switch>
            <Route path="/search/" render={() => this.props.entriesDisplayed.length > 0 ? <Entries />: <NoResults />} />
            <Route path="/entries/:team" render={() => this.props.entriesDisplayed.length > 0 ? <Entries />: <NoResults />} />
            <Route 
              path="/entry/process/" 
              render={() => Object.values(this.props.contentDisplayed).length > 0 ? <ProcessGuide
                title={this.props.contentDisplayed.title}
                purpose={this.props.contentDisplayed.purpose}
                responsibleIndividuals={this.props.contentDisplayed.responsibleIndividuals}
                completionDescription={this.props.contentDisplayed.completionDescription}
                measures={this.props.contentDisplayed.measuresOfSuccess}
                team={this.props.contentDisplayed.team}
                relevantDocuments={this.props.contentDisplayed.relevantDocuments}/> : <NoResults />}>
              {/* Need to render the rest of the fields here */}
            </Route>
            {/* { this.props.contentDisplayed === {} ? <Spin />: null } */}
            <Route 
              path="/entry/walkthrough/" 
              render={() => Object.values(this.props.contentDisplayed).length > 0 ? <Walkthrough
              title={this.props.contentDisplayed.title}
              description={this.props.contentDisplayed.description}
              video={this.props.contentDisplayed.video}/>: <NoResults />}>
              {/* Need to render the rest of the fields here */}
            </Route>
            <Route path="/about" component={About} />
            <Route path="/add" component={ToggleCreate} />
            <Route path="/" component={Landing} />
          </Switch>
        </Content>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
      entriesDisplayed: state.entriesDisplayed,
      contentDisplayed: state.contentDisplayed,
      authStatus: state.authStatus
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { getEntries, getEntry }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))