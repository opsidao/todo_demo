import { combineReducers } from 'redux'

import user from 'reducers/user'
import todos from 'reducers/todos'

export default combineReducers({
  user,
  todos,
})
