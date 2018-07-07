import React from 'react'

import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import CssBaseline from '@material-ui/core/CssBaseline'

import CreateTodoBox from 'components/CreateTodoBox'
import Login from 'components/Login'
import Todos from 'components/Todos'
import TopBar from 'components/TopBar'

const Application = ({ store, history }) => (
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Route path="/login" component={ Login } />
          <Route path="/todos" component={ TopBar } />
          <Route path="/todos" component={ CreateTodoBox } />
          <Route path="/todos" component={ Todos } />
        </React.Fragment>
      </ConnectedRouter>
    </React.Fragment>
  </Provider>
)

export default Application
