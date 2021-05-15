import React, { Component } from 'react'
import Input from './Input'
import Navbar from './navbar'
import './Register.css'
class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    errors: {},
  }
  validateProperty = (input) => {
    if (input.id === 'username') {
      if (input.value === '') return 'Username is required. '
    }
    if (input.id === 'password') {
      if (input.value === '') return 'Password is required. '
    }
    if (input.id === 'email') {
      if (input.value === '') return 'Email is required. '
    }
  }
  handleChange = (e) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(e.target)
    if (errorMessage !== '') errors[e.target.id] = errorMessage
    else delete errors[e.target.id]
    this.setState({ [e.target.id]: e.target.value, errors })
  }
  validate = () => {
    const errors = {}
    if (this.state.username.trim() == '')
      errors.username = 'Username is required'
    if (this.state.password.trim() == '')
      errors.password = 'password is required'
    if (this.state.email.trim() == '') errors.email = 'email is required'
    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return
  }
  render() {
    console.log(this.state.errors)
    return (
      <div>
        <Navbar prev="Register" />
        <form className="Register_box">
          <Input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            label="username"
            type="text"
            errorMessage={this.state.errors.username}
          />
          <Input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            type="password"
            errorMessage={this.state.errors.password}
          />
          <Input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            type="email"
            errorMessage={this.state.errors.email}
          />
          <button
            type="button"
            className="Register_submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Register
