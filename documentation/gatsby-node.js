const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const createReferenceNodes = require('./create-reference-nodes')

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (process.env.NODE_ENV === 'production') {
    config.merge({
      devtool: false,
      debug: false,
    })
  }
  if (stage === 'build-html') {
    config.loader('null-a', {
      test: /codemirror\/mode/,
      loader: 'null-loader',
    })
    config.loader('null-b', {
      test: /webfontloader/,
      loader: 'null-loader',
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

function createReactDocs(graphql, createPage) {
  return new Promise(async (resolve, reject) => {
    graphql(`
      {
        allFile(filter: { internal: { mediaType: { eq: "text/jsx" } } }) {
          edges {
            node {
              id
              absolutePath
              internal {
                contentDigest
                mediaType
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allFile.edges.map(async ({ node }) => {})
      resolve()
    })
  })
}

exports.onCreateNode = async ({ node, getNode, boundActionCreators, loadNodeContent }) => {
  const { createNodeField, createNode } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug.slice(0, -1) + '.html',
    })
  }

  // createReferenceNodes(node, boundActionCreators)
  if (node.internal.mediaType === `text/markdown`) {
    const content = await loadNodeContent(node)
    createNodeField({
      node,
      name: `content`,
      value: content,
    })
  }
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return Promise.all([
    createMarkdownPages(graphql, createPage),
    // createReactDocs(graphql, createPage),
  ])
}
