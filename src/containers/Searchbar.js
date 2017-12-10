import React, { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import searchEntries from '../actions/searchEntries'
const Search = Input.Search

class Searchbar extends Component {

    searchAndReset(value) {
        this.props.searchEntries(value)
        this.props.history.push(`/search/${value}`)
    }
    
    render() {
        const style = {
            margin: 'auto 24px auto 32px'
        }
        return (
          <div style={style}>
            <Search onSearch={(value) => this.searchAndReset(value)}/>
          </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { searchEntries }, dispatch)
}
  
export default withRouter(connect(null, mapDispatchToProps)(Searchbar))