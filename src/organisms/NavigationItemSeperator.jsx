import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { alpha } from '@allthings/colors'
import View from '@allthings/react-view'
import Line from '../atoms/Line'
import { withTheme } from '../behaviour/ThemeProvider'

const item = css({
  padding: '5px 10px',
})

class NavigationItemSeperator extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    textColor: PropTypes.string,
  }

  static defaultProps = {
    color: 'transparent',
  }

  render() {
    return (
      <View direction="row" alignV="center" {...item}>
        <Line color={alpha(this.props.textColor, 0.1)} />
      </View>
    )
  }
}

const mapThemeToProps = theme => ({
  textColor: theme.text,
})

export default withTheme(mapThemeToProps)(NavigationItemSeperator)
