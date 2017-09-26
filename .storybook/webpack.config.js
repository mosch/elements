const webpack = require('webpack')
const path = require('path')
const baseConfig = require('../webpack/config.js')
const merge = require('lodash/merge')

module.exports = storybookConfig => {
  storybookConfig.resolve = merge(storybookConfig.resolve, baseConfig.resolve)
  storybookConfig.module.rules[0].exclude = baseConfig.module.rules[0].exclude

  /* We need to mock out fs and module, so prettier
     can work in browser environment */
  storybookConfig.node = {
    fs: 'empty',
    module: 'empty',
  }
  return storybookConfig
}
