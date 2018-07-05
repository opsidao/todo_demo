/* global context */

import axios from 'axios'

import { call } from 'redux-saga/effects'

import { login, loggedIn } from 'actions/user'
import { loginSagaHandler } from 'sagas/user'

describe('User sagas', () => {
  describe('loginSagaHandler', () => {
    const userName = 'adas'
    const saga = loginSagaHandler(login(userName))

    context('when the request works', () => {
      it('makes a request to the backend', () => {
        expect(saga.next().value).to.deep.equal(
          call(axios.post, '/api/sessions', { username: userName })
        )
        expect(saga.next(userName).value).to.deep.equal(
          loggedIn(userName)
        )
      })
    })
  })
})
