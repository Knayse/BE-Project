import React, { Component } from 'react'

import './Home.css'
import Store from './Store'
// import * as RecommendationModule from './RecommendationModule'
import Navbar from './navbar'
class Home extends Component {
  // recommendation = () => {
  //   RecommendationModule.getRecommendation()
  // }

  render() {
    console.log(Store.getState())
    const testData = [
      { id: '1', title: '1', description: '1' },
      { id: '1', title: '2', description: '2' },
      { id: '1', title: '3', description: '3' },
      { id: '1', title: '4', description: '4' },
      { id: '1', title: '5', description: '5' },
      { id: '1', title: '6', description: '6' },
    ]
    return (
      <div className="">
        <Navbar prev="Home" />
        <div className="body">
          <div className="tilehome">
            {testData.map((topic, i) => (
              <div className="tiles">
                <div className="title">{topic.title}</div>
                <div className="description">{topic.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default Home
