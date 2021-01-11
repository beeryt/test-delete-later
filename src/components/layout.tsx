import React from 'react'
import SEO from './seo'
import Navigation from './navigation'
import Footer from './footer'

import '../styles/global.scss'

interface LayoutProps {
  children?: React.ReactNode
  location?: { pathname: string }
}

export default function Layout({
  children,
  location
}: LayoutProps): JSX.Element {
  return (
    <>
      <SEO location={location} />
      <Navigation />
      <main id="full-body-wrapper">{children}</main>
      <Footer />
    </>
  )
}
