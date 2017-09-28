import React from 'react'
import PropTypes from 'prop-types'
import View from '@allthings/react-view'
//import * as Icons from '@allthings/react-icons/src/index'
import Theme from '../behaviour/Theme'

const Icons = {}

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product, and common interaction
 * patterns that are available.
 */
class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['xs', 's', 'm', 'l']),
      PropTypes.number,
    ]),
    children: PropTypes.node,
  }

  state = {
    icon: null,
  }

  static defaultProps = {
    color: 'primary',
    size: 32.5,
  }

  static contextTypes = {
    resourcePath: PropTypes.string,
  }

  getSize = () => {
    switch (this.props.size) {
      case 'xs':
        return 16
      case 's':
        return 21.5
      case 'm':
        return 27.5
      case 'l':
        return 43
      default:
        return this.props.size
    }
  }

  componentDidMount() {
    const path =
      typeof this.context.resourcePath === 'undefined'
        ? 'https://static.allthings.me/app/prod/'
        : this.context.resourcePath
    fetch(
      `${path}/static/icons/1.0.0/${this.props.name.replace('Icon', '.svg')}`
    )
      .then(r => r.text())
      .then(x => this.setState({ icon: x }))
  }

  render() {
    const { children, name, color, ...props } = this.props
    children && console.warn('Passing children to Icon is deprecated', children)
    const isFilled = name.indexOf('Filled') !== -1
    const { width, height } = {
      width: this.getSize(),
      height: this.getSize(),
    }

    return (
      <Theme>
        {({ colorize }) => (
          <View
            {...props}
            style={{
              width: width,
              height: height,
              fill: isFilled && colorize(color),
              stroke: !isFilled && colorize(color),
            }}
            alignH="center"
            alignV="center"
            dangerouslySetInnerHTML={{ __html: this.state.icon }}
          />
        )}
      </Theme>
    )
  }
}

export default Icon
