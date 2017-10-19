import React from 'react'
import PropTypes from 'prop-types'
import View from '@allthings/react-view'
import Theme from '../behaviour/Theme'

export const Icons = [
  'alarm',
  'alarm-filled',
  'armchair',
  'armchair-filled',
  'arrow-down',
  'arrow-down-filled',
  'arrow-left',
  'arrow-left-filled',
  'arrow-right',
  'arrow-right-filled',
  'arrow-up',
  'arrow-up-filled',
  'baby-stroller',
  'baby-stroller-filled',
  'badge',
  'badge-filled',
  'ball-soccer',
  'ball-soccer-filled',
  'bank-notes',
  'bank-notes-filled',
  'book',
  'book-filled',
  'book-open',
  'book-open-filled',
  'calendar-check',
  'calendar-check-filled',
  'camera',
  'camera-filled',
  'car',
  'car-filled',
  'chat',
  'chat-filled',
  'check',
  'check-circle',
  'check-circle-filled',
  'check-filled',
  'check-light',
  'check-light-filled',
  'cloud',
  'cloud-filled',
  'cloud-star',
  'cloud-star-filled',
  'cog',
  'cog-filled',
  'computer',
  'computer-filled',
  'download',
  'download-filled',
  'dress',
  'dress-filled',
  'edit',
  'edit-filled',
  'email',
  'email-filled',
  'file',
  'file-document',
  'file-document-filled',
  'file-filled',
  'folder',
  'folder-filled',
  'graduate',
  'graduate-filled',
  'hand-bag',
  'hand-bag-filled',
  'heart',
  'heart-beat',
  'heart-beat-filled',
  'heart-crap',
  'heart-crap-filled',
  'heart-filled',
  'house',
  'house-filled',
  'lightbulb',
  'lightbulb-filled',
  'list-bullets',
  'list-bullets-filled',
  'location-pin',
  'location-pin-filled',
  'location-pin-food',
  'location-ping-food-filled',
  'login-key',
  'login-key-filled',
  'logout',
  'logout-filled',
  'man-megaphone',
  'man-megaphone-filled',
  'newspaper',
  'newspaper-filled',
  'paperclip',
  'paperclip-filled',
  'pet-paw',
  'pet-paw-filled',
  'phone',
  'phone-filled',
  'plus',
  'plus-filled',
  'plus-light',
  'plus-light-filled',
  'power',
  'power-filled',
  'present-box',
  'present-box-filled',
  'remove',
  'remove-filled',
  'remove-light',
  'remove-light-filled',
  'sand-glass',
  'sand-glass-filled',
  'search',
  'search-filled',
  'send',
  'send-filled',
  'serving',
  'serving-filled',
  'settings',
  'settings-filled',
  'sharetime',
  'sharetime-filled',
  'shopping-cart',
  'shopping-cart-filled',
  'smartphone',
  'smartphone-filled',
  'sync',
  'sync-filled',
  'ticket',
  'ticket-filled',
  'tile-filled',
  'trash',
  'trash-filled',
  'trending-down',
  'trending-down-filled',
  'trending-up',
  'trending-up-filled',
  'upload',
  'upload-filled',
  'user',
  'user-chat',
  'user-chat-filled',
  'user-filled',
  'user-group',
  'user-group-chat',
  'user-group-chat-filled',
  'user-group-filled',
  'view',
  'view-filled',
  'wrench-screwdriver',
  'wrench-screwdriver-filled',
]

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product, and common interaction
 * patterns that are available.
 *
 * *Note:* To use Icons, you need to wrap everything in a **ResourceProvider**
 */
export default class Icon extends React.Component {
  static propTypes = {
    /** The name of the icon */
    name: PropTypes.oneOf(Icons).isRequired,
    /** The color of the icon */
    color: PropTypes.string,
    /** Can be xs, s, m, l */
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

  getIconName = () => {
    const { name } = this.props
    // Transforms from my-icon-name to myIconName
    let iconName = name.replace(/-([a-z])/g, g => g[1].toUpperCase())
    // Transforms from MyIconNameIcon to myIconName
    return (iconName.charAt(0).toLowerCase() + iconName.substr(1)).replace(
      'Icon',
      ''
    )
  }

  componentDidMount() {
    const { children, name } = this.props
    children && console.warn('Passing children to Icon is deprecated')

    if (!this.context.resourcePath) {
      console.warn(
        'In order to use icons, you need to wrap everything into a ResourceProvider'
      )
    } else if (!this.state.icon) {
      const iconName = this.getIconName()
      const resoucePath = this.context.resourcePath
      const path = `${resoucePath}/react-icons/production/${iconName}.svg`

      fetch(path)
        .then(r => r.text())
        .then(icon => {
          Icon.icons[iconName] = icon
          this.setState({ icon: true })
        })
    }
  }

  render() {
    const { children, color, name, ...props } = this.props
    const iconName = this.getIconName()
    const isFilled = iconName.indexOf('Filled') !== -1
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
            dangerouslySetInnerHTML={{ __html: Icon.icons[iconName] }}
          />
        )}
      </Theme>
    )
  }
}
