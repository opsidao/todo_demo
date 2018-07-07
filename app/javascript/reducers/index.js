import { combineReducers } from 'redux'

import user from 'reducers/user'
import todos from 'reducers/todos'

const rootReducer = combineReducers({
  user,
  todos,
})

export default rootReducer
