import React, { Component, Form } from 'react'
import { Link } from 'react-router-dom'
import Button from './components/atoms/Button'
import * as RecommendationModule from './RecommendationModule'
import './TestPage.css'
import Navbar from './navbar'
class TestPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scoreValue: 0,
      testData: RecommendationModule.testData,
      questionId: 1,
      solveCounter: 1,
      selectedAnswer: '',
      solvedQuestions: [],
      questionData: {},
      myArr: RecommendationModule.testData,
    }
    this.onChangeValue = this.onChangeValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state.questionData = this.state.testData.filter(
      (obj) => obj.id == this.state.questionId,
    )
    // console.log(this.state.questionData, 'questionData')
  }
  onChangeValue = (e) => {
    this.state.selectedAnswer = e.target.value
    // console.log(this.state.selectedAnswer, 'selectedAnswer')
  }
  handleSubmit = (e) => {
    this.state.solvedQuestions.push(this.state.questionId)
    // console.log(this.state.questionData, 'handleSubmit')
    // console.log(this.state.solvedQuestions, 'handleSubmit')
    this.state.myArr = this.state.myArr.filter(
      (obj) => obj.id != this.state.questionId.toString(),
    )
    console.log(
      this.state.selectedAnswer,
      this.state.questionData[0].answer,
      'Score',
    )
    if (this.state.selectedAnswer == this.state.questionData[0].answer) {
      this.state.scoreValue = 4 + this.state.scoreValue
    }
    console.log(this.state.scoreValue, 'ScoreValue')
    // console.log(this.state.myArr, 'myArr')
    //console.log(this.state.questionData[0])
    let id = RecommendationModule.getRecommendation(
      this.state.questionData[0].tags,
      this.state.myArr,
    )
    this.state.questionData[0] = this.state.testData[id - 1]
    // console.log(this.state.questionData[0], 'questionData')
    // console.log(id, 'id')
    this.setState({
      scoreValue: this.state.scoreValue,
      testData: RecommendationModule.testData,
      questionId: id,
      solveCounter: this.state.solveCounter + 1,
      selectedAnswer: '',
      myArr: this.state.myArr,
    })
  }
  render() {
    // this.state.testData = RecommendationModule.testData
    // console.log(this.state.questionData, 'questionData')
    // console.log(this.state.scoreValue, 'score')
    // console.log(this.state.questionId, 'questionId')
    // console.log(this.state.solveCounter, 'solveCounter')
    // console.log(this.state.solvedQuestions, 'solvedQuestions')
    return (
      <div className="">
        <Navbar prev="Test" />
        {/* <div className="NavBar">
          <Link to="/Sort-Visualizer" className="btnhome">
            Dashboard
          </Link>
          <Link to="/Sort-Visualizer" className="btnhome">
            Sorting Visualizer
          </Link>
          <Link to="/Tree-And-graph-Visualizer" className="btnhome">
            Graph and Tree
          </Link>
        </div> */}
        <div className="testbody">
          <div className="scorebox">
            <div className="score">{this.state.scoreValue}</div>
          </div>
          <div className="questionbody">
            <div className="question">
              {this.state.solveCounter +
                '. ' +
                this.state.testData[this.state.questionId - 1].problem}
            </div>
          </div>
          <div className="optionbody">
            <div onChange={this.onChangeValue}>
              <div className="option">
                <input
                  className="radio"
                  type="radio"
                  value={
                    this.state.testData[this.state.questionId - 1].option[0]
                  }
                  name="A"
                />
                {'     ' +
                  this.state.testData[this.state.questionId - 1].option[0]}
              </div>

              <div className="option">
                <input
                  className="radio"
                  type="radio"
                  value={
                    this.state.testData[this.state.questionId - 1].option[1]
                  }
                  name="A"
                />
                {'     ' +
                  this.state.testData[this.state.questionId - 1].option[1]}
              </div>
              <div className="option">
                <input
                  className="radio"
                  type="radio"
                  value={
                    this.state.testData[this.state.questionId - 1].option[2]
                  }
                  name="A"
                />
                {'     ' +
                  this.state.testData[this.state.questionId - 1].option[2]}
              </div>
              <div className="option">
                <input
                  className="radio"
                  type="radio"
                  value={
                    this.state.testData[this.state.questionId - 1].option[3]
                  }
                  name="A"
                />
                {'     ' +
                  this.state.testData[this.state.questionId - 1].option[3]}
              </div>
            </div>
          </div>
          <div className="submitsec">
            <Button className="submitbtn" onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default TestPage
