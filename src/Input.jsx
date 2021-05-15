import React, { Component } from 'react'
import './Input.css'
const Input = ({ name, onChange, label, value, type, errorMessage }) => {
  return (
    <div className="Input_box">
      <label for={name} className="Input_label">
        {label}
      </label>
      <div className="Input_main">
        <input
          type={type}
          value={value}
          id={name}
          onChange={onChange}
          className="Input_input"
        />
      </div>
      {errorMessage !== '' && <div className="Input_error">{errorMessage}</div>}
    </div>
  )
}

export default Input
