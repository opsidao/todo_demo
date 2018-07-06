import React from 'react'

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Login from 'components/Login'
import Todos from 'components/Todos'

const Application = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/todos" component={ Todos } />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Application
