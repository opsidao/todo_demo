import React from 'react'

import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const TopBar = ({ userName }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Hello { userName }
      </Typography>
    </Toolbar>
  </AppBar>
)

const mapStateToProps = state => ({
  userName: state.user.userName,
})

export default connect(mapStateToProps)(TopBar)
