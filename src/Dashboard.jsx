import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ScoreIcon from '@material-ui/icons/Score'
import Navbar from './navbar'
import './Dashboard.css'
import Footer from './Footer'
import ApexChart from './ApexChart'
import Store from './Store'
import { topics, pair } from './topictagpair'
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: '',
      tagsArray: [],
      totalQuestions: [],
      correctSolved: [],
    }
  }
  componentDidMount() {
    const userData = Store.getState()[Store.getState().length - 1].userData
    const data = userData.performance.tag_count
    console.log(data)
    const len = topics.length
    const totalQuestions = new Array(len).fill(0)
    const correctSolved = new Array(len).fill(0)
    for (const tag in data) {
      const index = topics.indexOf(pair.get(tag))
      console.log(data[tag])
      if (index !== -1) {
        totalQuestions[index] += parseInt(data[tag].questions)
        correctSolved[index] += parseInt(data[tag].correct)
      }
    }
    console.log(topics)
    console.log(totalQuestions)
    console.log(correctSolved)
    this.setState({
      ...this.state,
      userData: userData,
      tagsArray: topics,
      totalQuestions: totalQuestions,
      correctSolved: correctSolved,
    })
  }
  render() {
    const { name, email, college } = this.state.userData
    return (
      <div>
        <Navbar prev="Dashboard" />
        <div className="container-fluid">
          <div className="Dashboard_left_block">
            <div className="Dashboard_left_block_heading">
              <AccountCircleIcon color="primary" />
              {'Personal Details'}
            </div>
            <div className="Dashboard_personal_details">
              {'Name :  ' + name}
            </div>
            <div className="Dashboard_personal_details">
              {'Email :  ' + email}
            </div>
            <div className="Dashboard_personal_details">
              {'College :  ' + college}
            </div>
          </div>
          <div className="Dashboard_right_block">
            <div className="Dashboard_right_block_heading">
              <ScoreIcon fontSize="medium" color="primary" />
              {'Performance Analysis'}
            </div>
            <ApexChart
              tagsArray={this.state.tagsArray}
              totalQuestions={this.state.totalQuestions}
              correctSolved={this.state.correctSolved}
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Dashboard
