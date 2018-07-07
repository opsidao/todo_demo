import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const Todo = ({ todo, todoCompletionToggled }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={ todo.completed }
        value={ todo.id.toString() }
        onChange={ todoCompletionToggled }
      />
    }
    label={ todo.text }
    />
)

export default Todo
