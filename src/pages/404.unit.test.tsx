import React from 'react'
import { render } from '@testing-library/react'

import * as gatsby from 'gatsby'
const useStaticQuery = jest.spyOn(gatsby, 'useStaticQuery')

jest.mock(
  '../components/layout',
  () =>
    function Layout({ children }: { children: React.ReactNode }) {
      return <>{children}</>
    }
)

import NotFoundPage from './404'

describe('NotFoundPage', () => {
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
    render(<NotFoundPage />)
    expect(document.body).toMatchSnapshot()
  })

  it('renders not found text', async () => {
    render(<NotFoundPage />)
    expect(document.body).toHaveTextContent(/(page could )?not( be)? found/i)
  })
})
