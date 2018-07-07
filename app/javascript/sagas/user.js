import axios from 'axios'

import { push } from 'connected-react-router'
import { call, put, takeEvery } from 'redux-saga/effects'

import { FETCH_USER_INFO, LOGIN, USER_INFO_UPDATED, userActions } from 'actions/user'

// Action handlers
export function* fetchUserInfoSaga() {
  const response = yield call(axios.get, '/api/sessions')

  yield put(userActions.userInfoUpdated(response.data.username))
}

export function* loginSaga(action) {
  yield call(axios.post, '/api/sessions', { username: action.userName })

  yield put(userActions.userInfoUpdated(action.userName))
}

export function* userInfoUpdatedSaga(action) {
  if (!action.userName) {
    yield put(push('/login'))
  } else {
    yield put(push('/todos'))
  }
}

export default [
  takeEvery(LOGIN, loginSaga),
  takeEvery(FETCH_USER_INFO, fetchUserInfoSaga),
  takeEvery(USER_INFO_UPDATED, userInfoUpdatedSaga),
]
