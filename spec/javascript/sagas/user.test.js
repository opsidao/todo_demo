/* global context */

import axios from 'axios'

import { call, put } from 'redux-saga/effects'

import { userActions } from 'actions/user'
import { fetchUserInfoSagaHandler, loginSagaHandler } from 'sagas/user'

describe('User sagas', () => {
  const userName = 'adas'

  describe('loginSagaHandler', () => {
    const saga = loginSagaHandler(userActions.login(userName))

    context('when the request works', () => {
      it('makes a request to the backend', () => {
        expect(saga.next().value).to.deep.equal(
          call(axios.post, '/api/sessions', { username: userName })
        )
        expect(saga.next(userName).value).to.deep.equal(
          put(userActions.userInfoUpdated(userName))
        )
      })
    })
  })

  describe('fetchUserInfoHandler', () => {
    const saga = fetchUserInfoSagaHandler(userActions.fetchUserInfo())

    context('when the request works', () => {
      const userInfo = { username: userName }

      it('sends a request to the backend and dispatches a USER_INFO_UPDATED', () => {
        expect(saga.next().value).to.deep.equal(
          call(axios.get, '/api/sessions')
        )

        expect(saga.next(userInfo).value).to.deep.equal(
          put(userActions.userInfoUpdated(userName))
        )
      })
    })
  })
})
