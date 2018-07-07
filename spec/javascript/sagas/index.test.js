import rootSaga from 'sagas'

import { all } from 'redux-saga/effects'

import userSagas from 'sagas/user'
import todosSagas from 'sagas/todos'

describe('Root saga', () => {
  it('yields all the sagas', () => {
    const yielded = rootSaga().next()
    const allYielded = yielded.value.ALL

    userSagas.forEach(saga => {
      expect(allYielded).to.include(saga)
    })

    todosSagas.forEach(saga => {
      expect(allYielded).to.include(saga)
    })

    expect(allYielded).to.have.length(userSagas.length + todosSagas.length)
  })
})
