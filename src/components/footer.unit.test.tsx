import React from 'react'
import { render } from '@testing-library/react'

import * as gatsby from 'gatsby'
const useStaticQuery = jest.spyOn(gatsby, 'useStaticQuery')

import Footer from './footer'

describe('Footer', () => {
  const defaultMetadata = {
    copyright: 2021
  }

  beforeAll(() => {
    useStaticQuery.mockImplementation(() => {
      return {
        site: {
          siteMetadata: defaultMetadata
        }
      }
    })
  })

  beforeEach(() => jest.clearAllMocks())

  afterAll(() => useStaticQuery.mockReset())

  it('renders correctly', async () => {
    render(<Footer />)
    expect(document.body).toMatchSnapshot()
    expect(document.querySelector('footer')?.innerHTML).toContain(
      defaultMetadata.copyright
    )
  })
})
