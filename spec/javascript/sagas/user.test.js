/* global context */

import axios from 'axios'

import { call } from 'redux-saga/effects'

import { login, loggedIn } from 'actions/user'
import { postLogin } from 'sagas/user'

describe('User sagas', () => {
  describe('postLogin', () => {
    const userName = 'adas'
    const saga = postLogin(login(userName))

    context('when the request works', () => {
      it('makes a request to the backend', () => {
        expect(saga.next().value).toEqual(
          call(axios.post, '/api/sessions', { username: userName })
        )
        expect(saga.next(userName).value).toEqual(
          loggedIn(userName)
        )
      })
    })
  })
})
