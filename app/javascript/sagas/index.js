import { all } from 'redux-saga/effects'

import userSagas from 'sagas/user'
import todosSagas from 'sagas/todos'

export default function* rootSaga() {
  yield all([].concat(userSagas, todosSagas))
}

