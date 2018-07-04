import axios from 'axios'

import { call, put, takeLatest } from 'redux-saga/effects'

import { LOGIN, loggedIn } from 'actions/user'

export function* postLogin(action) {
  try {
    const data = yield call(axios.post, '/api/sessions', { username: action.userName })

    yield loggedIn(action.userName)
  } catch(error) {
    // TODO for workshop: add error handling here (test + new action + UI)
    console.log(`It failed: ${error}`)
  }
}

export function* login() {
  yield takeLatest(LOGIN, postLogin)
}
