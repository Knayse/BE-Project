import React, { Component } from 'react'

import './Home.css'
import Store from './Store'
// import * as RecommendationModule from './RecommendationModule'
import Navbar from './navbar'
import { getTheory } from './apicalls'
import TestPage from './TestPage'
import { gettagfromtopic } from './topictagpair'
class Home extends Component {
  // recommendation = () => {
  //   RecommendationModule.getRecommendation()
  // }
  constructor(props) {
    super(props)
    this.state = {
      Theory: [],
      isTheory: false,
      testTag: '',
    }
  }
  componentDidMount = async () => {
    const Theory = await getTheory()
    this.setState({
      ...this.state,
      Theory: Theory.data,
      isTheory: false,
      testTag: '',
    })
  }
  handleTest = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    const tag = gettagfromtopic.get(e.target.value)
    console.log(tag)
    this.setState({
      ...this.state,
      isTheory: true,
      testTag: tag,
    })
  }
  render() {
    // console.log(Store.getState())
    console.log(this.state)
    const testData = this.state.Theory
    return (
      <>
        {this.state.isTheory === false && (
          <div className="">
            <Navbar prev="Home" />
            <div className="body">
              <div className="tilehome">
                {testData.map((topic, i) => (
                  <div className="tiles">
                    <div className="title">{topic.topic}</div>
                    <div className="description">{topic.description}</div>
                    <div className="topiclink">
                      <a href={topic.link}>{topic.link}</a>
                    </div>
                    <div className="testbtn">
                      <button
                        className=""
                        value={topic.topic}
                        onClick={this.handleTest}
                      >
                        Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer"></div>
          </div>
        )}
        {this.state.isTheory === true && <TestPage tag={this.state.testTag} />}
      </>
    )
  }
}

export default Home
