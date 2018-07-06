export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const LOGIN = 'LOGIN'
export const USER_INFO_UPDATED = 'USER_INFO_UPDATED'

export function fetchUserInfo() {
  return { type: FETCH_USER_INFO }
}

export function login(userName) {
  return { type: LOGIN, userName }
}

export function userInfoUpdated(userName) {
  return { type: USER_INFO_UPDATED, userName }
}
