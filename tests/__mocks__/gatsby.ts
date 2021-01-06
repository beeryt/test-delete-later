import React from 'react'
const gatsby = jest.requireActual('gatsby')

export const graphql = jest.fn()
export const useStaticQuery = jest.fn()
export const StaticQuery = jest.fn()
export const Link = jest.fn().mockImplementation(
  // these props are invalid for 'a' tag
  ({
    activeClassName,
    activeStyle,
    getProps,
    innerRef,
    partiallyActive,
    ref,
    replace,
    to,
    ...rest
  }) => React.createElement('a', { ...rest, href: to })
)

module.exports = {
  ...gatsby,
  graphql,
  useStaticQuery,
  StaticQuery,
  Link
}
