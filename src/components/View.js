import React, { Component } from 'react'

export default class View extends Component {
    constructor(props) {
        super(props)

        this.state = ''
    }

    render() {
        return (
            <div>
                <h1>{ this.props.children }</h1>
            </div>
        )
    }
}