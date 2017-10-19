const { createFilePath } = require(`gatsby-source-filesystem`)
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//  .BundleAnalyzerPlugin
const path = require(`path`)
const fs = require(`fs`)

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (process.env.NODE_ENV === 'production') {
    config.merge({
      //devtool: false,
      //debug: false
    })
  }
  if (stage === 'build-html') {
    config.loader('null', {
      test: /codemirror\/mode/,
      loader: 'null-loader'
    })
  }
  config.merge({
    resolve: {
      alias: {
        '@allthings/elements': path.resolve(__dirname, '../src'),
      },
    },
  })
  return config
}

function createMarkdownPages(graphql, createPage) {
  return new Promise((resolve, reject) => {
    graphql(`
      {
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
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/markdown.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}

const convertToPath = slug =>
  slug
    .replace(/\/$/, '')
    .replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)
    .replace(/\/\-/g, '/')

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
}

exports.onCreateNode = async ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return Promise.all([createMarkdownPages(graphql, createPage)])
}
