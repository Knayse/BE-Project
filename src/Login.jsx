import React, { Component } from 'react'
import './Login.css'
import { withRouter } from 'react-router-dom'
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
    // console.log(response)
    if (response.status === 200) {
      Store.dispatch({
        type: 'login',
        payload: {
          data: response.data,
          isLogin: true,
        },
      })

      const details = Store.getState()
      // console.log(details)
      this.props.history.push('/Home')
    } else {
      this.setState({
        ...this.state,
        alertMessage: response.data,
      })
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div>
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
                <div className="Login_error">{this.state.errors.userName}</div>
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
                <div className="Login_error">{this.state.errors.password}</div>
              )}
              <input
                className="submit success"
                type="submit"
                onClick={this.handleSubmit}
              />
            </form>
          </div>
        </div>
        )
      </div>
    )
  }
}

export default withRouter(Login)
