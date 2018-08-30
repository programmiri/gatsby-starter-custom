import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from './404'

describe('NotFoundPage', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotFoundPage />)
  })
})
