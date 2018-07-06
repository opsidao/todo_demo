import 'babel-polyfill'

import React from 'react'

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import initialAction from 'actions'
import reducers from 'reducers'
import rootSaga from 'sagas'

import Application from 'components/Application'

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  connectRouter(history)(reducers),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

render(
  <Application history={ history } store={ store }/>,
  document.getElementById('application_root')
)

store.dispatch(initialAction())

export default store
