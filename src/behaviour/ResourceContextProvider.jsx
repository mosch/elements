import React from 'react'
import PropTypes from 'prop-types'

class ResourceContextProvider extends React.Component {
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
    resourcePath: '',
  }

  render() {
    return this.props.children
  }
}

export default ResourceContextProvider
