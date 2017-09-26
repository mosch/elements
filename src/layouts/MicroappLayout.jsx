import React from 'react'
import PropTypes from 'prop-types'
import View from '@allthings/react-view'
import { css } from 'glamor'
import { createMQ } from '../behaviour/Responsive'
import { NAVIGATION_WIDTH } from '../layouts/Navigation'

const microapp = (active, withTransition) =>
  css({
    overflowX: 'hidden',
    [createMQ('mobile')]: {
      transform: `translate3d(${active ? `calc(100vw - 60px)` : 0}, 0, 0)`,
      // Due to an IE10-11 bug we have to use this since it also affects Mobile
      // Windows Phones with IE -> https://stackoverflow.com/questions/21142923/ie-10-11-css-transitions-with-calc-do-not-work
      msTransform: active
        ? 'translateX(100vw) translateX(-60px)'
        : 'translateX(0)',
    },
    [createMQ('tablet')]: {
      transform: active && `translate3d(${NAVIGATION_WIDTH}px, 0, 0)`,
    },
  })

export default class MicroappLayout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
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
    const { children, active } = this.props
    const { withTransition } = this.state

    return (
      <View
        direction="column"
        flex="flex"
        {...microapp(active, withTransition)}
        style={{ transition: withTransition && '.35s ease-in-out' }}
        onTransitionEnd={this.handleTransitionEnd}
      >
        {children}
      </View>
    )
  }
}
