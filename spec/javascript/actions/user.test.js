/* global context */

import {
  FETCH_USER_INFO,
  USER_INFO_UPDATED,
  LOGIN,
  fetchUserInfo,
  userInfoUpdated,
  login,
} from 'actions/user'

describe('User actions', () => {
  const userName = 'theUserName'

  describe('userInfoUpdated', () => {
    it('creates the correct action', () => {
      expect(userInfoUpdated(userName)).to.deep.equal({ type: USER_INFO_UPDATED, userName })
    })
  })

  describe('login', () => {
    it('creates the correct action', () => {
      expect(login(userName)).to.deep.equal({ type: LOGIN, userName })
    })
  })

  describe('fetchUserInfo', () => {
    it('creates the correct action', () => {
      expect(fetchUserInfo()).to.deep.equal({ type: FETCH_USER_INFO })
    })
  })
})
