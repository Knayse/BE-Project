import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import './Start.css'
import App from './App'
import Home from './Home'
import TreeandGraph from './TreeandGraph'
import Login from './Login'
import TestPage from './TestPage'
import Store from './Store'
import Dashboard from './Dashboard'
import Register from './Register'

class Start extends Component {
  render() {
    // Store.subscribe(() => {
    //   console.log('store changed!', Store.getState())
    // })
    // unsubscribe()

    // Store.dispatch({
    //   type: 'addQuestion',
    //   payload: {
    //     addQuestion: 10,
    //   },
    // })
    Store.dispatch({
      type: 'create-state',
    })
    //console.log(Store.getState())
    return (
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Sort-Visualizer">
          <App />
        </Route>
        <Route exact path="/Tree-And-graph-Visualizer">
          <TreeandGraph />
        </Route>
        <Route exact path="/Test">
          <TestPage />
        </Route>
      </Switch>
    )
  }
}

export default Start
