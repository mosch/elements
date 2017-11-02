import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'glamor'
import View from '../atoms/View'
import Theme from '../behaviour/Theme'
import WebFont from 'webfontloader'

if (typeof window !== `undefined`) {
  WebFont.load({
    classes: false,
    google: {
      families: ['Open Sans:300,600'],
    },
  })
}

const availableSizes = {
  xs: 10,
  s: 12,
  m: 13,
  l: 14,
  xl: 18,
  xxl: 18,
  giant: 24,
}

/**
 * Text will be used for everywhere a text appears.
 * The only exception is in molecules that already provide the
 * text component for you.
 */
class Text extends React.Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    autoBreak: PropTypes.bool,
    block: PropTypes.bool,
    children: PropTypes.node,
    color: PropTypes.string,
    italic: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'giant']),
    strong: PropTypes.bool,
    underline: PropTypes.bool,
    lineThrough: PropTypes.bool,
  }

  static defaultProps = {
    size: 'l',
    block: true,
    color: 'text',
  }

  render() {
    const {
      color,
      block,
      children,
      italic,
      size,
      strong,
      align,
      underline,
      autoBreak,
      lineThrough,
      ...props
    } = this.props

    const styles = css({
      display: block ? 'block' : 'inline',
      fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
      fontStyle: italic && 'italic',
      fontWeight: strong && '600',
      fontSize: availableSizes[size],
      textDecoration:
        (underline && 'underline') || (lineThrough && 'line-through'),
      textAlign: align,
      whiteSpace: autoBreak && 'pre-wrap',
      wordBreak: autoBreak && 'break-word',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    })

    return (
      <Theme>
        {({ colorize }) => (
          <View {...css(styles, { color: colorize(color) })} {...props}>
            {children}
          </View>
        )}
      </Theme>
    )
  }
}

export default Text
