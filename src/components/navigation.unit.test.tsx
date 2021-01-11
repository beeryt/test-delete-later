import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import * as gatsby from 'gatsby'
const useStaticQuery = jest.spyOn(gatsby, 'useStaticQuery')

import Navigation from './navigation'

describe('Navigation', () => {
  const defaultMetadata = {
    title: 'Default Title',
    description: 'Default Description',
    siteUrl: 'https://example.com'
  }

  beforeAll(() => {
    useStaticQuery.mockImplementation(() => {
      return { site: { siteMetadata: defaultMetadata } }
    })
  })

  beforeEach(() => jest.clearAllMocks())

  afterAll(() => useStaticQuery.mockReset())

  it('renders correctly', async () => {
    render(<Navigation />)
    expect(document.body).toMatchSnapshot()
  })

  it('handles user click', async () => {
    const { asFragment, getByRole } = render(<Navigation />)
    const firstRender = asFragment()
    fireEvent.click(getByRole('button', { name: 'menu' }))
    expect(firstRender).toMatchDiffSnapshot(asFragment())
    fireEvent.click(getByRole('button', { name: 'menu' }))
    expect(firstRender).toMatchDiffSnapshot(asFragment())
  })
})
