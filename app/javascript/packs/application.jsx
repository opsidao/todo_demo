import 'babel-polyfill'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from 'reducers'
import sagas from 'sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagas.forEach(saga => {
  sagaMiddleware.run(saga)
})

import { login } from 'actions/user'

store.dispatch(login('theUsername'))

export default store
