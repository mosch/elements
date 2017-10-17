import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { View } from '@allthings/react-view'

export default function Spacer({ height = 10, background }) {
  return <View {...css({ width: '100%', height, background })} />
}

Spacer.propTypes = {
  height: PropTypes.number,
  background: PropTypes.string,
}
