import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast, Subscriber } from 'react-broadcast'
import { ColorPalette } from '@allthings/colors'

export const THEME_CHANNEL = 'theme'

export const defaultTheme = {
  primary: ColorPalette.primary.blue,
  text: ColorPalette.text.primary,
  secondaryText: ColorPalette.text.primary,
  titleColor: ColorPalette.text.primary,
  contrast: ColorPalette.white,
  warn: ColorPalette.red,
  disabled: ColorPalette.grey,
  background: ColorPalette.background.bright,
  textOnBackground: ColorPalette.white,
}

/**
* All elements support theming by default, and therefore every element must be wrapped inside a ThemeProvider.
* The ThemeProvider allows you to define the default colors for most elements.
*
* **Example**: If you want all you buttons to be red, instead of writing <Button color="red" /> all the time, you might want to set the "primary" color of your theme to red.
**/
export default class ThemeProvider extends React.PureComponent {
  static propTypes = {
    root: PropTypes.bool,
    theme: PropTypes.shape({
      primary: PropTypes.string,
      text: PropTypes.string,
      secondaryText: PropTypes.string,
      titleColor: PropTypes.string,
      contrast: PropTypes.string,
      warn: PropTypes.string,
      disabled: PropTypes.string,
      background: PropTypes.string,
      textOnBackground: PropTypes.string,
    }),
    children: PropTypes.node,
  }

  static defaultProps = {
    theme: defaultTheme,
  }

  static contextTypes = Subscriber.contextTypes

  render() {
    let root = true
    if (this.context.broadcasts && this.context.broadcasts[THEME_CHANNEL]) {
      root = false
    }
    const { theme, children } = this.props
    return root ? (
      <Broadcast
        channel={THEME_CHANNEL}
        value={{
          ...ThemeProvider.defaultProps.theme,
          ...theme,
        }}
      >
        {children}
      </Broadcast>
    ) : (
      <Subscriber channel={THEME_CHANNEL}>
        {previousTheme => (
          <Broadcast
            channel={THEME_CHANNEL}
            value={{
              ...ThemeProvider.defaultProps.theme,
              ...previousTheme,
              ...theme,
            }}
          >
            {children}
          </Broadcast>
        )}
      </Subscriber>
    )
  }
}

export const ThemeShape = ThemeProvider.propTypes.theme

export const withTheme = (mapThemeToProps, displayName) => WrappedComponent =>
  // eslint-disable-next-line
  class extends React.PureComponent {
    static displayName = displayName || WrappedComponent.displayName
    static component = WrappedComponent

    renderComponent = theme => {
      const props = !mapThemeToProps
        ? { theme }
        : mapThemeToProps(theme, this.props)

      return <WrappedComponent {...this.props} {...props} />
    }

    render() {
      return (
        <Subscriber channel={THEME_CHANNEL}>{this.renderComponent}</Subscriber>
      )
    }
  }
