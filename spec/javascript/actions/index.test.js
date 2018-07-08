import defaultAction from 'actions'

import { userActions } from 'actions/user'

describe('Actions index', () => {
  it('returns userActions.fetchUserInfo as the default action', () => {
    expect(defaultAction).toEqual(userActions.fetchUserInfo)
  })
})
