import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getEntry from '../actions/getEntry'
import EntryCard from '../components/EntryCard'
import style from './style.css'
import { Layout } from 'antd'
const { Header, Content } = Layout

class Dashboard extends Component {
  
  render(){
    const entries = this.props.contentDisplayed.map((item) => {
      return (
        <li style={style} key={item.title} onClick={() => this.props.getEntry(item.id)}>
          <EntryCard title={item.title} purpose={item.purpose} />
        </li>
      )
    })
    return (
      <Layout>
        <Layout style={{background: 'white'}}>
          <Header style={{background: 'white', margin: 'auto'}}>
            <h1>{this.props.tabSelected}</h1>
          </Header>
        </Layout>
        <Layout style={{background: 'white'}}>
          <Content style={{ margin: 'auto'}}>
            <ul>
              {entries}
            </ul>
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