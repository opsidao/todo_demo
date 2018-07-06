
import axios from 'axios'

import { push } from 'connected-react-router'
import { all, call, put, takeEvery } from 'redux-saga/effects'

import { FETCH_ALL_TODOS, todoActions } from 'actions/todos'

// Action handlers
export function* fetchAllTodosSaga() {
  try {
    const response = yield call(axios.get, '/api/todos')

    yield put(todoActions.allTodosFetched(response.data.todos))
  } catch (error) {
    // TODO for workshop: add error handling here (test + new action + UI)
    console.log(`It failed: ${error}`) //eslint-disable-line
  }
}

export function* locationChangeSaga(action) {
  if (action.type === '@@router/LOCATION_CHANGE' && action.payload.location.pathname === '/todos') {
    yield put(todoActions.fetchAllTodos())
  }
}

export default [
  takeEvery(FETCH_ALL_TODOS, fetchAllTodosSaga),
  takeEvery('@@router/LOCATION_CHANGE', locationChangeSaga),
]
