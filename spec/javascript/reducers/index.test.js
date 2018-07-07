import { defaultState as userDefaultState } from 'reducers/user'
import { defaultState as todosDefaultState } from 'reducers/todos'

import rootReducer from 'reducers/index'

describe('Root reducer', () => {
  it('includes the user and todos reducers', () => {
    const reducer = rootReducer()

    expect(reducer.user).to.deep.equal(userDefaultState)
    expect(reducer.todos).to.deep.equal(todosDefaultState)
  })
})
