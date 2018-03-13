import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectTab from '../actions/selectTab'
import getEntries from '../actions/getEntries'
import clearEntries from '../actions/clearEntries'
import clearDisplay from '../actions/clearDisplay'
import getAllContent from '../actions/getAllContent'
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import style from './style.css'
const SubMenu = Menu.SubMenu

//Renders side Menu and the list of teams
class TabList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: []
    }
   
  }
  populateTabs() {
    let teamTotal = 0
    let processes = 0
    let walkthroughs = 0

    const tabItems = Object.values(this.props.tabs).map((tab, index) => {
      if(this.props.allContent.hasOwnProperty('processCount')) {
        teamTotal = this.props.allContent.processCount[index] + this.props.allContent.walkthroughCount[index]
        processes = this.props.allContent.processCount[index]
        walkthroughs = this.props.allContent.walkthroughCount[index]
      }
      const route = '/entries'
      return (
        <SubMenu
          key={tab} 
          onTitleClick={() => this.props.selectTab(tab)}
          title={tab + ' ' + '(' + teamTotal + ')'}>
            <Menu.Item key={tab + '1'}><Link to={route}>{'Process Guides' + ' ' + '(' + processes + ')'}</Link></Menu.Item>
            <Menu.Item key={tab + '2'}><Link to={route}>{'Walkthroughs' + ' ' +  '(' + walkthroughs + ')'}</Link></Menu.Item>
        </SubMenu>

      )
    })
    this.setState({tabItems: tabItems})
  }
  componentDidMount() {
    this.props.getAllContent(this.props.tabs)
    this.populateTabs()
  }
  componentWillReceiveProps(nextProps) {
    console.log('received props')
    this.populateTabs()
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
        className="menuText"
        mode="inline" 
        theme="dark"
        style ={{height: '100%'}}
        inlineIndent = "15"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        onClick={(key) => this.props.getEntries(this.props.tabSelected, key)}>
        { this.state.tabItems }
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabs, tabSelected: state.tabSelected, allContent: state.allContent}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectTab, getEntries, clearDisplay, clearEntries, getAllContent }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TabList))