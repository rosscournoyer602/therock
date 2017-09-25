import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>The Rock</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Create New Knowledge</NavItem>
          <NavItem eventKey={2} href="#">How to Use The Rock</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
        </Nav>
      </Navbar>
    )
  }
}