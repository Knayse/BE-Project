import React, { Component, Form } from 'react'
import { Link } from 'react-router-dom'
import Button from './components/atoms/Button'
import './TestPage.css'
import Navbar from './navbar'
import Store from './Store'
import { getEndTest, getFirstQuestion, getNextQuestion } from './apicalls'
import { withRouter } from 'react-router-dom'
class TestPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scoreValue: 0,
      questionId: 0,
      solveCounter: 1,
      selectedAnswer: '',
      questionData: {},
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      isTestEnd: false,
      showResult: false,
    }
    this.handleEndTest = this.handleEndTest.bind(this)
  }
  componentDidMount = async () => {
    const email = Store.getState()[Store.getState().length - 1].userData.email
    // console.log(email)
    const question = await getFirstQuestion(email, 'array')
    console.log(question)
    this.setState({
      ...this.state,
      questionData: question.data,
      questionId: question.data.id,
      optionA: question.data.option[0],
      optionB: question.data.option[1],
      optionC: question.data.option[2],
      optionD: question.data.option[3],
    })
  }
  onChangeValue = (e) => {
    this.state.selectedAnswer = e.target.value
    console.log(this.state.selectedAnswer, 'selectedAnswer')
  }
  handleReturnHone = (e) => {
    console.log('Returning Home')
    this.props.history.push('/Home')
  }
  handleSubmit = async (e) => {
    if (this.state.selectedAnswer === '') return
    const email = Store.getState()[Store.getState().length - 1].userData.email
    const solveCounter = this.state.solveCounter + 1
    if (this.state.isTestEnd === false && this.state.solveCounter < 10) {
      if (this.state.selectedAnswer === this.state.questionData.answer) {
        const scoreValue = this.state.scoreValue + 4
        const nextQuestion = await getNextQuestion(
          email,
          this.state.questionId,
          1,
        )
        console.log(nextQuestion)
        this.setState({
          ...this.state,
          scoreValue: scoreValue,
          questionId: nextQuestion.data.id,
          solveCounter: solveCounter,
          questionData: nextQuestion.data,
          optionA: nextQuestion.data.option[0],
          optionB: nextQuestion.data.option[1],
          optionC: nextQuestion.data.option[2],
          optionD: nextQuestion.data.option[3],
        })
      } else {
        const nextQuestion = await getNextQuestion(
          email,
          this.state.questionId,
          0,
        )
        console.log(nextQuestion)
        this.setState({
          ...this.state,
          questionId: nextQuestion.data.id,
          solveCounter: solveCounter,
          questionData: nextQuestion.data,
          optionA: nextQuestion.data.option[0],
          optionB: nextQuestion.data.option[1],
          optionC: nextQuestion.data.option[2],
          optionD: nextQuestion.data.option[3],
        })
      }
    } else {
      if (this.state.selectedAnswer === this.state.questionData.answer) {
        const scoreValue = this.state.scoreValue + 4
        const response = await getEndTest(
          email,
          this.state.questionId,
          scoreValue,
          1,
        )
        this.setState({
          ...this.state,
          scoreValue: scoreValue,
          showResult: true,
        })
        console.log(response)
      } else {
        const scoreValue = this.state.scoreValue
        const response = await getEndTest(
          email,
          this.state.questionId,
          scoreValue,
          0,
        )
        this.setState({
          ...this.state,
          scoreValue: scoreValue,
          showResult: true,
        })
        console.log(response)
      }
    }
  }
  handleEndTest = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      isTestEnd: true,
    })
  }
  render() {
    // console.log(this.state)
    return (
      <div className="">
        <Navbar prev="Test" />
        {this.state.showResult === true && (
          <div className="resultpage">
            <div className="scorebox">
              <div className="score">{this.state.scoreValue}</div>
            </div>
            <div className="resulttest">
              {'Your Score in this Test is ' + this.state.scoreValue}
            </div>
            <Button className="returnhome" onClick={this.handleReturnHone}>
              Return Home
            </Button>
          </div>
        )}
        {this.state.showResult === false && (
          <div>
            <div className="top">
              <Button className="endtest" onClick={this.handleEndTest}>
                End Test
              </Button>
            </div>
            <div className="testbody">
              <div className="scorebox">
                <div className="score">{this.state.scoreValue}</div>
              </div>
              <div className="questionbody">
                <div className="question">
                  {this.state.solveCounter +
                    '. ' +
                    this.state.questionData.description}
                </div>
              </div>
              <div className="optionbody">
                <div onChange={this.onChangeValue}>
                  <div className="option">
                    <input
                      className="radio"
                      type="radio"
                      value={this.state.optionA}
                      name="A"
                    />
                    {this.state.optionA}
                  </div>

                  <div className="option">
                    <input
                      className="radio"
                      type="radio"
                      value={this.state.optionB}
                      name="A"
                    />
                    {this.state.optionB}
                  </div>
                  <div className="option">
                    <input
                      className="radio"
                      type="radio"
                      value={this.state.optionC}
                      name="A"
                    />
                    {this.state.optionC}
                  </div>
                  <div className="option">
                    <input
                      className="radio"
                      type="radio"
                      value={this.state.optionD}
                      name="A"
                    />
                    {this.state.optionD}
                  </div>
                </div>
              </div>
              <div className="submitsec">
                {this.state.isTestEnd && (
                  <div className="endalert">
                    Please Submit this Question , Your test will be submitted
                    automatically.
                  </div>
                )}
                <Button className="submitbtn" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="footer"></div>
      </div>
    )
  }
}

export default withRouter(TestPage)
