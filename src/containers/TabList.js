import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectTab from '../actions/selectTab'
import getEntries from '../actions/getEntries'
import clearDisplay from '../actions/clearDisplay'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
const SubMenu = Menu.SubMenu

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
                <Menu.Item key={tab + '1'}>Process Guides</Menu.Item>
                <Menu.Item key={tab + '2'}>Walkthroughs</Menu.Item>
            </SubMenu>
      )
    })
    this.rootTabItems = Object.values(props.tabs)
  }

    onOpenChange = (openKeys) => {
      this.props.clearDisplay()
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
          onClick={() => this.props.getEntries(this.props.tabSelected)}>
          { this.tabItems }
        </Menu>
      )
    }
}

function mapStateToProps(state) {
  return { tabs: state.tabs, tabSelected: state.tabSelected}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectTab, getEntries, clearDisplay }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabList)