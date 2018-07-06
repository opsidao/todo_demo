/* global mockStore */

import React from 'react'

import { shallow } from 'enzyme'

import Application from 'components/Application'

describe('Application', () => {
  const history = {
    listen: () => {},
    location: {},
    push: () => {},
  }
  const store = mockStore({})
  const wrapper = () => shallow(<Application store={ store } history={ history }/>)

  it('passes the store to the Provider', () => {
    const provider = wrapper().find('Provider')

    expect(provider.prop('store')).to.equal(store)
  })
})
