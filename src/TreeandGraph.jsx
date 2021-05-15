import React, { Component } from 'react'
import Iframe from 'react-iframe'
class TreeandGraph extends Component {
  state = {}
  render() {
    return (
      <div style={{ height: '98vh' }}>
        <Iframe
          url="https://pensive-mcnulty-66107e.netlify.app/"
          width="98%"
          height="100%"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    )
  }
}

export default TreeandGraph
