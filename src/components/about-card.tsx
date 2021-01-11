import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function AboutCard(): JSX.Element {
  const data = useStaticQuery(graphql`
    query PROFILE_IMAGE_QUERY {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let profileImage = (
    <img
      alt="Placeholder image"
      title=""
      src="https://bulma.io/images/placeholders/1280x960.png"
    />
  )
  if (data?.file?.childImageSharp?.fluid)
    profileImage = <Img fluid={data?.file?.childImageSharp?.fluid} />

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">{profileImage}</figure>
      </div>
      <div className="card-content">
        <div className="media">
          {/* <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://github.com/identicons/beeryt.png"
                alt="identicon profile image"
              />
            </figure>
          </div> */}
          <div className="media-content">
            <p className="title is-4">Carl B. Smiley</p>
            <p className="subtitle is-6">@linux_pangolin</p>
          </div>
        </div>
        <div className="level is-mobile">
          <a
            className="level-item"
            href="https://github.com/beeryt"
            aria-label="GitHub"
          >
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
          <a
            className="level-item"
            href="https://www.linkedin.com/in/carl-b-smiley"
            aria-label="LinkedIn"
          >
            <span className="icon">
              <i className="fab fa-linkedin"></i>
            </span>
          </a>
          <a
            className="level-item"
            href="https://stackexchange.com/users/13595322/linux-pangolin"
            aria-label="StackExchange"
          >
            <span className="icon">
              <i className="fab fa-stack-overflow"></i>
            </span>
          </a>
          <a
            className="level-item"
            href="https://twitter.com/linux_pangolin"
            aria-label="Twitter"
          >
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
