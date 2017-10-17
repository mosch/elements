import React from 'react'
import PropTypes from 'prop-types'
import View from '@allthings/react-view'
import Theme from '../behaviour/Theme'

const Icons = {}

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product, and common interaction
 * patterns that are available.
 *
 * *Note:* To use Icons, you need to wrap everything in a **ResourceProvider**
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
    icon: typeof Icon[this.props.name] !== 'undefined',
  }

  static defaultProps = {
    color: 'primary',
    size: 32.5,
  }

  static contextTypes = {
    resourcePath: PropTypes.string,
  }

  static icons = {}

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
    const { children, name } = this.props
    children && console.warn('Passing children to Icon is deprecated')

    if (!this.context.resourcePath) {
      console.warn(
        'In order to use icons, you need to wrap everything into a ResourceProvider'
      )
    } else if (!this.state.icon) {
      // Transforms from MyIconNameIcon to myIconName
      const iconName = (name.charAt(0).toLowerCase() + name.substr(1)).replace('Icon', '')

      fetch(
        `${this.context
          .resourcePath}/react-icons/production/${iconName}.svg`
      )
        .then(r => r.text())
        .then(icon => {
          Icon.icons[this.props.name] = icon
          this.setState({ icon: true })
        })
    }
  }

  render() {
    const { children, name, color, ...props } = this.props
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
            dangerouslySetInnerHTML={{ __html: Icon.icons[name] }}
          />
        )}
      </Theme>
    )
  }
}

export default Icon
