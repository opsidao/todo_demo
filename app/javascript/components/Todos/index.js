import React from 'react'

import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core'

import Grow from '@material-ui/core/Grow'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Paper from '@material-ui/core/Paper'

import { todoActions } from 'actions/todos'

import TodoList from './TodoList'

const styles = {
  extraPadding: {
    padding: '1rem',
  },
  centeredWithPadding: {
    textAlign: 'center',
    padding: '1rem',
  },
}

const Todos = ({ classes }) => (
  <FormControl className={ classes.extraPadding } fullWidth>
    <FormLabel className={ classes.centeredWithPadding }component="legend">Pending</FormLabel>
    <FormGroup id='pending'>
      <TodoList todoStatus="pending" emptyText="Nothing left to do!"/>
    </FormGroup>
    <FormLabel className={ classes.centeredWithPadding } component="legend">Completed</FormLabel>
    <FormGroup id='completed'>
      <TodoList todoStatus="completed" emptyText="You might want to start doing something..."/>
    </FormGroup>
  </FormControl>
)

const mapStateToProps = state => ({
  todos: state.todos.todos,
})

const mapDispatchToProps = dispatch => ({
  completionToggled: todo => (event, checked) => {
    dispatch(todoActions.todoToggled(todo, checked))
  },
})

const styledComponent = withStyles(styles)(Todos)

export default connect(mapStateToProps, mapDispatchToProps)(styledComponent)
