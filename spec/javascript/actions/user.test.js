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
      expect(userActions.fetchUserInfo()).to.deep.equal({ type: FETCH_USER_INFO })
    })
  })

  describe('userInfoUpdated', () => {
    it('creates the correct action', () => {
      expect(userActions.userInfoUpdated(userName)).to.deep.equal({ type: USER_INFO_UPDATED, userName })
    })
  })

  describe('login', () => {
    it('creates the correct action', () => {
      expect(userActions.login(userName)).to.deep.equal({ type: LOGIN, userName })
    })
  })

  describe('logout', () => {
    it('creates the correct action', () => {
      expect(userActions.logout()).to.deep.equal({ type: LOGOUT })
    })
  })
})
