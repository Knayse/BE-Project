import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ScoreIcon from '@material-ui/icons/Score'
import Navbar from './navbar'
import './Dashboard.css'
import Footer from './Footer'
import ApexChart from './ApexChart'
import Store from './Store'
import { topics, pair } from './topictagpair'
import QuestionAttemptedAnalysis from './QuestionAttemptedAnalysis'
import ScoreAnalysis from './ScoreAnalysis'
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: '',
      tagsArray: [],
      totalQuestions: [],
      correctSolved: [],
      activeButton: 'Topicwise Performance',
      scoreArray: [],
      timelineArray: [],
      topicProficiency: [],
    }
  }
  componentDidMount() {
    const userData = Store.getState()[Store.getState().length - 1].userData
    const data = userData.performance.tag_count
    // console.log(userData)
    const len = topics.length
    const totalQuestions = new Array(len).fill(0)
    const correctSolved = new Array(len).fill(0)
    for (const tag in data) {
      const index = topics.indexOf(pair.get(tag))
      // console.log(data[tag])
      if (index !== -1) {
        totalQuestions[index] += parseInt(data[tag].questions)
        correctSolved[index] += parseInt(data[tag].correct)
      }
    }
    const quizData = userData.performance.quiz_detail
    // console.log(quizData)
    const scoreArray = []
    const timelineArray = []
    for (let i = 0; i < quizData.length; i++) {
      scoreArray[i] = quizData[i].score
      timelineArray[i] = quizData[i].date.substring(0, 10)
    }
    const topicProficiency = []
    for (let i = 0; i < topics.length; i++) {
      const div = correctSolved[i] / totalQuestions[i]
      console.log(correctSolved[i], totalQuestions[i], div)
      if (div === 0 || totalQuestions[i] === 0) {
        topicProficiency.push('You can try learning this Topic!')
      } else if (div <= 0.4) {
        topicProficiency.push('Low (Please focus on this topic more) ')
      } else if (div <= 0.7) {
        topicProficiency.push('Medium (need some improvement) ')
      } else {
        topicProficiency.push('High')
      }
    }
    console.log(topicProficiency)
    // console.log(scoreArray)
    // console.log(timelineArray)
    // console.log(topics)
    // console.log(totalQuestions)
    // console.log(correctSolved)
    this.setState({
      ...this.state,
      userData: userData,
      tagsArray: topics,
      totalQuestions: totalQuestions,
      correctSolved: correctSolved,
      scoreArray: scoreArray,
      timelineArray: timelineArray,
      topicProficiency: topicProficiency,
    })
  }
  handleAnalysis = (e) => {
    // e.preventDefault()
    // console.log(e.target.value)
    this.setState({
      ...this.state,
      activeButton: e.target.value,
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
            <div className="Dashboard_topic_profiency">
              <div className="Dashboard_topic_profiency_heading">
                Topic Profiency
              </div>
              {this.state.tagsArray.map((topic, i) => (
                <div className="Dashboard_topic_list">
                  {topic + ' : ' + this.state.topicProficiency[i]}
                </div>
              ))}
            </div>
          </div>
          <div className="Dashboard_right_block">
            <div className="Dashboard_right_block_heading">
              <ScoreIcon fontSize="medium" color="primary" />
              {'Performance Analysis'}
            </div>
            {this.state.activeButton === 'Topicwise Performance' && (
              <ApexChart
                tagsArray={this.state.tagsArray}
                totalQuestions={this.state.totalQuestions}
                correctSolved={this.state.correctSolved}
              />
            )}

            {this.state.activeButton === 'Questions Attempted' && (
              <QuestionAttemptedAnalysis
                tagsArray={this.state.tagsArray}
                totalQuestions={this.state.totalQuestions}
              />
            )}

            {this.state.activeButton === 'Correction Rate' && (
              <QuestionAttemptedAnalysis
                tagsArray={this.state.tagsArray}
                totalQuestions={this.state.correctSolved}
              />
            )}

            {this.state.activeButton === 'Quiz Scores' && (
              <ScoreAnalysis
                scoreArray={this.state.scoreArray}
                timelineArray={this.state.timelineArray}
              />
            )}
            <div className="Dashboard_analysis">
              <button
                className="Dashboard_analysis_btn"
                name="Topicwise Performance"
                value="Topicwise Performance"
                onClick={this.handleAnalysis}
              >
                Topicwise Performance
              </button>
              <button
                className="Dashboard_analysis_btn"
                name="Questions Attempted"
                value="Questions Attempted"
                onClick={this.handleAnalysis}
              >
                Questions Attempted
              </button>
              <button
                className="Dashboard_analysis_btn"
                name="Correction Rate"
                value="Correction Rate"
                onClick={this.handleAnalysis}
              >
                Correction Rate
              </button>
              <button
                className="Dashboard_analysis_btn"
                name="Quiz Scores"
                value="Quiz Scores"
                onClick={this.handleAnalysis}
              >
                Quiz Scores
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Dashboard
