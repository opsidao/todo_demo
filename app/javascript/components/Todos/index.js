import React from 'react'

import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Paper from '@material-ui/core/Paper'

import { todoActions } from 'actions/todos'

import Todo from './Todo'

const styles = {
  extraPadding: {
    padding: '1rem',
  },
  centeredWithPadding: {
    textAlign: 'center',
    padding: '1rem',
  },
}

const Todos = ({ classes, completionToggled, todos }) => (
  <FormControl className={ classes.extraPadding } fullWidth>
    <FormLabel className={ classes.centeredWithPadding }component="legend">Pending</FormLabel>
    <FormGroup id='pending'>
      <Paper className={ classes.extraPadding }>
        {
          todos.pending.length ?
            todos.pending.map(todo =>
              <Todo
                key={ todo.id }
                todo={ todo }
                todoCompletionToggled={ completionToggled(todo) }/>
            )
          :
          <div className={ classes.centeredWithPadding }>Nothing left to do!</div>
        }
      </Paper>
    </FormGroup>
    <FormLabel className={ classes.centeredWithPadding } component="legend">Completed</FormLabel>
    <FormGroup id='completed'>
      <Paper className={ classes.extraPadding }>
        {
          todos.completed.length ?
            todos.completed.map(todo =>
              <Todo key={ todo.id } todo={ todo } todoCompletionToggled={ completionToggled(todo) }/>
            )
          :
          <div className={ classes.centeredWithPadding }>You might want to start doing something...</div>
        }
      </Paper>
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
