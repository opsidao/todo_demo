import React from 'react'

import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { userActions } from 'actions/user'

const style = () => ({
  title: {
    flex: 1,
  },
})

const LoggedInTopBar = ({ classes, userName, onLogoutClicked }) => (
  <React.Fragment>
    <Typography className={ classes.title } variant="title" color="inherit">
      Hello { userName }
    </Typography>
    <Button onClick={ onLogoutClicked }>Logout</Button>
  </React.Fragment>
)

const mapStateToProps = state => ({
  userName: state.user.userName,
})

const mapDispatchToProps = dispatch => ({
  onLogoutClicked: () => dispatch(userActions.logout()),
})

const styledComponent = withStyles(style)(LoggedInTopBar)

export default connect(mapStateToProps, mapDispatchToProps)(styledComponent)
