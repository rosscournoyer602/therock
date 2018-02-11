import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Spin } from 'antd'

const style = './style.css'

class NoResults extends Component {
    constructor(props){
        super(props)

        this.state = {
            displayText: '',
            redirect: false
        }
    }
    componentDidMount() {
        this.noResultTimeout = window.setTimeout(() => { this.setState({displayText: 'No Results Found. Returning to Main Page.'}) }, 10000);
        this.redirectTimeout = window.setTimeout(() => this.setState({ redirect: true }), 15000)
    }

    componentWillUnmount() {
        window.clearTimeout(this.redirectTimeout)
        window.clearTimeout(this.noResultTimeout)
    }

    render() {
      let redirect
      if (this.state.redirect === true) {
        redirect = <Redirect to="/" />
      }
      return (
          <span>
            <p className="processFieldText">Fetching Results...</p>
            <Spin />
            <p className="processFieldText">{this.state.displayText}</p>
            <div>{redirect}</div>
          </span>
      )
    }
  }
  
  export default withRouter(NoResults)

