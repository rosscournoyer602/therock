import React, { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import searchEntries from '../actions/searchEntries'
const Search = Input.Search;

class Searchbar extends Component {
    render() {
        return (
            <Search onSearch={value => this.props.searchEntries(value)}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { searchEntries }, dispatch)
}
  
  export default connect(null, mapDispatchToProps)(Searchbar)