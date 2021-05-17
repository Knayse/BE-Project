import React, { Component } from 'react'
import './Login.css'
import Store from './Store'
import Home from './Home'
import { loginAPI, registerAPI } from './apicalls'
import Navbar from './navbar'
import Alert_pop from './alert_pop'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      isLogin: false,
      errors: {},
      alertMessage: '',
    }
  }
  validateProperty = (input) => {
    if (input.name === 'userName') {
      if (input.value === '') return 'Username is required. '
    }
    if (input.name === 'password') {
      if (input.value === '') return 'password is required. '
    }
  }
  handleChange = (e) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(e.target)
    if (errorMessage) errors[e.target.name] = errorMessage
    else delete errors[e.target.name]
    this.setState({ [e.target.name]: e.target.value, errors })
  }
  validate = () => {
    const errors = {}
    if (this.state.userName.trim() == '')
      errors.userName = 'UserName is Required.'
    if (this.state.password.trim() == '')
      errors.password = 'password is Required.'
    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors })
    if (errors) return
    const response = await loginAPI(this.state.userName, this.state.password)
    console.log(response)
    if (response.status === 200) {
      Store.dispatch({
        type: 'login',
        payload: {
          data: response.data,
          isLogin: true,
        },
      })
      const details = Store.getState()
      console.log(details)
      this.setState({
        ...this.state,
        isLogin: true,
      })
    } else {
      this.setState({
        ...this.state,
        alertMessage: response.data,
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.isLogin === false && (
          <div className="container">
            <Navbar prev="Register" />
            {this.state.alertMessage !== '' && (
              <Alert_pop alertMessage={this.state.alertMessage} />
            )}
            <div className="main">
              <form className="form">
                UserName
                <input
                  className="inputbox"
                  type="text"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
                {this.state.errors && (
                  <div className="Login_error">
                    {this.state.errors.userName}
                  </div>
                )}
                Password
                <input
                  className="inputbox"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                {this.state.errors && (
                  <div className="Login_error">
                    {this.state.errors.password}
                  </div>
                )}
                <input
                  className="submit success"
                  type="submit"
                  onClick={this.handleSubmit}
                />
              </form>
            </div>
          </div>
        )}
        {this.state.isLogin === true && <Home prev="Home" />}
      </div>
    )
  }
}

export default Login

const obj = [
  {
    id: '1',
    description: 'How can we describe an array in the best possible way?',
    option: [
      'The Array shows a hierarchical structure.',
      'Arrays are immutable.',
      'Container that stores the elements of similar types',
      'The Array is not a data structure',
    ],
    answer: 'Container that stores the elements of similar types',
    tags: ['array', 'easy'],
    total_submission: 10,
    correct_submission: 5,
    //0 = easy , 1 = medium , 2 = hard
    difficulty: 0,
    link: 'Link here',
  },
]
