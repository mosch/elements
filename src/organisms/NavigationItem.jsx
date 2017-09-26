import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { alpha } from '@allthings/colors'
import View from '@allthings/react-view'
import Text from '../atoms/Text'
import SquareIconButton from '../molecules/SquareIconButton'
import { color, colorCode } from '../propTypes/color'

const item = (color, hoverColor) =>
  css({
    padding: '5px 10px',
    cursor: 'pointer',
    '> div:nth-child(2)': {
      marginLeft: '16px',
    },
    ':hover': {
      backgroundColor: color,
      // 'backgroundColor': hoverColor, -> USE THIS AS SOON AS WE HAVE AN ACTIVE STATE
      '> div:nth-child(2)': {
        color: hoverColor,
      },
    },
  })

class NavigationItem extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool,
    color: color,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    textColor: color,
  }

  static defaultProps = {
    color: 'transparent',
  }

  render() {
    const { icon, active, onClick, children } = this.props
    const textColor = colorCode(this.props.textColor)
    const color = colorCode(this.props.color)

    return (
      <View
        direction="row"
        alignV="center"
        {...item(alpha('#000000', 0.05), color)}
        onClick={onClick}
      >
        <SquareIconButton color={color} icon={icon} />
        <Text color={active ? color : textColor}>{children}</Text>
      </View>
    )
  }
}

export default NavigationItem
