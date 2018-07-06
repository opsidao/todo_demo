import 'babel-polyfill'

import React from 'react'

import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import initialAction from 'actions'
import reducers from 'reducers'
import rootSaga from 'sagas'

import Login from 'components/Login'

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  connectRouter(history)(reducers),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/login" component={ Login } />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('application_root')
)

store.dispatch(initialAction())

export default store
