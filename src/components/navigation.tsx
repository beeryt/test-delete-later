import React, { useState } from 'react'
import Link from './link'
import useSiteMetadata from '../hooks/metadata'

export default function Navigation(): JSX.Element {
  const [active, setActive] = useState(false)

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    setActive(!active)
  }

  const { title } = useSiteMetadata()

  return (
    <header>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item is-size-3 has-text-dark" to="/">
            {title}
          </Link>
          <div
            role="button"
            className={`navbar-burger ${active ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
          <div className="navbar-end">{/* TODO add navigation links */}</div>
        </div>
      </nav>
    </header>
  )
}
