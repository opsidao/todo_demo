import React from 'react'

import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core'

import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'

import { todoActions } from 'actions/todos'

import Todo from './Todo'

const styles = {
  extraPadding: {
    padding: '1rem',
  },
}

const TodoList = ({ classes, completionToggled, todos }) => (
  <Paper className={ classes.extraPadding }>
    {
      todos.length ?
        todos.map(todo =>
          <Todo
            key={ todo.id }
            todo={ todo }
            todoCompletionToggled={ completionToggled(todo) }/>
        )
      :
      <Grow timeout={ 400 } in className={ classes.centeredWithPadding }>
        <div>Nothing left to do!</div>
      </Grow>
    }
  </Paper>
)

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos.todos[ownProps.todoStatus],
})

const mapDispatchToProps = dispatch => ({
  completionToggled: todo => (event, checked) => {
    dispatch(todoActions.todoToggled(todo, checked))
  },
})

const styledComponent = withStyles(styles)(TodoList)

export default connect(mapStateToProps, mapDispatchToProps)(styledComponent)
