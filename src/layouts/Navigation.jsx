import React from 'react'
import PropTypes from 'prop-types'
import View from '@allthings/react-view'
import { css } from 'glamor'
import { createMQ } from '../behaviour/Responsive'

import { ThemeShape, withTheme } from '../behaviour/ThemeProvider'

export const NAVIGATION_WIDTH = 285

const navigation = (active, withTransition, background) =>
  css({
    WebkitOverflowScrolling: 'touch',
    width: NAVIGATION_WIDTH,
    color: '#fff',
    overflow: 'auto',
    background,
    height: '100%',
    borderRight: '1px solid rgba(0,0,0,0.05)',
    [createMQ('mobile', 'tablet')]: {
      position: 'absolute',
      width: 'calc(100vw - 60px)',
      top: 0,
      boxShadow: `${active ? '0px 0px 25px rgba(0,0,0,0.8)' : 'none'}`,
      zIndex: 3,
      transform: `translate3d(${active ? 0 : 'calc(-100vw + 60px)'}, 0, 0)`,
      // Due to an IE10-11 bug we have to use this since it also affects Mobile
      // Windows Phones with IE -> https://stackoverflow.com/questions/21142923/ie-10-11-css-transitions-with-calc-do-not-work
      msTransform: active
        ? 'translateX(0)'
        : 'translateX(-100vw) translateX(60px)',
    },
    [createMQ('tablet')]: {
      width: NAVIGATION_WIDTH,
      transform: `translate3d(${active ? 0 : -NAVIGATION_WIDTH}px, 0, 0)`,
    },
  })

class Navigation extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
    theme: ThemeShape.isRequired,
  }

  state = {
    withTransition: !this.props.active,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({ withTransition: true })
    }
  }

  handleTransitionEnd = () => {
    this.setState({ withTransition: false })
  }

  render() {
    const { children, active, theme } = this.props
    const { withTransition } = this.state

    return (
      <View
        direction="column"
        alignV="stretch"
        {...navigation(active, withTransition, theme.primary)}
        style={{ transition: withTransition && '.35s ease-in-out' }}
        onTransitionEnd={this.handleTransitionEnd}
      >
        {children}
      </View>
    )
  }
}

export default withTheme(null, 'ThemedNavigation')(Navigation)
