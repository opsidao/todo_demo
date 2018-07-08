import React from 'react'

import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline'

import CreateTodoBox from 'components/CreateTodoBox'
import Login from 'components/Login'
import Todos from 'components/Todos'
import TopBar from 'components/TopBar'

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        padding: '1rem',
      },
    },
  },
})

const Application = ({ store, history }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ConnectedRouter history={history}>
        <React.Fragment>
          <TopBar />
          <Route path="/login" component={ Login } />
          <Route path="/todos" component={ CreateTodoBox } />
          <Route path="/todos" component={ Todos } />
        </React.Fragment>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
)

export default Application
