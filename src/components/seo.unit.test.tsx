import React from 'react'
import { render, waitFor } from '@testing-library/react'

import * as gatsby from 'gatsby'
const useStaticQuery = jest.spyOn(gatsby, 'useStaticQuery')

import SEO from './seo'

describe('SEO', () => {
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

  it('renders defaults correctly', async () => {
    render(<SEO />)
    expect(document.body).toMatchSnapshot()
    await waitFor(() => expect(document.title).toBe(defaultMetadata.title))
    await waitFor(() =>
      expect(
        document.head
          .querySelector('meta[name=description]')
          ?.attributes.getNamedItem('content')?.value
      ).toBe(defaultMetadata.description)
    )
    await waitFor(() =>
      expect(document.head.querySelector('link[rel=canonical]')).toBeNull()
    )
    await waitFor(() => expect(document.head).toMatchSnapshot())
  })

  it('correctly sets title', async () => {
    const title = 'Custom Title'
    render(<SEO title={title} />)
    expect(document.body).toMatchSnapshot()
    await waitFor(() => expect(document.title).toEqual(title))
    await waitFor(() => expect(document.head).toMatchSnapshot())
  })

  it('correctly sets description', async () => {
    const description = 'Custom Description'
    render(<SEO desc={description} />)
    expect(document.body).toMatchSnapshot()
    await waitFor(() =>
      expect(
        document.head
          .querySelector('meta[name=description]')
          ?.attributes.getNamedItem('content')?.value
      ).toBe(description)
    )
    await waitFor(() => expect(document.head).toMatchSnapshot())
  })

  it('correctly sets canonical link', async () => {
    const location = {
      pathname: '/blog/one'
    }
    render(<SEO location={location} />)
    expect(document.body).toMatchSnapshot()
    await waitFor(() =>
      expect(
        document.head
          .querySelector('link[rel=canonical]')
          ?.attributes.getNamedItem('href')?.value
      ).toBe(defaultMetadata.siteUrl + location.pathname)
    )
    await waitFor(() => expect(document.head).toMatchSnapshot())
  })
})
