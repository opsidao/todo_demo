import rootSaga from 'sagas'

import { all } from 'redux-saga/effects'

import userSagas from 'sagas/user'
import todosSagas from 'sagas/todos'

describe('Root saga', () => {
  it('yields all the sagas', () => {
    const yielded = rootSaga().next()
    const allYielded = yielded.value.ALL

    userSagas.forEach(saga => {
      expect(allYielded).toContain(saga)
    })

    todosSagas.forEach(saga => {
      expect(allYielded).toContain(saga)
    })

    expect(allYielded).toHaveLength(userSagas.length + todosSagas.length)
  })
})
