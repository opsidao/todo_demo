/* global context */

import { userInfoUpdated } from 'actions/user'
import reducer from 'reducers/user'

describe('user reducer', () => {
  const defaultState = { userName: null }

  it('has a default state', () => {
    expect(reducer()).to.deep.equal(defaultState)
  })

  context('when the action is USER_INFO_UPDATED', () => {
    const userName = 'TheUsername'
    const action = userInfoUpdated(userName)
    const expectedState = { userName }

    it('saves the username and sets the flag', () => {
      expect(reducer(defaultState, action)).to.deep.equal(expectedState)
    })
  })
})
