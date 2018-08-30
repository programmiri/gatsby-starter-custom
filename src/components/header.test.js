import React from 'react'
import { shallow } from 'enzyme'
import Header from './header'

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />)
  })
})
