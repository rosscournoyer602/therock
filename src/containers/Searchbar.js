import React, { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import searchEntries from '../actions/searchEntries'
const Search = Input.Search;

class Searchbar extends Component {
    render() {
        const style = {
            margin: 'auto 24px auto 32px'
        }
        return (
          <div style={style}>
            <Search onSearch={(value) => this.props.searchEntries(value)}/>
          </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { searchEntries }, dispatch)
}
  
  export default connect(null, mapDispatchToProps)(Searchbar)