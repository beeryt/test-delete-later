import { graphql, useStaticQuery } from 'gatsby'

export interface SiteMetadata {
  title: string
  description: string
  siteUrl: string
  copyright: string
}

export default function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery(graphql`
    query SITE_METADATA_QUERY {
      site {
        siteMetadata {
          title
          description
          copyright
          siteUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}
