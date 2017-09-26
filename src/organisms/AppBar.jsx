import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../atoms/Icon'
import View from '@allthings/react-view'
import Relative from '../atoms/Relative'
import CountIndicator from '../molecules/CountIndicator'
import { css } from 'glamor'
import { withTheme } from '../behaviour/ThemeProvider'
import { color, colorCode } from '../propTypes/color'

const appBar = backgroundColor =>
  css({
    backgroundColor: colorCode(backgroundColor),
    height: '60px',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0px -1px 5px rgba(0,0,0,0.3)',
  })

const Button = ({ children, background, onClick }) => {
  return (
    <View
      onClick={onClick}
      style={{
        background,
        borderLeft: '1px solid rgba(126,140,141,0.2)',
        width: '60px',
        height: '60px',
      }}
      direction="column"
      alignH="center"
      alignV="center"
    >
      {children}
    </View>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

const PlusButton = ({ onClick, color }) => {
  return (
    <Button onClick={onClick}>
      <Icon
        name="PlusLightFilledIcon"
        style={{ height: '26px', width: '26px' }}
        color={color}
        size="s"
      />
    </Button>
  )
}

PlusButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
}

const Notification = ({ count, onClick, color }) => {
  return (
    <Button onClick={onClick}>
      <Relative>
        <Icon
          name="AlarmFilledIcon"
          style={{ height: '26px', width: '26px' }}
          color={color}
          size="s"
        >
          {count > 0 && <CountIndicator count={count} top={-5} right={-5} />}
        </Icon>
      </Relative>
    </Button>
  )
}

Notification.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
}

class AppBar extends React.Component {
  static propTypes = {
    notificationCount: PropTypes.number.isRequired,
    onPlusClick: PropTypes.func.isRequired,
    onTileClick: PropTypes.func.isRequired,
    onBellClick: PropTypes.func.isRequired,
    showClose: PropTypes.bool.isRequired,
    color: color,
    textColor: PropTypes.string,
  }

  static defaultProps = {
    color: 'red',
  }

  render() {
    let {
      notificationCount,
      onTileClick,
      onBellClick,
      onPlusClick,
      showClose,
      color,
      textColor,
      ...props
    } = this.props

    return (
      <View
        {...appBar(color)}
        direction="row"
        alignH="space-between"
        alignV="center"
        {...props}
      >
        <Button onClick={onTileClick}>
          {showClose ? (
            <Icon
              name="RemoveFilledIcon"
              style={{ height: '26px', width: '26px' }}
              size="s"
              color={textColor}
            />
          ) : (
            <Icon
              name="TileFilledIcon"
              style={{ height: '26px', width: '26px' }}
              size="s"
              color={textColor}
            />
          )}
        </Button>
        <View direction="row" alignH="center" alignV="center">
          <Notification
            color={textColor}
            count={notificationCount}
            onClick={onBellClick}
          />
          <PlusButton onClick={onPlusClick} color={textColor} />
        </View>
      </View>
    )
  }
}

const mapThemeToProps = theme => ({
  color: theme.primary,
  textColor: theme.contrast,
})

export default withTheme(mapThemeToProps)(AppBar)
