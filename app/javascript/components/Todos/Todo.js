import React from 'react'

import Grow from '@material-ui/core/Grow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const Todo = ({ todo, todoCompletionToggled }) => (
  <Grow timeout={ 400 } in>
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
  </Grow>
)

export default Todo
