/* global context */

import axios from 'axios'

import { push } from 'connected-react-router'
import { call, put } from 'redux-saga/effects'

import { userActions } from 'actions/user'
import { fetchUserInfoSaga, loginSaga, userInfoUpdatedSaga } from 'sagas/user'

describe('User sagas', () => {
  const userName = 'adas'

  describe('loginSaga', () => {
    const saga = loginSaga(userActions.login(userName))

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

  describe('fetchUserInfoSaga', () => {
    const saga = fetchUserInfoSaga(userActions.fetchUserInfo())

    context('when the request works', () => {
      const userInfo = { data: { username: userName } }

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

  describe('userInfoUpdatedSaga', () => {
    let userName
    let saga

    context('when a userName is provided', () => {
      beforeEach(() => {
        userName = 'some user name'
        saga = userInfoUpdatedSaga(userActions.userInfoUpdated(userName))
      })

      it('navigates to /todos', () => {
        expect(saga.next().value).to.deep.equal(
          put(push('/todos'))
        )
      })
    })

    context('when no userName is provided', () => {
      beforeEach(() => {
        userName = null
        saga = userInfoUpdatedSaga(userActions.userInfoUpdated(userName))
      })

      it('navigates to /login', () => {
        expect(saga.next().value).to.deep.equal(
          put(push('/login'))
        )
      })
    })
  })
})
