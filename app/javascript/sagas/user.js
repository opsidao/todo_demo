import axios from 'axios'

import { push } from 'connected-react-router'
import { all, call, put, takeEvery } from 'redux-saga/effects'

import { FETCH_USER_INFO, LOGIN, USER_INFO_UPDATED, userActions } from 'actions/user'

// Action handlers
export function* fetchUserInfoSagaHandler() {
  try {
    const userInfo = yield call(axios.get, '/api/sessions')

    yield put(userActions.userInfoUpdated(userInfo.username))
  } catch (error) {
    // TODO for workshop: add error handling here (test + new action + UI)
    console.log(`It failed: ${error}`) //eslint-disable-line
  }
}

export function* loginSagaHandler(action) {
  try {
    yield call(axios.post, '/api/sessions', { username: action.userName })

    yield put(userActions.userInfoUpdated(action.userName))
  } catch (error) {
    // TODO for workshop: add error handling here (test + new action + UI)
    console.log(`It failed: ${error}`) //eslint-disable-line
  }
}

export function* userInfoUpdatedSagaHandler(action) {
  if (!action.userName) {
    yield put(push('/login'))
  } else {
    yield put(push('/todos'))
  }
}

export default [
  takeEvery(LOGIN, loginSagaHandler),
  takeEvery(FETCH_USER_INFO, fetchUserInfoSagaHandler),
  takeEvery(USER_INFO_UPDATED, userInfoUpdatedSagaHandler),
]
