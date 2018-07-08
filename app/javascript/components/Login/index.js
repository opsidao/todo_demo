import React from 'react'

import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

import { userActions } from 'actions/user'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    flex: 1,
    margin: '1rem',
  },
  paper: {
    margin: '1rem',
  }
}

const Login = ({ classes, onLoginSubmit }) =>
  <Paper className={ classes.paper }>
    <form className={ classes.container } onSubmit={ onLoginSubmit }>
      <TextField
        id="userName"
        label="userName"
        className={ classes.textField }
      />
      <Button variant="contained" color="primary" type="submit" id={ 'loginButton' }>
        Login
      </Button>
    </form>
  </Paper>

const mapPropsToDispatch = dispatch => ({
  onLoginSubmit: event => {
    event.preventDefault()

    const form = event.currentTarget
    const userName = form.elements.namedItem('userName').value

    dispatch(userActions.login(userName))
  },
})

const styledComponent = withStyles(styles)(Login)

export default connect(null, mapPropsToDispatch)(styledComponent)
