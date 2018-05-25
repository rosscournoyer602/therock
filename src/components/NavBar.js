import React, { Component } from 'react'
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import Searchbar from '../containers/Searchbar'
import Flexbox from 'flexbox-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import unauthUser from '../actions/unauthUser';
//Top Navbar
class Navbar extends Component {
  signout = () => {
    this.props.unauthUser();
  }
  render() {
    const style = {
      margin: 'auto',
      lineHeight: '64px',
      width: '100%'
    }
    return (
      <div className="top-menu">
        <div className="row ">
          <div className="col-3">
            <Link className="brand-img" to="/"><img width="220px" src={require("../therock.png")} alt="" /></Link>
          </div>
          <div className="col-6">
            <Menu className="top-menu-nav menuText" selectable={false} theme="dark" mode="horizontal" style={style}>
              <Menu.Item className="top-nav-item">
                <Link to="/add">
                Add Content
                </Link>
              </Menu.Item>
              <Menu.Item className="top-nav-item">
                <Link to="/about">
                  About
                </Link>
                </Menu.Item>
              <Menu.Item className="top-nav-item" onClick={() => console.log('click')}>
                <button className="sign-out-btn"type="primary" onClick={this.signout}>Sign out</button>
              </Menu.Item>
            </Menu>
          </div>
          <div className="col-3">
            <Searchbar />
          </div>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return { tabs: state.tabs };
// }
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { unauthUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Navbar);