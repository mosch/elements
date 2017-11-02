import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import View from '../atoms/View'

const Spacer = ({ height = 10, background }) => (
 <View {...css({ width: '100%', height, background })} />
)

Spacer.propTypes = {
  height: PropTypes.number,
  background: PropTypes.string,
}

export default Spacer
