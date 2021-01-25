import React from 'react'
import Link from './link'

interface FeaturedLinkProps {
  to?: string
  title?: string
  subtitle?: string
  children?: React.ReactNode
  [other: string]: unknown
}

export default function FeaturedLink({
  to,
  title,
  subtitle,
  children
}: FeaturedLinkProps): JSX.Element {
  const img_src = 'https://bulma.io/images/placeholders/128x128.png'
  const img_alt = ''
  const img_title = ''
  if (to === undefined) return <div className="media" />
  return (
    <Link className="media" to={to}>
      <figure className="media-left image is-64x64">
        <img src={img_src} alt={img_alt} title={img_title}></img>
      </figure>
      <div className="media-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{subtitle}</p>
        {children}
      </div>
    </Link>
  )
}
