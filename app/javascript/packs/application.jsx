import 'babel-polyfill'

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from 'reducers'
import sagas from 'sagas'

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  connectRouter(history)(reducers),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagas.forEach(saga => {
  sagaMiddleware.run(saga)
})

import { login } from 'actions/user'

store.dispatch(login('theUsername'))

export default store
