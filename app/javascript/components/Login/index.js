import React from 'react'

import { connect } from 'react-redux'

import { login } from 'actions/user'

const Login = ({ onLoginSubmit }) =>
  <form onSubmit={ onLoginSubmit }>
    <label htmlFor="userName">
      Choose a username:
    </label>
    <input type="text" id="userName" />
    <input type="submit" id={ 'loginButton' } value="Login" />
  </form>

const mapPropsToDispatch = dispatch => ({
  onLoginSubmit: event => {
    event.preventDefault()

    const form = event.currentTarget
    const userName = form.elements.namedItem('userName').value

    dispatch(login(userName))
  },
})

export default connect(null, mapPropsToDispatch)(Login)
