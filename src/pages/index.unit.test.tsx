import React from 'react'
import { render, waitFor } from '@testing-library/react'

import * as gatsby from 'gatsby'
const useStaticQuery = jest.spyOn(gatsby, 'useStaticQuery')

import IndexPage from './index'

describe('IndexPage', () => {
  const siteMetadata = {
    title: 'Site Title',
    description: 'Site Description',
    siteUrl: 'example.com'
  }

  beforeAll(() => {
    useStaticQuery.mockImplementation(() => {
      return { site: { siteMetadata: siteMetadata } }
    })
  })

  afterAll(() => useStaticQuery.mockReset())

  it('renders correctly', async () => {
    render(<IndexPage />)
    expect(document.body).toMatchSnapshot()
    await waitFor(() => expect(document.title).toBe(siteMetadata.title))
    await waitFor(() => expect(document.head).toMatchSnapshot())
  })
})
