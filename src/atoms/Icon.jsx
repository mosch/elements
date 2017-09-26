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

  static defaultProps = {
    color: 'primary',
    size: 32.5,
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

  render() {
    const { name, children, color, ...props } = this.props
    const isFilled = name.indexOf('Filled') !== -1
    const icon = Icons[name]
    const { width, height } = {
      width: this.getSize(),
      height: this.getSize(),
    }

    return (
      <Theme>
        {({ colorize }) => (
          <View
            {...props}
            style={{ width, height }}
            alignH="center"
            alignV="center"
          >
            {icon
              ? icon({
                  style: {
                    width: width,
                    height: height,
                    fill: isFilled && colorize(color),
                    stroke: !isFilled && colorize(color),
                  },
                })
              : 'Icon not found'}
            {children}
          </View>
        )}
      </Theme>
    )
  }
}

export default Icon
