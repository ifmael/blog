/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)


const setNumPage = (numberOfPage) =>{
  return numberOfPage - 1 === 0 ? '' : numberOfPage;
}

// Esta funcion es llamada cuando gatsby crea un nuevo nodo o lo actualiza
exports.onCreateNode = ({ node, getNode, actions}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: `markdown` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
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
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog-list pages
        const posts = result.data.allMarkdownRemark.edges
        const postsPerPage = 5
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve(`./src/layouts/articules-list.js`),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              pageNumer: i + 1,
              previousPage: i + 1 === 1 ? undefined : `/blog/${setNumPage(i)}`,
              nextPage: numPages > i + 1 ? `/blog/${i + 2}` : undefined
            },
          })
        })

        // Create articules pages
        posts.forEach(({ node }) => {
          createPage({
            path: `/articules${node.fields.slug}`,
            component: path.resolve(`./src/layouts/post.js`),
            context: {
              slug: node.fields.slug,
            },
          }) 
        })

      })
    )
  })
}
