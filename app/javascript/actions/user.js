export const LOGIN = 'LOGIN'
export const LOGGED_IN = 'LOGGED_IN'

export function login(userName) {
  return { type: LOGIN, userName }
}

export function loggedIn(userName) {
  if (!userName) {
    throw new Error('no userName')
  }

  return { type: LOGGED_IN, userName }
}
