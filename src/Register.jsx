import React, { Component } from 'react'
import { registerAPI } from './apicalls'
import Input from './Input'
import Navbar from './navbar'
import './Register.css'
import Store from './Store'
import Alert_pop from './alert_pop'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
      college: '',
      errors: {},
      alertMessage: '',
    }
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
    if (input.id === 'name') {
      if (input.value === '') return 'Name is required. '
    }
    if (input.id === 'college') {
      if (input.value === '') return 'College is required. '
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
      errors.password = 'Password is required'
    if (this.state.email.trim() == '') errors.email = 'Email is required'
    if (this.state.name.trim() == '') errors.name = 'Name is required'
    if (this.state.college.trim() == '') errors.college = 'College is required'
    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return
    // console.log(this.state)
    const response = await registerAPI(
      this.state.name,
      this.state.username,
      this.state.password,
      this.state.email,
      this.state.college,
    )
    // console.log(response)
    if (response.status === 200) {
      this.props.history.push('/')
    } else {
      this.setState({
        ...this.state,
        alertMessage: response.data,
      })
    }
  }
  render() {
    // console.log(this.state.errors)
    return (
      <div>
        <Navbar prev="Register" />
        {this.state.alertMessage !== '' && (
          <Alert_pop alertMessage={this.state.alertMessage} />
        )}
        <form className="Register_box">
          <Input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            label="name"
            type="text"
            errorMessage={this.state.errors.name}
          />
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
          <Input
            name="college"
            value={this.state.college}
            onChange={this.handleChange}
            label="college"
            type="text"
            errorMessage={this.state.errors.college}
          />
          <button
            type="button"
            className="Register_submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Register)
