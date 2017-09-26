import React from 'react'
import View from '@allthings/react-view'
import PropTypes from 'prop-types'
import { withTheme } from '../behaviour/ThemeProvider'
import { color, lightness } from 'kewler'

class NavigationDesktopBar extends React.Component {
  static propTypes = {
    /* Just pass NavigationDesktopBarItems as children */
    backgroundColor: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  render() {
    const { backgroundColor } = this.props
    return (
      <View
        style={{ height: 50, marginBottom: 5, backgroundColor }}
        direction="row"
        alignV="stretch"
      >
        {this.props.children}
      </View>
    )
  }
}

const mapThemeToProps = theme => ({
  backgroundColor: color(theme.primary, lightness(-4)),
})

export default withTheme(mapThemeToProps, 'ThemedNavigationDesktopBar')(
  NavigationDesktopBar
)
