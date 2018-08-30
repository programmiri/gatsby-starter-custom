import React from 'react'
import { shallow } from 'enzyme'
import SecondPage from './page-2'

describe('SecondPage', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SecondPage />)
  })
})
