import React from 'react'
import Absolute from '../atoms/Absolute'
import { withTheme } from '../behaviour/ThemeProvider'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import View from '@allthings/react-view'

class FloatingButton extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    color: PropTypes.string.isRequired,
    disabledColor: PropTypes.string.isRequired,
  }

  render() {
    const { color, disabled, disabledColor, ...props } = this.props
    return (
      <View>
        <View style={{ height: 38 }} />
        <Absolute
          bottom={0}
          {...css({
            height: 38,
            overflow: 'hidden',
            backgroundColor: disabled ? disabledColor : color,
            width: '100%',
          })}
          flex="flex"
          direction="row"
          alignH="center"
          alignV="center"
          {...props}
        />
      </View>
    )
  }
}

const mapThemeToProps = theme => ({
  color: theme.primary,
  disabledColor: 'lightGray',
})

export default withTheme(mapThemeToProps)(FloatingButton)
