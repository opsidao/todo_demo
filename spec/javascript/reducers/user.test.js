/* global context */

import { userActions } from 'actions/user'
import reducer from 'reducers/user'

describe('user reducer', () => {
  const defaultState = { userName: null }

  it('has a default state', () => {
    expect(reducer()).toEqual(defaultState)
  })

  context('when the action is USER_INFO_UPDATED', () => {
    const userName = 'TheUsername'
    const action = userActions.userInfoUpdated(userName)
    const expectedState = { userName }

    it('saves the username and sets the flag', () => {
      expect(reducer(defaultState, action)).toEqual(expectedState)
    })
  })
})
