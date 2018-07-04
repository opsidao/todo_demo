/* global context */

import { LOGGED_IN, loggedIn } from 'actions/user'

describe('User actions', () => {
  describe('loggedIn', () => {
    context('when no proper userName is provided', () => {
      it('throws an error', () => {
        expect(() => { loggedIn() }).toThrow()
        expect(() => { loggedIn(null) }).toThrow()
        expect(() => { loggedIn("") }).toThrow()
      })
    })

    context('when a userName is provided', () => {
      const userName = 'theUserName'

      it('creates the correct action', () => {
        expect(loggedIn(userName)).toEqual({ type: LOGGED_IN, userName })
      })
    })
  })
})
