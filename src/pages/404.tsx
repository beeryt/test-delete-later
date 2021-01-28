import React from 'react'
import Layout from '../components/layout'

export default function NotFoundPage(): JSX.Element {
  return (
    <Layout>
      <section className="section">
        <div className="content container">
          <div className="message is-large is-primary">
            <div className="message-header">
              <span>The requested page could not be found!</span>
            </div>
            <div className="message-body">
              <span>Perhaps it has moved or been deleted.</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
