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
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels)of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image
              maxWidth: 2048,
              showCaptions: ['title']
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    }
  ]
}
