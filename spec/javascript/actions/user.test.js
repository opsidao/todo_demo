/* global context */

import { LOGGED_IN, loggedIn } from 'actions/user'

describe('User actions', () => {
  describe('loggedIn', () => {
    context('when no proper userName is provided', () => {
      it('throws an error', () => {
        expect(() => { loggedIn() }).to.throw()
        expect(() => { loggedIn(null) }).to.throw()
        expect(() => { loggedIn("") }).to.throw()
      })
    })

    context('when a userName is provided', () => {
      const userName = 'theUserName'

      it('creates the correct action', () => {
        expect(loggedIn(userName)).to.deep.equal({ type: LOGGED_IN, userName })
      })
    })
  })
})
