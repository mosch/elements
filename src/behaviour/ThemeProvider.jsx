import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast, Subscriber } from 'react-broadcast'

export const ThemeShape = PropTypes.shape({
  primaryColor: PropTypes.string,
})

export const THEME_CHANNEL = 'theme'

export default class ThemeProvider extends React.PureComponent {
  static propTypes = {
    root: PropTypes.bool,
    theme: ThemeShape.isRequired,
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
