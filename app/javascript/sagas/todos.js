
import axios from 'axios'

import { call, put, takeEvery } from 'redux-saga/effects'

import { FETCH_ALL_TODOS, TODO_TOGGLED, todoActions } from 'actions/todos'

// Action handlers
export function* fetchAllTodosSaga() {
  const response = yield call(axios.get, '/api/todos')

  yield put(todoActions.allTodosFetched(response.data.todos))
}

export function* locationChangeSaga(action) {
  if (action.type === '@@router/LOCATION_CHANGE' && action.payload.location.pathname === '/todos') {
    yield put(todoActions.fetchAllTodos())
  }
}

export function* todoToggledSaga(action) {
  yield call(axios.put, `/api/todos/${action.todo.id}`, { completed: action.checked })
}

export default [
  takeEvery(FETCH_ALL_TODOS, fetchAllTodosSaga),
  takeEvery('@@router/LOCATION_CHANGE', locationChangeSaga),
  takeEvery(TODO_TOGGLED, todoToggledSaga),
]
