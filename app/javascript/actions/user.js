export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const USER_INFO_UPDATED = 'USER_INFO_UPDATED'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const userActions = {
  fetchUserInfo: () => ({ type: FETCH_USER_INFO }),
  userInfoUpdated: userName => ({ type: USER_INFO_UPDATED, userName }),
  login: userName => ({ type: LOGIN, userName }),
  logout: () => ({ type: LOGOUT })
}

