import React, { Component } from 'react'
import Navbar from './navbar'
class Dashboard extends Component {
  state = {}
  render() {
    return (
      <div>
        <Navbar prev="Dashboard" />
      </div>
    )
  }
}

export default Dashboard
