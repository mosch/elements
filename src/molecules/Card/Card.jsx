import PropTypes from 'prop-types'
import React from 'react'
import View from '../../atoms/View'
import { css } from 'glamor'

const style = css({
  width: '100%',
  background: 'white',
  boxShadow: '2px 2px 2px rgba(230, 230, 230, 0.5)',
})

const Card = ({ children, containerStyle, ...props }) => {
  return (
    <View {...css(style, containerStyle)} {...props}>
      {children}
    </View>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  containerStyle: PropTypes.object,
}

export default Card
