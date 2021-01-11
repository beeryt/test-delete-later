module.exports = {
  siteMetadata: {
    title: 'Carl B. Smiley',
    description:
      "Carl B. Smiley's technology playground handcrafted with artisanal free-range bits and bytes.",
    siteUrl: 'https://smileycarl.com',
    copyright: 'Copyright © 2020. Carl B. Smiley'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
}
