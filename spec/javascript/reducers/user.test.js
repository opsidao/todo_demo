/* global context */

import { loggedIn } from 'actions/user'
import reducer from 'reducers/user'

describe('user reducer', () => {
  const defaultState = { userName: null }

  it('has a default state', () => {
    expect(reducer()).toEqual(defaultState)
  })

  context('when the action is LOGGED_IN', () => {
    const userName = 'TheUsername'
    const action = loggedIn(userName)
    const expectedState = { userName }

    it('saves the username and sets the flag', () => {
      expect(reducer(defaultState, action)).toEqual(expectedState)
    })
  })
})
