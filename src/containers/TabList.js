import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectTab from '../actions/selectTab'
import getEntries from '../actions/getEntries'
import clearEntries from '../actions/clearEntries'
import clearDisplay from '../actions/clearDisplay'
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd'
import 'antd/dist/antd.css'
const SubMenu = Menu.SubMenu

//Renders side Menu and the list of teams
class TabList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: []
    }
    this.tabItems = Object.values(props.tabs).map((tab) => {
      return (
        <SubMenu
          key={tab} 
          onTitleClick={() => this.props.selectTab(tab)}
          title={tab}>
            <Menu.Item key={tab + '1'}><Link to="/entries">Process Guides</Link></Menu.Item>
            <Menu.Item key={tab + '2'}><Link to="/entries">Walkthroughs</Link></Menu.Item>
        </SubMenu>

      )
    })
    this.rootTabItems = Object.values(props.tabs)
  }

    onOpenChange = (openKeys) => {
      this.props.clearDisplay()
      this.props.clearEntries()
      this.props.history.push('/')

      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
      this.setState(
        {openKeys: latestOpenKey ? [latestOpenKey] : []}
      )
    }
    render() {
      return (
        <Menu 
          mode="inline" 
          theme="dark"
          style ={{height: '100%'}}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onClick={(key) => this.props.getEntries(this.props.tabSelected, key)}>
          { this.tabItems }
        </Menu>
      )
    }
}

function mapStateToProps(state) {
  return { tabs: state.tabs, tabSelected: state.tabSelected}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectTab, getEntries, clearDisplay, clearEntries }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TabList))