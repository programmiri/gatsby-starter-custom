import React from 'react'
import { shallow } from 'enzyme'
import Layout from './index'

describe('Layout', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Layout children={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })
})
