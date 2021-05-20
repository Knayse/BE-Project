import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from './components/atoms/Button'
import './navbar.css'
import Store from './Store'
class Navbar extends Component {
  state = {
    prev: this.props.prev,
    store: Store.getState(),
  }
  handleLogout = (e) => {
    console.log('logout')
    Store.dispatch({
      type: 'login',
      payload: {
        isLogin: false,
      },
    })
    console.log(Store.getState())
  }
  render() {
    console.log(this.state.store)
    return (
      <div className="NavBar">
        {this.state.prev !== 'Home' && this.state.prev !== 'Register' && (
          <Link to="/Home" className="btnhome">
            Home
          </Link>
        )}
        {this.state.prev !== 'Dashboard' && this.state.prev !== 'Register' && (
          <Link to="/Dashboard" className="btnhome">
            Dashboard
          </Link>
        )}

        <Link to="/Sort-Visualizer" className="btnhome">
          Sorting Visualizer
        </Link>
        <Link to="/Tree-And-graph-Visualizer" className="btnhome">
          Graph and Tree
        </Link>
        {this.state.prev !== 'Test' && this.state.prev !== 'Register' && (
          <Link to="/Test" className="btnhome">
            Test
          </Link>
        )}
        {this.state.prev === 'Register' && (
          <Link to="/Register" className="btnhome">
            Register
          </Link>
        )}
        {this.state.store[this.state.store.length - 1].isLogin === true && (
          <Link to="/" onClick={this.handleLogout} className="btnlg">
            Logout
          </Link>
        )}

        {/* <Button className="btnhome" onClick={() => this.recommendation()}>
          Recommendation
        </Button> */}
      </div>
    )
  }
}

export default Navbar
