import React from 'react'
import { render } from '@testing-library/react'

import Link, { isExternal, isFile } from './link'

describe('Link', () => {
  const paths = ['', 'page', 'path/to/page']
  const files = ['index.html', 'file.txt']
  const queries = ['', '?key=key&value=value']
  const fragments = ['', '#', '#fragment']

  const uris = [
    ...new Set(
      paths.flatMap((path) =>
        files.flatMap((file) =>
          queries.flatMap((query) =>
            fragments.flatMap((frag) => {
              const sep = path && path.slice(-1) !== '/' ? '/' : ''
              return [
                path + query + frag,
                path + sep + query + frag,
                path + sep + file + query + frag
              ]
            })
          )
        )
      )
    )
  ]

  it('renders external link correctly', () => {
    render(<Link to="https://example.com" />)
    expect(document.body).toMatchSnapshot()
  })

  it('renders internal links correctly', () => {
    render(<Link to="path/to/page" />)
    expect(document.body).toMatchSnapshot()
  })

  describe('isExternal', () => {
    expect.extend({
      toBeExternal(received) {
        const pass = isExternal(received)
        return {
          pass: pass,
          message: () =>
            `Expected ${received} to ${!pass ? '' : 'not '}be external`
        }
      }
    })

    it('returns truthy for external URI', () => {
      for (const uri of uris) {
        expect('https://example.com/' + uri).toBeExternal()
        expect('http://example.com/' + uri).toBeExternal()
        expect('ftp://example.com/' + uri).toBeExternal()
      }
    })

    it('returns falsy for internal URI', () => {
      for (const uri of uris) {
        expect(uri).not.toBeExternal()
        expect('/' + uri).not.toBeExternal()
      }
    })
  })

  describe('isFile', () => {
    expect.extend({
      toBeFile(received) {
        const pass = isFile(received)
        return {
          pass: pass,
          message: () => `Expected ${received} to ${!pass ? '' : 'not '}be file`
        }
      }
    })

    it('returns truthy for URIs with file extensions', () => {
      const with_files = uris.filter((uri) =>
        files.some((v) => uri.includes(v))
      )
      for (const uri of with_files) {
        expect(uri).toBeFile()
      }
    })

    it('returns falsy for other URIs', () => {
      const without_files = uris.filter((uri) =>
        files.every((v) => !uri.includes(v))
      )
      for (const uri of without_files) {
        expect(uri).not.toBeFile()
      }
    })
  })
})
