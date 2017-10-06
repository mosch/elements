import React from 'react'
import PropTypes from 'prop-types'

class ResourceProvider extends React.Component {
  getChildContext() {
    return { resourcePath: this.props.resourcePath }
  }

  static childContextTypes = {
    resourcePath: PropTypes.string,
  }

  static propTypes = {
    resourcePath: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    resourcePath: 'https://static.allthings.me',
    children: null
  }

  render() {
    return this.props.children
  }
}

export default ResourceProvider
