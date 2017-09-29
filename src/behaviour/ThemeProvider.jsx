import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast, Subscriber } from 'react-broadcast'

export const THEME_CHANNEL = 'theme'

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
      primary: PropTypes.string.isRequired
    }),
    children: PropTypes.node,
  }

  static contextTypes = Subscriber.contextTypes

  render() {
    let root = true
    if (this.context.broadcasts && this.context.broadcasts[THEME_CHANNEL]) {
      root = false
    }
    const { theme, children } = this.props
    return root ? (
      <Broadcast channel={THEME_CHANNEL} value={theme}>
        {children}
      </Broadcast>
    ) : (
      <Subscriber channel={THEME_CHANNEL}>
        {previousTheme => (
          <Broadcast
            channel={THEME_CHANNEL}
            value={{ ...previousTheme, ...theme }}
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
