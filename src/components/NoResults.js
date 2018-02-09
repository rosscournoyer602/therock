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
        setTimeout(() => { this.setState({displayText: 'No Results Found. Returning to Main Page.'}) }, 10000);
        setTimeout(() => { this.props.history.push('/') }, 15000);
    }
    render() {
      let redirect
      if (this.state.redirect === true) {
        redirect = <Redirect to="/" />
      }
      return (
          <span>
            <Spin />
            <p className="processFieldText">{this.state.displayText}</p>
            <div>{redirect}</div>
          </span>
      )
    }
  }
  
  export default withRouter(NoResults)

