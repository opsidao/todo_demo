import React from 'react'

import { Route } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


import LoggedInTopBar from './LoggedInTopBar'
import LoggedOutTopBar from './LoggedOutTopBar'

const TopBar = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Route path='/login' component={ LoggedOutTopBar } />
      <Route path='/todos' component={ LoggedInTopBar } />
    </Toolbar>
  </AppBar>
)

export default TopBar
