const path = require('path')

module.exports = storybookConfig => {
  /* We need to mock out fs and module, so prettier
     can work in browser environment */
  storybookConfig.node = {
    fs: 'empty',
    module: 'empty',
  }
  return storybookConfig
}
