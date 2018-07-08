import {
  FETCH_USER_INFO,
  USER_INFO_UPDATED,
  LOGIN,
  LOGOUT,
  userActions,
} from 'actions/user'

describe('User actions', () => {
  const userName = 'theUserName'

  describe('fetchUserInfo', () => {
    it('creates the correct action', () => {
      expect(userActions.fetchUserInfo()).toEqual({ type: FETCH_USER_INFO })
    })
  })

  describe('userInfoUpdated', () => {
    it('creates the correct action', () => {
      expect(userActions.userInfoUpdated(userName)).toEqual({ type: USER_INFO_UPDATED, userName })
    })
  })

  describe('login', () => {
    it('creates the correct action', () => {
      expect(userActions.login(userName)).toEqual({ type: LOGIN, userName })
    })
  })

  describe('logout', () => {
    it('creates the correct action', () => {
      expect(userActions.logout()).toEqual({ type: LOGOUT })
    })
  })
})
