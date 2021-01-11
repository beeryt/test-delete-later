import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/metadata'

interface SEOPropTypes {
  title?: string
  desc?: string
  location?: { pathname: string }
}

export default function SEO({
  title,
  desc,
  location
}: SEOPropTypes): JSX.Element {
  const siteMetadata = useSiteMetadata()

  const seo = {
    title: title ? title : siteMetadata.title,
    desc: desc ? desc : siteMetadata.description,
    url: siteMetadata.siteUrl + (location ? location.pathname : '')
  }

  return (
    <Helmet
      title={seo.title}
      link={location ? [{ rel: 'canonical', href: seo.url }] : []}
    >
      <meta name="description" content={seo.desc} />
      {/* <meta name="image" content={seo.image} /> */}
    </Helmet>
  )
}
