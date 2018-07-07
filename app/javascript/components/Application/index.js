import React from 'react'

import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import CssBaseline from '@material-ui/core/CssBaseline'

import TopBar from 'components/TopBar'
import Login from 'components/Login'
import Todos from 'components/Todos'

const Application = ({ store, history }) => (
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <ConnectedRouter history={history}>
        <React.Fragment>
          <TopBar />
          <Route path="/login" component={ Login } />
          <Route path="/todos" component={ Todos } />
        </React.Fragment>
      </ConnectedRouter>
    </React.Fragment>
  </Provider>
)

export default Application
