import React from 'react'
import PropTypes from 'prop-types'
import View from '@allthings/react-view'
import { css } from 'glamor'
import { NAVIGATION_WIDTH } from '../layouts/Navigation'
const app = css({
  maxWidth: 882,
  height: '100%',
  minHeight: '100%',
  width: `calc(100% - ${NAVIGATION_WIDTH}px)`,
  boxShadow: '0px 0px 15px rgba(0,0,0,0.3)',
})

export default class AppLayout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <View direction="column" flex="flex" {...app}>
        {children}
      </View>
    )
  }
}
