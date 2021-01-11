import React from 'react'
import useSiteMetadata from '../hooks/metadata'

export default function Footer(): JSX.Element {
  const { copyright } = useSiteMetadata()
  return <footer className="footer">{copyright}</footer>
}
