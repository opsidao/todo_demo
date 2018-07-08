import React from 'react'

import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { todoActions } from 'actions/todos'

const styles = {
  form: {
    flex: 1,
  },
}

const CreateTodoBox = ({ classes, createNote, newTodoText, onTextChanged }) => (
  <form className={ classes.form } onSubmit={ createNote }>
    <TextField
      id="newTodoText"
      label="Your TODO text"
      margin="normal"
      value={ newTodoText }
      onChange={ onTextChanged }
      autoFocus
      fullWidth
    />
    <Button id="createNewTodo" color="inherit" onClick={ createNote } type="submit">
      Create
    </Button>
  </form>
)

const mapStateToProps = state => ({
  newTodoText: state.todos.newTodoText,
})

const mapDispatchToProps = dispatch => ({
  createNote: event => {
    event.preventDefault()
    dispatch(todoActions.createTodo())
  },
  onTextChanged: event => dispatch(todoActions.newTodoTextChanged(event.target.value)),
})

const componentWithStyles = withStyles(styles)(CreateTodoBox)

export default connect(mapStateToProps, mapDispatchToProps)(componentWithStyles)
