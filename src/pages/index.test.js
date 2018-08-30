import React from 'react'
import { shallow } from 'enzyme'
import IndexPage from './index'

describe('IndexPage', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<IndexPage />)
  })
})
