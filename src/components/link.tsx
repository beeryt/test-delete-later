import React from 'react'
import { Link as InternalLink } from 'gatsby'

interface LinkPropTypes {
  to: string
  children?: React.ReactNode
  activeClassName?: string
  partiallyActive?: boolean
  [other: string]: unknown
}

export default function Link({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}: LinkPropTypes): JSX.Element {
  const external = isExternal(to)
  const file = isFile(to)

  if (!external && !file) {
    return (
      <InternalLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </InternalLink>
    )
  } else {
    // omit the props which are not supported by <a> element
    return (
      <a href={to} {...other}>
        {children}
      </a>
    )
  }
}

export function isExternal(to: string): boolean {
  return /^[0-9a-z]+:/i.test(to)
}

export function isFile(to: string): boolean {
  to = to.split(/[?#]/)[0] // remove query and fragment from URI
  return /\.[0-9a-z]+$/i.test(to) // test if ends with file extension
}
