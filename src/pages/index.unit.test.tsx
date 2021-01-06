import React from 'react'
import { render } from '@testing-library/react'

import IndexPage from './index'

describe('IndexPage', () => {
  it('renders correctly', () => {
    const tree = render(<IndexPage />)
    expect(tree).toMatchSnapshot()
  })
})
