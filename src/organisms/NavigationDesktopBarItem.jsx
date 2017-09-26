import React from 'react'
import View from '@allthings/react-view'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { alpha } from '@allthings/colors'
import Icon from '../atoms/Icon'
import Relative from '../atoms/Relative'
import CountIndicator from '../molecules/CountIndicator'
import { withTheme } from '../behaviour/ThemeProvider'

const item = (backgroundColor, color) =>
  css({
    borderRight: '1px solid rgba(126, 140, 141, 0.2)',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: backgroundColor,
    },
  })

class NavigationDesktopBarItem extends React.Component {
  static propTypes = {
    /* The name of the icon that should display */
    icon: PropTypes.string.isRequired,
    /* Callback when the items gets clicked */
    onClick: PropTypes.func.isRequired,
    /* Show a number with the icon */
    count: PropTypes.number,
    color: PropTypes.string,
    textColor: PropTypes.string,
  }

  render() {
    const { icon, onClick, count, color, textColor, ...props } = this.props
    return (
      <View
        onClick={onClick}
        flex="flex"
        direction="column"
        alignV="center"
        alignH="center"
        {...item(alpha(this.props.color, 1))}
        {...props}
      >
        <Relative>
          <Icon name={icon} color={textColor} size="s" />
          {count > 0 && (
            <CountIndicator
              top="-10"
              left="12"
              count={count}
              data-e2e="new-notifications"
            />
          )}
        </Relative>
      </View>
    )
  }
}

const mapThemeToProps = theme => ({
  color: theme.primary,
  textColor: theme.contrast,
})

export default withTheme(mapThemeToProps)(NavigationDesktopBarItem)
