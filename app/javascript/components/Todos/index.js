import React from 'react'

import { connect } from 'react-redux'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'

import { todoActions } from 'actions/todos'

import Todo from './Todo'

const Todos = ({ completionToggled, todos }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Pending</FormLabel>
    <FormGroup id='pending'>
      {
        todos.pending.length ?
          todos.pending.map(todo =>
            <Todo
              key={ todo.id }
              todo={ todo }
              todoCompletionToggled={ completionToggled(todo) }/>
          )
        :
        <div>Nothing left to do!</div>
      }
    </FormGroup>
    <FormLabel component="legend">Completed</FormLabel>
    <FormGroup id='completed'>
      {
        todos.completed.length ?
          todos.completed.map(todo =>
            <Todo key={ todo.id } todo={ todo } todoCompletionToggled={ completionToggled(todo) }/>
          )
        :
        <div>You might want to start doing something...</div>
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
