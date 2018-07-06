import React from 'react'

import { connect } from 'react-redux'

import { userActions } from 'actions/user'

const Todos = ({ userName }) => (
  <div>Hello { userName }</div>
)

const mapStateToProps = state => ({
  userName: state.user.userName
})

export default connect(mapStateToProps)(Todos)
