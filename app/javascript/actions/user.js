export const LOGGED_IN = 'LOGGED_IN'

export function loggedIn(userName) {
  if (!userName) {
    throw new Error('no userName')
  }

  return { type: LOGGED_IN, userName }
}
