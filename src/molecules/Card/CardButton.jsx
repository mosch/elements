import PropTypes from 'prop-types'
import React from 'react'
import View from '../../atoms/View'
import { css } from 'glamor'

const style = css({
  ':hover': {
    cursor: 'pointer',
    background: '#f9f9f9',
  },
})

export default function CardButton({
  children,
  onClick = noop => noop,
  ...props
}) {
  return (
    <View
      alignH="center"
      flex="flex"
      alignV="center"
      direction="row"
      onClick={onClick}
      {...style}
      {...props}
    >
      {children}
    </View>
  )
}

CardButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}
