import React, { Component } from 'react'
import './Login.css'
import Store from './Store'
import Home from './Home'
import { loginAPI, registerAPI } from './apicalls'
import Navbar from './navbar'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { userName: '', password: '', isLogin: false, errors: {} }
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
  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors })
    if (errors) return
    const response = loginAPI(this.state.userName, this.state.password)
    // const response = registerAPI()
    const details = Store.getState()
    if (
      this.state.userName === details[0].userData.userName &&
      this.state.password === details[0].userData.password
    ) {
      Store.dispatch({
        type: 'login',
        payload: {
          isLogin: true,
        },
      })
      this.setState({
        ...this.state,
        isLogin: true,
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.isLogin === false && (
          <div className="container">
            <Navbar prev="Register" />
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
