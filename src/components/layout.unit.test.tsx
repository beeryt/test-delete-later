import React from 'react'
import { render, waitFor } from '@testing-library/react'

import * as gatsby from 'gatsby'
const useStaticQuery = jest.spyOn(gatsby, 'useStaticQuery')

import Layout from './layout'

describe('Layout', () => {
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

  afterAll(() => useStaticQuery.mockReset())

  it('renders correctly', async () => {
    render(<Layout />)
    expect(document.body).toMatchSnapshot()
    await waitFor(() => expect(document.title).toBe(defaultMetadata.title))
    await waitFor(() => expect(document.head).toMatchSnapshot())
  })

  it('correctly sets canonical link', async () => {
    const location = { pathname: '/blog/one/' }
    render(<Layout location={location} />)
    expect(document.body).toMatchSnapshot()
    await waitFor(() => expect(document.head).toMatchSnapshot())
    await waitFor(() =>
      expect(
        document.head
          .querySelector('link[rel=canonical]')
          ?.attributes.getNamedItem('href')?.value
      ).toBe(defaultMetadata.siteUrl + location.pathname)
    )
  })
})
