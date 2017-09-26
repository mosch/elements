import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../atoms/Icon'
import Circle from '../atoms/Circle'
import { color } from '../propTypes/color'
import { withTheme } from '../behaviour/ThemeProvider'

class ListIcon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: color,
    backgroundColor: color,
  }

  render() {
    const { name, backgroundColor, color } = this.props
    return (
      <Circle color={backgroundColor} fill height={40} width={40}>
        <Icon color={color} size="s" name={name} />
      </Circle>
    )
  }
}

const mapThemeToProps = theme => ({
  backgroundColor: theme.primary,
  color: theme.contrast,
})

export default withTheme(mapThemeToProps)(ListIcon)
