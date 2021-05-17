import React, { Component } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
const Alert_pop = ({ alertMessage }) => {
  // console.log(alertMessage)
  return (
    <div className="">
      <Alert severity="error">
        <AlertTitle>Login Failes!</AlertTitle>
        Check Deatils — <strong>{alertMessage}</strong>
      </Alert>
    </div>
  )
}

export default Alert_pop
