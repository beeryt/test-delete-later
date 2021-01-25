import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import AboutCard from '../components/about-card'
import Link from '../components/link'
import FeaturedLink from '../components/featured-link'

type IndexPageProps = PageProps | Record<string, never>

export default function IndexPage({ location }: IndexPageProps): JSX.Element {
  return (
    <Layout location={location}>
      <section className="section" id="about-me">
        <div className="columns container">
          <div className="column is-one-quarter">
            <AboutCard />
          </div>
          <div className="column">
            <article className="article content">
              <h1 className="title">About Me</h1>
              <p>
                I am an embedded systems engineer with practical experience in
                both hardware and software.
              </p>
              <p>
                I currently work at{' '}
                <Link to="https://www.protingent.com">Protingent</Link> as an
                embedded systems engineer for{' '}
                <Link className="nobr" to="https://strykeremergencycare.com">
                  Stryker Emergency Care
                </Link>
                .
              </p>
              <p>I am located in the Seattle metropolitan area.</p>
              <p>
                For professional inquiries, please{' '}
                <Link to="https://www.linkedin.com/in/carl-b-smiley">
                  visit my LinkedIn
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <article className="article container">
          <h1 className="title">Welcome</h1>
          <h2 className="subtitle">
            For best results, follow directions carefully.
          </h2>
          <FeaturedLink />
          <FeaturedLink
            to="#"
            title="Project 1"
            subtitle="Do not write in this space."
          />
          <FeaturedLink
            to="#"
            title="Project 2"
            subtitle="Stay seated until bus comes to a complete stop."
          />
        </article>
      </section>
    </Layout>
  )
}
