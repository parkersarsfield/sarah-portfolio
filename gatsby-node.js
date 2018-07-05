const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const isImage = node => {
  if (node.extension === 'png') return true
  if (node.extension === 'jpg') return true
  return false
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.id.includes('/socialmedia/') && isImage(node)) {
    const slug = createFilePath({ node, getNode, basePath: 'socialmedia' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { absolutePath: { regex: "/(socialmedia)/" } }) {
              edges {
                node {
                  fields {
                    slug
                  }
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const socialPosts = result.data.allFile.edges
          .filter(edge => {
            return edge.node.fields !== null
          })
          .forEach(({ node }) => {
            const category = '/socialmedia'
            const slugWithCategory = category + node.fields.slug

            createPage({
              path: slugWithCategory,
              component: path.resolve(
                `src/templates/single-portfolio-template.js`
              ),
              context: {
                slug: node.fields.slug,
                slugWithCategory,
                category
              }
            })
          })
      })
    )
  })
}
