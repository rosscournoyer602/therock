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
        this.props.history.push(`/search/`)
    }
    
    render() {
        return (
            <Search onSearch={(value) => this.searchAndReset(value)}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { searchEntries }, dispatch)
}
  
export default withRouter(connect(null, mapDispatchToProps)(Searchbar))