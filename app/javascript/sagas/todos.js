
import axios from 'axios'

import { call, put, takeEvery, select } from 'redux-saga/effects'

import { CREATE_TODO, FETCH_ALL_TODOS, TODO_TOGGLED, todoActions } from 'actions/todos'

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

export function* createTodoSaga() {
  const text = yield select(state => state.todos.newTodoText)

  yield call(axios.post, '/api/todos', { text })

  yield put(todoActions.todoCreated())
  yield put(todoActions.fetchAllTodos())
}

export default [
  takeEvery(FETCH_ALL_TODOS, fetchAllTodosSaga),
  takeEvery('@@router/LOCATION_CHANGE', locationChangeSaga),
  takeEvery(TODO_TOGGLED, todoToggledSaga),
  takeEvery(CREATE_TODO, createTodoSaga),
]
