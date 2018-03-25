import React, { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import searchEntries from '../actions/searchEntries'
const Search = Input.Search

class Searchbar extends Component {

    componentDidMount() {
    if (this.props.location.pathname.indexOf('/search/') !== -1) {
            this.props.searchEntries(this.props.location.pathname.substring(8))
        }
        console.log(this.props)
        // if(this.props.entriesDisplayed.length === 0)
    }

    searchAndReset(value) {
        this.props.searchEntries(value)
        this.props.history.push(`/search/${value}`)
    }
    
    render() {
        return (
            <Search onSearch={(value) => this.searchAndReset(value)}/>
        )
    }
}
function mapStateToProps(state) {
    return {
        entriesDisplayed: state.entriesDisplayed
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { searchEntries }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Searchbar))