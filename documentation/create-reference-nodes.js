const fs = require(`fs`)
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)
const reactDocs = require('react-docgen')
const crypto = require('crypto')

const convertToPath = slug =>
  slug
    .replace(/\/$/, '')
    .replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)
    .replace(/\/\-/g, '/')

module.exports = async function (node, boundActionCreators) {
  const { createNode } = boundActionCreators

  if (
    node.sourceInstanceName === 'source' &&
    node.internal.mediaType === `text/jsx`
  ) {
    const base = node.relativeDirectory.split('/')[0]
    const componentDocPath = convertToPath(node.base)
      .substring(1)
      .replace('.jsx', '.html')
    const slug = `reference/${base}/${componentDocPath}`
    try {
      const content = await readFileAsync(node.absolutePath, {
        encoding: 'utf8',
      })
      const componentInfo = reactDocs.parse(content)

      const newNode = Object.assign({}, {
        id: `${node.id} ReactDocs`,
        docs: componentInfo,
        slug: slug,
        parent: node.id,
        children: [],
        internal: {
          type: `JavascriptReference`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(componentInfo))
            .digest(`hex`),
        },
      })
      createNode(newNode)
    } catch (e) {
      console.error('Error in ', node.absolutePath)
      console.error(e)
    }
  }
}
