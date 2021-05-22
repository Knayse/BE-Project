import React, { Component } from 'react'
import Navbar from './navbar'
import App from './graph-visualizer/App'
import Iframe from 'react-iframe'
class TreeandGraph extends Component {
  state = {}
  render() {
    return (
      <div>
        <App />
      </div>
    )
  }
}

export default TreeandGraph
