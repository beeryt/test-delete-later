const { createFilePath } = require('gatsby-source-filesystem')

const contentTemplate = require.resolve('./src/components/about-card.tsx')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Fields {
      slug: String
    }
    type MarkdownRemark implements Node {
      fields: Fields
    }
    `
  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql }) => {
  await graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges
    for (const post of posts) {
      const { slug } = post.node.fields
      actions.createPage({
        path: slug,
        component: contentTemplate,
        context: { slug }
      })
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = generateSlug(node, getNode)
    console.log('Creating slug:', slug)
    actions.createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

function generateSlug(node, getNode) {
  let slug = createFilePath({ node, getNode })
  if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
    slug = `/${node.frontmatter.slug}/`
  }
  return slug
}
