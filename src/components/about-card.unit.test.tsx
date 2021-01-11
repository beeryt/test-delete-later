import React from 'react'
import { render } from '@testing-library/react'

import * as gatsby from 'gatsby'
const useStaticQuery = jest.spyOn(gatsby, 'useStaticQuery')
jest.mock(
  'gatsby-image',
  () =>
    function Img() {
      return <img />
    }
)

import AboutCard from './about-card'

describe('AboutCard', () => {
  it('renders correctly with mocked query', () => {
    useStaticQuery.mockImplementationOnce(() => {
      return { file: { childImageSharp: { fluid: {} } } }
    })
    render(<AboutCard />)
    expect(document.body).toMatchSnapshot()
  })

  it('renders correctly with missing query', () => {
    render(<AboutCard />)
    expect(document.body).toMatchSnapshot()
  })
})
