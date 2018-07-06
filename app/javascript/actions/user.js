export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const LOGIN = 'LOGIN'
export const USER_INFO_UPDATED = 'USER_INFO_UPDATED'

export const userActions = {
  fetchUserInfo: () => ({ type: FETCH_USER_INFO }),
  login: userName => ({ type: LOGIN, userName }),
  userInfoUpdated: userName => ({ type: USER_INFO_UPDATED, userName }),
}

